import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page p-8">
      {/* Header */}
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-text-primary">
            TaskFlow
            <span className="text-primary"> Color System</span>
          </h1>
          <ThemeToggle />
        </div>

        {/* Primary Colors */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Primary
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <ColorSwatch name="primary" className="bg-primary text-primary-foreground" />
            <ColorSwatch name="primary-hover" className="bg-primary-hover text-primary-foreground" />
            <ColorSwatch name="primary-light" className="bg-primary-light text-text-primary" />
            <ColorSwatch name="primary-fg" className="bg-primary text-primary-foreground" />
          </div>
        </section>

        {/* Backgrounds */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Backgrounds
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <ColorSwatch name="bg-page" className="bg-bg-page text-text-primary border border-border" />
            <ColorSwatch name="bg-sidebar" className="bg-bg-sidebar text-text-primary border border-border" />
            <ColorSwatch name="bg-card" className="bg-bg-card text-text-primary border border-border" />
            <ColorSwatch name="bg-column" className="bg-bg-column text-text-primary border border-border" />
            <ColorSwatch name="bg-hover" className="bg-bg-hover text-text-primary border border-border" />
            <ColorSwatch name="bg-input" className="bg-bg-input text-text-primary border border-border" />
          </div>
        </section>

        {/* Text */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Text
          </h2>
          <div className="space-y-3 bg-bg-card p-6 rounded-xl border border-border">
            <p className="text-text-primary text-lg font-semibold">
              Primary text - headings, important content
            </p>
            <p className="text-text-secondary">
              Secondary text - descriptions, labels
            </p>
            <p className="text-text-muted text-sm">
              Muted text - timestamps, placeholders
            </p>
          </div>
        </section>

        {/* Status / Priority */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Priority Tags
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-status-urgent text-white">
              Urgent
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-status-high text-white">
              High
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-status-medium text-white">
              Medium
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-status-low text-white">
              Low
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-status-info text-white">
              Info
            </span>
          </div>
        </section>

        {/* Sample Card */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Sample Task Card
          </h2>
          <div className="max-w-sm bg-bg-card rounded-xl border border-border shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-status-high text-white">
                High
              </span>
              <span className="text-text-muted text-xs">Feb 20</span>
            </div>
            <h3 className="text-text-primary font-medium">
              Design landing page
            </h3>
            <p className="text-text-secondary text-sm">
              Create responsive layout with hero section and feature cards
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">K</span>
                </div>
                <span className="text-text-secondary text-xs">Khoa</span>
              </div>
              <span className="text-text-muted text-xs">2/4 subtasks</span>
            </div>
          </div>
        </section>

        {/* Button Samples */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 rounded-lg bg-bg-card text-text-primary border border-border font-medium hover:bg-bg-hover transition-colors">
              Secondary Button
            </button>
            <button className="px-4 py-2 rounded-lg bg-status-urgent text-white font-medium hover:opacity-90 transition-opacity">
              Danger Button
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className={`rounded-xl p-4 text-center ${className}`}>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
