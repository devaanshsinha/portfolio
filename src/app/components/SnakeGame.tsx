'use client';

import { useState, useEffect, useCallback } from 'react';
import { HiX } from 'react-icons/hi';

interface Position {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

export default function SnakeGame({ onClose }: { onClose: () => void }) {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Position>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem('snake-high-score');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  const generateFood = useCallback(() => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    setHasStarted(false);
    setIsPaused(false);
  };

  const moveSnake = useCallback(() => {
    if (!hasStarted || isPaused || gameOver || (direction.x === 0 && direction.y === 0)) {
      return;
    }

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => {
          const newScore = prev + 10;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('snake-high-score', newScore.toString());
          }
          return newScore;
        });
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, hasStarted, isPaused, generateFood, highScore]);

  // Game loop
  useEffect(() => {
    const interval = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(interval);
  }, [moveSnake]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!hasStarted && e.key === ' ') {
        setHasStarted(true);
        setDirection({ x: 1, y: 0 });
        return;
      }

      if (e.key === ' ' && hasStarted && !gameOver) {
        setIsPaused(!isPaused);
        return;
      }

      if (isPaused || !hasStarted || gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, hasStarted, isPaused, gameOver]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--console-bg)] border-2 border-[var(--console-border)] rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[var(--console-primary)]">SNAKE GAME</h2>
          <button
            onClick={onClose}
            className="text-[var(--console-text)] hover:text-[var(--console-primary)] transition-colors"
          >
            <HiX size={24} />
          </button>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div className="text-[var(--console-text)]">
            Score: <span className="text-[var(--console-primary)] font-bold">{score}</span>
          </div>
          <div className="text-[var(--console-text)]">
            High Score: <span className="text-[var(--console-secondary)] font-bold">{highScore}</span>
          </div>
        </div>

        <div className="relative mx-auto" style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}>
          <div 
            className="absolute inset-0 border-2 border-[var(--console-border)]"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
              backgroundColor: 'var(--console-bg-light)',
            }}
          >
            {/* Snake */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  backgroundColor: index === 0 ? 'var(--console-primary)' : 'var(--console-secondary)',
                  border: '1px solid var(--console-bg)',
                  boxShadow: index === 0 ? '0 0 10px var(--console-primary)' : 'none',
                }}
              />
            ))}

            {/* Food */}
            <div
              className="absolute animate-pulse"
              style={{
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                backgroundColor: 'var(--console-accent)',
                border: '1px solid var(--console-bg)',
                borderRadius: '50%',
                boxShadow: '0 0 10px var(--console-accent)',
              }}
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          {!hasStarted && !gameOver && (
            <p className="text-[var(--console-text)] text-sm">
              Press <span className="font-bold text-[var(--console-primary)]">SPACE</span> to start
            </p>
          )}
          {hasStarted && !gameOver && (
            <p className="text-[var(--console-text)] text-sm">
              Use <span className="font-bold text-[var(--console-primary)]">ARROW KEYS</span> or <span className="font-bold text-[var(--console-primary)]">WASD</span> to move
              {isPaused && <span className="block mt-1 text-[var(--console-accent)]">PAUSED</span>}
            </p>
          )}
          {gameOver && (
            <div>
              <p className="text-[var(--console-accent)] font-bold mb-2">GAME OVER!</p>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded hover:bg-[var(--console-secondary)] transition-colors"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}