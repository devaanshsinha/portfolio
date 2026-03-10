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
            Remnis is a local macOS memory engine for developers. I am building it to solve the context fragmentation problem that
            shows up across terminals, editors, browsers, docs, and chat tools, where useful work context disappears as soon as you
            switch tasks.
          </p>
          <p className="leading-relaxed text-[var(--console-text)]">
            The product strategy is explicitly local-only and capture-first. Remnis should make it possible to search by intent, not
            exact keywords, but that only works if the capture pipeline is reliable, low-noise, and lightweight enough to run in the
            background without getting in the way.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="mb-4 text-xl font-bold text-[var(--console-secondary)]">What It Does Right Now</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Feature
              title="Desktop + Sidecar Split"
              description="The Tauri desktop shell starts reliably, talks to the local sidecar, and can fetch `/health` with readiness flags."
            />
            <Feature
              title="Active Window Observer"
              description="Observer v1 captures active-window context on macOS as the initial high-signal source for work memory."
            />
            <Feature
              title="Local Ingest + Search APIs"
              description="`/health`, `/ingest`, `/observer/stats`, and `/search` are wired for readiness checks, diagnostics, ingest, and keyword-search fallback."
            />
            <Feature
              title="Deduped Local Storage"
              description="Events are normalized, hashed, debounced, deduplicated, and persisted locally in JSONL before future indexing."
            />
          </div>
        </div>

        <div className="space-y-5 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Architecture</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <ArchitectureCard
              title="Desktop Shell"
              description="Tauri + React + TypeScript handle the UI, hotkey, menu bar direction, and local orchestration between the desktop shell and sidecar."
              badges={['Tauri', 'React', 'TypeScript', 'Tailwind CSS']}
            />
            <ArchitectureCard
              title="Local Sidecar"
              description="The Python FastAPI sidecar owns the observer, ingest pipeline, health surface, and search endpoints so the capture and retrieval logic can evolve independently from the desktop UI."
              badges={['Python', 'FastAPI', 'REST APIs', 'Schema Validation']}
            />
            <ArchitectureCard
              title="Capture Pipeline"
              description="The pipeline is observe, normalize, hash, debounce, dedupe, store, then eventually index. The product depends more on high-signal capture than on model sophistication."
              badges={['macOS', 'Event Processing', 'Hashing', 'Debounce']}
            />
            <ArchitectureCard
              title="Semantic Layer"
              description="The intended storage layer is LanceDB with vectors plus metadata persistence, but the local embedding/indexing pipeline and heavier query-time reasoning model are not integrated into runtime yet."
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
            title="3. Store and Index"
            description="Accepted events are persisted locally and later indexed with the lightweight embedding model once the semantic pipeline is integrated."
          />
          <WorkflowStep
            title="4. Query and Render"
            description="Queries will be embedded, matched semantically, optionally reranked or synthesized by a heavier local model, and surfaced in a HUD with app identity, snippet, and time context."
          />
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Two-Model End State</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-[var(--console-border)] bg-[var(--console-bg)] p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-[var(--console-accent)]">
                <HiOutlineSearch />
                Model 1: Background Indexing
              </h3>
              <p className="text-sm leading-relaxed text-[var(--console-text)]">
                Remnis is intended to ship with an always-on local embedding and indexing model for event and query embeddings. The
                baseline planned model is `all-MiniLM-L6-v2`, used in the background for semantic indexing with low overhead.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--console-border)] bg-[var(--console-bg)] p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-[var(--console-accent)]">
                <HiOutlineChip />
                Model 2: Query-Time Reasoning
              </h3>
              <p className="text-sm leading-relaxed text-[var(--console-text)]">
                A second, heavier local model is reserved for query-time use only when the user invokes Remnis and wants reranking,
                synthesis, reminders, related-context explanations, or a better final answer.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Strategy & Challenges</h2>
          <Challenge
            title="Capture Quality Comes First"
            description="The hardest part of the product is reliable, high-signal capture across sources. Better embeddings or reasoning cannot compensate for weak or noisy capture, so the architecture is intentionally capture-first."
          />
          <Challenge
            title="Local-Only Constraints"
            description="Everything is designed to stay local by default, with explicit OS permission handling, low CPU and memory overhead, and graceful failure when dependencies or permissions are unavailable."
          />
          <Challenge
            title="Fast Retrieval Later"
            description="Once both local model tiers are integrated, the product will still need to balance background indexing cost, query-time reasoning cost, and the boundary between the desktop shell and local sidecar so search feels immediate."
          />
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Next Expansion</h2>
          <div className="space-y-3">
            <WorkflowStep
              title="Browser Adapter"
              description="The next high-value source is browser capture, especially URL, title, and snippet context."
            />
            <WorkflowStep
              title="Clipboard + Notifications"
              description="Clipboard and notification capture follow after browser integration to make cross-app recall more robust."
            />
            <WorkflowStep
              title="HUD + Hotkey"
              description="The long-term UX is a Spotlight-style HUD with fast semantic retrieval, relative time, app identity, and optional synthesized answers."
            />
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--console-border)] bg-[var(--console-bg-light)] p-6">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Current Status</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard value="4" label="Local API routes already running" />
            <MetricCard value="1" label="Observer loop shipping in v1 today" />
            <MetricCard value="0" label="Local model tiers integrated in runtime yet" />
          </div>
          <p className="text-sm text-[var(--console-text-dim)]">
            Today the baseline observer, ingest, JSONL persistence, and keyword-search fallback are in place. The app is not considered
            complete until both local model tiers, LanceDB-backed retrieval, and the final query-time reasoning flow are running locally.
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
