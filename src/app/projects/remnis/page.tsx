import Link from 'next/link';
import { HiArrowLeft, HiCode, HiExternalLink, HiOutlineChip, HiOutlineSearch } from 'react-icons/hi';

import PortfolioLayout from '../../components/PortfolioLayout';

export default function Remnis() {
  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--console-text-dim)] transition-colors hover:text-[var(--console-primary)]"
        >
          <HiArrowLeft />
          <span>Back to Projects</span>
        </Link>

        <div className="flex flex-col gap-4 border-b border-[var(--console-border)] pb-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-[var(--console-primary)] sm:text-3xl">
              Remnis
            </h1>
            <p className="text-lg text-[var(--console-secondary)]">
              Local Work Memory for macOS Developers
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 lg:min-w-[210px] lg:items-stretch">
            <a
              href="https://www.remnis.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--console-primary)] px-4 py-2 text-sm font-bold text-[var(--console-bg)] transition-colors hover:bg-[var(--console-secondary)]"
            >
              <HiExternalLink />
              Visit Live Site
            </a>
            <a
              href="https://github.com/devaanshsinha/remnis-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--console-primary)] bg-[var(--console-bg)] px-4 py-2 text-sm font-bold text-[var(--console-primary)] transition-colors hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)]"
            >
              <HiCode />
              View Source
            </a>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Overview</h2>
          <p className="leading-relaxed text-[var(--console-text)]">
            I started building Remnis to solve a problem I keep running into as an engineer: context fragmentation. Terminal output,
            IDE state, browser tabs, and notes are all useful in the moment, but they disappear fast once I switch tasks. Remnis is
            meant to turn that short-lived workflow context into something I can actually recover later.
          </p>
          <p className="leading-relaxed text-[var(--console-text)]">
            The architecture uses a Tauri shell for the desktop interface and a Python sidecar for backend processing. The full system
            is designed to stay on-device, so I can search my workflow history semantically without sending sensitive data, code
            context, or machine activity to the cloud.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="mb-4 text-xl font-bold text-[var(--console-secondary)]">What It Does Right Now</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Feature
              title="Desktop + Sidecar Split"
              description="Tauri desktop app talks to a local FastAPI sidecar so the UI and workflow capture pipeline stay decoupled."
            />
            <Feature
              title="Active Window Observer"
              description="Observer v1 watches active macOS window context and prepares events for the local ingest pipeline."
            />
            <Feature
              title="Local Ingest + Search APIs"
              description="`/health`, `/ingest`, `/observer/stats`, and `/search` are already wired for readiness checks, ingestion, diagnostics, and keyword retrieval."
            />
            <Feature
              title="Deduped Local Storage"
              description="Events are normalized, debounced, deduplicated, and persisted locally in JSONL so recall stays fast and private."
            />
          </div>
        </div>

        <div className="space-y-5 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Architecture</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <ArchitectureCard
              title="Desktop App"
              description="Tauri + React + TypeScript power the desktop shell and current UI foundation for future recall, timeline, and HUD flows."
              badges={['Tauri', 'React', 'TypeScript', 'Tailwind CSS']}
            />
            <ArchitectureCard
              title="Local Sidecar"
              description="A Python sidecar handles ingest, health, diagnostics, embeddings, and search endpoints so the heavier backend processing can run independently from the desktop shell."
              badges={['Python', 'FastAPI', 'REST APIs', 'Schema Validation']}
            />
            <ArchitectureCard
              title="Capture Pipeline"
              description="Observer events are normalized, hashed, deduplicated, and debounced before they are stored, which keeps the memory layer clean instead of noisy."
              badges={['macOS', 'Event Processing', 'Hashing', 'Debounce']}
            />
            <ArchitectureCard
              title="Local-First RAG"
              description="Remnis uses LanceDB and open-source embedding models to vectorize system metadata and workflow history, enabling semantic search over past tasks, errors, files, and app context while everything stays local."
              badges={['JSONL', 'LanceDB', 'Embeddings', 'Semantic Search']}
            />
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Workflow</h2>
          <WorkflowStep
            title="1. Capture"
            description="The macOS observer tracks the active window and packages context into lightweight local events."
          />
          <WorkflowStep
            title="2. Normalize"
            description="The ingest layer validates the payload, hashes it, removes noisy duplicates, and stores only the useful context."
          />
          <WorkflowStep
            title="3. Search"
            description="The desktop app queries the local sidecar to recover recent context through keyword ranking and future semantic recall."
          />
          <WorkflowStep
            title="4. Resume Work"
            description="The long-term UX is a fast Spotlight-style flow that helps you jump back into a task without rebuilding context from scratch."
          />
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">In Progress</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-[var(--console-border)] bg-[var(--console-bg)] p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-[var(--console-accent)]">
                <HiOutlineSearch />
                Semantic Recall
              </h3>
              <p className="text-sm leading-relaxed text-[var(--console-text)]">
                The goal is to make queries like &quot;that docker error from this morning&quot; resolve to the right terminal output,
                file edits, and surrounding context without needing exact keywords.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--console-border)] bg-[var(--console-bg)] p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-[var(--console-accent)]">
                <HiOutlineChip />
                Better Recall UX
              </h3>
              <p className="text-sm leading-relaxed text-[var(--console-text)]">
                I am also building toward a Spotlight-style HUD, faster ranking, and cleaner context snippets so retrieval feels
                instant while I am working instead of becoming a slow forensic search tool.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Challenges & Solutions</h2>
          <Challenge
            title="Privacy-Preserving Search"
            description="A major design constraint is that the system should be useful without relying on cloud inference. Running open-source embedding models fully on-device lets Remnis perform intelligent retrieval over private workflow history without leaking sensitive engineering context."
          />
          <Challenge
            title="Inference Speed vs. IPC Latency"
            description="One of the harder engineering problems has been balancing model inference speed with the Inter-Process Communication overhead between the Tauri shell and Python sidecar. The system has to feel instantaneous, which means retrieval quality only matters if the round trip is fast enough to stay invisible during real work."
          />
          <Challenge
            title="Useful Context, Not Noise"
            description="Workflow memory can get noisy quickly, so the ingest path normalizes events, hashes payloads, and deduplicates repeated activity before it reaches retrieval. That keeps the history searchable without turning every app switch into useless clutter."
          />
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Impact Direction</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard value="4" label="Local API routes already running" />
            <MetricCard value="1" label="Observer loop shipping in v1 today" />
            <MetricCard value="0" label="Cloud dependency required for core capture" />
          </div>
          <p className="text-sm text-[var(--console-text-dim)]">
            The product direction is centered on private, intent-based recall for developers who want better memory without shipping their workflow data to someone else&apos;s servers.
          </p>
        </div>

      </div>
    </PortfolioLayout>
  );
}

interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 text-[var(--console-primary)]">▸</span>
      <div>
        <h3 className="font-semibold text-[var(--console-text)]">{title}</h3>
        <p className="text-sm text-[var(--console-text-dim)]">{description}</p>
      </div>
    </div>
  );
}

interface ArchitectureCardProps {
  title: string;
  description: string;
  badges: string[];
}

function ArchitectureCard({ title, description, badges }: ArchitectureCardProps) {
  return (
    <div className="space-y-3 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg)] p-4">
      <div>
        <h3 className="font-semibold text-[var(--console-primary)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--console-text)]">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded border border-[var(--console-secondary)] px-2 py-1 text-xs text-[var(--console-secondary)]"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

interface WorkflowStepProps {
  title: string;
  description: string;
}

function WorkflowStep({ title, description }: WorkflowStepProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 text-[var(--console-primary)]">▸</span>
      <div>
        <h3 className="font-semibold text-[var(--console-text)]">{title}</h3>
        <p className="text-sm text-[var(--console-text-dim)]">{description}</p>
      </div>
    </div>
  );
}

interface ChallengeProps {
  title: string;
  description: string;
}

function Challenge({ title, description }: ChallengeProps) {
  return (
    <div>
      <h3 className="font-semibold text-[var(--console-accent)]">{title}</h3>
      <p className="mt-1 text-sm text-[var(--console-text)]">{description}</p>
    </div>
  );
}

interface MetricCardProps {
  value: string;
  label: string;
}

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded border border-[var(--console-border)] bg-[var(--console-bg)] p-4 text-center">
      <div className="mb-2 text-2xl font-bold text-[var(--console-primary)]">{value}</div>
      <p className="text-sm text-[var(--console-text-dim)]">{label}</p>
    </div>
  );
}
