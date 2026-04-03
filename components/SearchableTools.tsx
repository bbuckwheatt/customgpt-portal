"use client";

import { useState } from "react";
import { tools, type Tool } from "@/lib/tools";

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      className="card"
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-icon">{tool.emoji}</div>
      <div>
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
      </div>
      <span className="card-cta">Open →</span>
    </a>
  );
}

export default function SearchableTools() {
  const [query, setQuery] = useState("");

  const filtered = tools.filter((tool) => {
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    const hay = [tool.name, tool.description, ...tool.tags]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1 className="hero-title">Deployments and Tools</h1>
          <p className="hero-subtitle">
            Explore live demos and calculators built with CustomGPT.
          </p>
          <div className="hero-actions">
            <input
              type="search"
              className="search"
              placeholder="Search tools…"
              aria-label="Search tools"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <a
              href="https://customgpt.ai/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit CustomGPT.ai"
            >
              Visit CustomGPT.ai
            </a>
          </div>
        </div>
      </section>

      <section id="tools" className="tools">
        <div className="container">
          <div className="grid" aria-live="polite">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <svg
                  className="empty-state-icon"
                  viewBox="0 0 120 120"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                    opacity="0.3"
                  />
                  <line
                    x1="72"
                    y1="72"
                    x2="95"
                    y2="95"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                </svg>
                <p className="empty-state-text">No tools match your search</p>
                <p className="empty-state-subtext">
                  Try a different search term or clear the search
                </p>
              </div>
            ) : (
              filtered.map((tool) => <ToolCard key={tool.id} tool={tool} />)
            )}
          </div>
        </div>
      </section>
    </>
  );
}
