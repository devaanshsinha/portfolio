"use client";

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

float fbm(vec2 st) {
  float value = 0.0;
  float scale = 0.5;
  for (int i = 0; i < 5; i++) {
    value += scale * sin(3.1415 * st.x) * cos(3.1415 * st.y);
    st = mat2(1.6, -1.2, 1.2, 1.6) * st + 0.35;
    scale *= 0.5;
  }
  return value;
}

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv * 2.0 - 1.0) * uResolution.xy / mr;

  vec2 cursor = (uMouse - vec2(0.5)) * uAmplitude;
  uv += cursor;

  float t = uTime * 0.15 * uSpeed;
  float wave = fbm(uv + vec2(t));
  float swirl = fbm(vec2(length(uv + cursor) * 0.6 + t * 0.8));

  float pattern = sin(wave * 3.5 + swirl * 2.0);
  pattern = 0.5 + 0.5 * pattern;
  pattern = pow(pattern, 2.4);

  vec3 gradient = mix(uColorA, uColorB, pattern);

  float bands = sin((uv.x + uv.y) * 4.0 + t * 2.0);
  bands = smoothstep(-0.15, 0.15, bands);

  vec3 sheen = mix(gradient, vec3(0.98, 0.95, 1.0), bands * 0.6);

  float caustics = smoothstep(0.0, 1.0, sin(swirl * 6.0 + t * 1.8));
  vec3 highlight = mix(sheen, vec3(1.0, 0.98, 0.9), caustics * 0.45);

  vec3 color = highlight;

  gl_FragColor = vec4(color, 1.0);
}
`;

export interface IridescenceProps {
  primaryColor?: [number, number, number];
  secondaryColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
  className?: string;
}

export default function Iridescence({
  primaryColor = [0.95, 0.42, 0.25],
  secondaryColor = [0.1, 0.85, 1.0],
  speed = 1.0,
  amplitude = 0.08,
  mouseReact = true,
  className,
}: IridescenceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    renderer.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    let program: Program | null = null;

    const resize = () => {
      const { offsetWidth, offsetHeight } = container;
      renderer.setSize(offsetWidth, offsetHeight);
      gl.canvas.style.width = `${offsetWidth}px`;
      gl.canvas.style.height = `${offsetHeight}px`;
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / Math.max(gl.canvas.height, 1.0),
        );
      }
    };

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new Color(...primaryColor) },
        uColorB: { value: new Color(...secondaryColor) },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height),
        },
        uMouse: { value: new Float32Array([mouseRef.current.x, mouseRef.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let rafId = 0;

    const update = (time: number) => {
      rafId = requestAnimationFrame(update);
      if (program) {
        program.uniforms.uTime.value = time * 0.001;
      }
      renderer.render({ scene: mesh });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1.0 - (event.clientY - rect.top) / rect.height;
      mouseRef.current = { x, y };
      if (program) {
        const uniform = program.uniforms.uMouse.value as Float32Array;
        uniform[0] = x;
        uniform[1] = y;
      }
    };

    window.addEventListener("resize", resize);
    if (mouseReact) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    resize();
    container.appendChild(gl.canvas);
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      if (mouseReact) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [amplitude, mouseReact, primaryColor, secondaryColor, speed]);

  return <div ref={containerRef} className={className ?? "iridescence-canvas"} />;
}
