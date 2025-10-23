import PortfolioLayout from '../../components/PortfolioLayout';
import Link from 'next/link';
import { HiArrowLeft, HiExternalLink, HiOutlineChip, HiOutlineCollection, HiCode } from 'react-icons/hi';

export default function Cogniflow() {
  return (
    <PortfolioLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--console-text-dim)] hover:text-[var(--console-primary)] transition-colors"
        >
          <HiArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="border-b border-[var(--console-border)] pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--console-primary)] mb-2">
            Cogniflow
          </h1>
          <p className="text-lg text-[var(--console-secondary)]">
            On-chain Intelligence Agent & Portfolio Analytics Platform
          </p>
        </div>

        {/* Overview */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] space-y-4">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Overview</h2>
          <p className="text-[var(--console-text)] leading-relaxed">
            Cogniflow ingests live Ethereum wallet activity, normalizes it inside Supabase Postgres, enriches each transfer
            with CoinGecko pricing and OpenAI embeddings, and exposes the insights through a production-ready Next.js
            dashboard and deterministic API surface. The platform is designed so LLM tooling can safely orchestrate named SQL
            queries and semantic search without ad-hoc code execution.
          </p>
          <p className="text-[var(--console-text)] leading-relaxed">
            The MVP ships a resilient ingestion worker, typed REST APIs, a pgvector-powered semantic search layer, and a UI
            that surfaces portfolio summaries, transfers, USD valuations, and chat-style analytics. It is deployed on Vercel
            (`cogniflow-web.vercel.app`) with cron-ready ingestion endpoints.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <Feature title="Continuous Wallet Ingestion">
                ts-node worker streams tracked wallets, retries on RPC failures, and performs idempotent upserts for transfers and blocks.
              </Feature>
              <Feature title="USD Valuation Pipeline">
                CoinGecko enrichment job snapshots token prices hourly and decorates every transfer with historical USD context.
              </Feature>
              <Feature title="Semantic Search & Embeddings">
                OpenAI embeddings (768-dim pgvector) allow intent-aware transfer search with support for token, amount, and counterparty insights.
              </Feature>
            </div>
            <div className="space-y-3">
              <Feature title="Deterministic LLM Tooling">
                Named SQL queries and typed routes (`/tool/sql`, `/api/chat`) ensure external agents operate within audited guardrails.
              </Feature>
              <Feature title="Next.js Dashboard">
                App Router UI shows wallet net flows, holdings, transfer history, sync status, and semantic search results in real time.
              </Feature>
              <Feature title="Secure Job Triggers">
                Ingestion, pricing, and embeddings jobs exposed as secret-protected API routes ready for Vercel Cron or GitHub Actions.
              </Feature>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] space-y-5">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Technical Architecture</h2>
          <div className="grid lg:grid-cols-2 gap-4">
            <ArchitectureCard
              title="Worker & Ingestion"
              description="ts-node worker iterates wallets, calls Alchemy JSON-RPC with exponential backoff, and syncs transfers via Prisma transactions shared with API routes."
              badges={['TypeScript', 'ts-node', 'Alchemy RPC', 'Retry Logic', 'Prisma']}
            />
            <ArchitectureCard
              title="Data Layer"
              description="Supabase Postgres plus pgvector hosts normalized tables for transfers, prices, embeddings, wallets, and blocks with deterministic IDs and indexing."
              badges={['Supabase', 'PostgreSQL', 'pgvector', 'Database Design']}
            />
            <ArchitectureCard
              title="API Surface"
              description="Next.js route handlers expose `/api/transfers`, `/api/portfolio`, `/api/search`, `/api/chat`, `/tool/sql`, and health/ingestion endpoints with zod validation."
              badges={['Next.js 15', 'REST APIs', 'Zod', 'Type Safety']}
            />
            <ArchitectureCard
              title="Frontend Dashboard"
              description="App Router UI built with Tailwind and shadcn-inspired components provides summary cards, holdings, transfers table, semantic search, and chat responses."
              badges={['Tailwind CSS', 'React', 'shadcn UI', 'Client/Server Components']}
            />
          </div>
        </div>

        {/* System Workflow */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] space-y-4">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">System Workflow</h2>
          <div className="space-y-3">
            <WorkflowStep
              title="1. Wallet Tracking"
              description="`wallets` table stores addresses, chain metadata, and sync cursors. UI submissions auto-upsert new wallets and queue ingestion runs."
            />
            <WorkflowStep
              title="2. Transfer Ingestion"
              description="Worker queries `alchemy_getAssetTransfers` in both directions, normalizes transfers, handles missing log indices, and records block metadata."
            />
            <WorkflowStep
              title="3. Price & Embedding Enrichment"
              description="CoinGecko and OpenAI jobs run on demand or via cron to attach USD valuations and semantic vectors for transfers lacking enrichment."
            />
            <WorkflowStep
              title="4. Deterministic APIs & Tools"
              description="Dashboard and chat routes read from Postgres, stitch pricing data, call named SQL queries, and expose structured responses to future LLM agents."
            />
          </div>
        </div>

        {/* Tooling Highlights */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] space-y-4">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Tooling Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-[var(--console-border)] rounded-lg bg-[var(--console-bg)]">
              <h3 className="font-semibold text-[var(--console-accent)] mb-2 flex items-center gap-2">
                <HiOutlineCollection />
                Named SQL Library
              </h3>
              <p className="text-sm text-[var(--console-text)] leading-relaxed">
                `/tool/sql` exposes allowlisted queries such as `topCounterparties` and `netFlowSummary`, enabling orchestrators to fetch aggregated data with zod-validated input.
              </p>
            </div>
            <div className="p-4 border border-[var(--console-border)] rounded-lg bg-[var(--console-bg)]">
              <h3 className="font-semibold text-[var(--console-accent)] mb-2 flex items-center gap-2">
                <HiOutlineChip />
                Semantic Search
              </h3>
              <p className="text-sm text-[var(--console-text)] leading-relaxed">
                `/api/search` embeds natural language queries, filters by address/chain, and ranks transfers using cosine similarity, largest-value preference, and recency heuristics.
              </p>
            </div>
          </div>
        </div>

        {/* Impact & Metrics */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] space-y-4">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Impact & Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard value="6+" label="Production APIs powering dashboard & chat tooling" />
            <MetricCard value="768" label="Embedding dimensions normalized for pgvector search" />
            <MetricCard value="3" label="Automated jobs (ingestion, pricing, embeddings) deployable via cron" />
          </div>
          <p className="text-sm text-[var(--console-text-dim)]">
            Cogniflow has been validated against Sepolia and mainnet wallets, ensuring deterministic ingestion, pricing parity, and semantic insights across diverse token flows.
          </p>
        </div>

        {/* Challenges & Solutions */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] space-y-4">
          <h2 className="text-xl font-bold text-[var(--console-secondary)]">Challenges & Solutions</h2>
          <div className="space-y-4">
            <Challenge
              title="Reliable RPC Ingestion"
              description="Implemented exponential backoff, retry ceilings, and deterministic transfer IDs (`txHash:logIndex`) to handle reorgs and RPC hiccups without duplicate data."
            />
            <Challenge
              title="Consistent USD Context"
              description="CoinGecko batching pipeline normalizes pricing snapshots and aligns them with transfer timestamps so holdings and chat summaries stay valuation-aware."
            />
            <Challenge
              title="LLM Guardrails"
              description="Deterministic tool layer exposes only named SQL and semantic search endpoints, letting future agents perform analytics while keeping database access auditable."
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://cogniflow-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors flex items-center gap-2"
          >
            <HiExternalLink />
            Visit Live App
          </a>
          <a
            href="https://github.com/devaanshsinha/cogniflow"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors flex items-center gap-2"
          >
            <HiCode />
            View Source
          </a>
        </div>
      </div>
    </PortfolioLayout>
  );
}

interface FeatureProps {
  title: string;
  children: React.ReactNode;
}

function Feature({ title, children }: FeatureProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[var(--console-primary)] mt-1">▸</span>
      <div>
        <h3 className="font-semibold text-[var(--console-text)]">{title}</h3>
        <p className="text-sm text-[var(--console-text-dim)]">{children}</p>
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
    <div className="p-4 border border-[var(--console-border)] rounded-lg bg-[var(--console-bg)]">
      <h3 className="font-semibold text-[var(--console-accent)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--console-text)] leading-relaxed mb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="px-2 py-1 bg-[var(--console-bg-light)] rounded text-xs text-[var(--console-secondary)] border border-[var(--console-secondary)]"
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
      <span className="text-[var(--console-primary)] font-bold mt-1">▸</span>
      <div>
        <h3 className="font-semibold text-[var(--console-text)]">{title}</h3>
        <p className="text-sm text-[var(--console-text-dim)]">{description}</p>
      </div>
    </div>
  );
}

interface MetricCardProps {
  value: string;
  label: string;
}

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
      <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">{value}</div>
      <p className="text-sm text-[var(--console-text-dim)]">{label}</p>
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
      <p className="text-sm text-[var(--console-text)] mt-1">{description}</p>
    </div>
  );
}
