"use client";

import { useState } from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type NetworkNode = {
  id: string;
  label: string;
  kind: "office" | "region";
  role: string;
  commodities?: string[];
  /** Approximate position as a percentage of the panel, not a literal projection — Honesty Gate: plot only confirmed nodes. */
  x: number;
  y: number;
};

/**
 * Abstract graticule + marker panel rather than a literal coastline map —
 * no hand-authored path data, no external map tiles (CSP + perf per Law 6).
 * Only nodes the caller passes render; unconfirmed network entries are
 * simply absent (Section 6, edge case 5), never plotted as placeholders.
 */
export function NetworkMap({ nodes }: { nodes: NetworkNode[] }) {
  const [activeId, setActiveId] = useState(nodes[0]?.id);
  const active = nodes.find((node) => node.id === activeId) ?? nodes[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-mesh-primary bg-grain">
        <svg
          className="absolute inset-0 h-full w-full opacity-15"
          viewBox="0 0 100 62.5"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={(i + 1) * 7.8} x2={100} y2={(i + 1) * 7.8} stroke="white" strokeWidth={0.15} />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 8.3} y1={0} x2={(i + 1) * 8.3} y2={62.5} stroke="white" strokeWidth={0.15} />
          ))}
        </svg>

        {nodes.map((node) => {
          const isActive = node.id === active?.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveId(node.id)}
              onMouseEnter={() => setActiveId(node.id)}
              onFocus={() => setActiveId(node.id)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={cn(
                "absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full outline-none",
                isActive ? "z-10" : "z-0"
              )}
              aria-pressed={isActive}
            >
              <span
                className={cn(
                  "block shrink-0 rounded-full transition-all duration-300",
                  node.kind === "office"
                    ? "size-3.5 bg-cta ring-4 ring-cta/25"
                    : "size-2.5 bg-primary-foreground/80 ring-2 ring-primary-foreground/20",
                  isActive && "scale-125"
                )}
              />
              <span
                className={cn(
                  "rounded-full bg-primary-foreground/10 px-2.5 py-1 text-xs font-medium whitespace-nowrap text-primary-foreground backdrop-blur-sm transition-opacity",
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                )}
              >
                {node.label}
              </span>
            </button>
          );
        })}
      </div>

      {active && (
        <Card className="justify-center">
          <CardContent className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.12em] text-cta uppercase">
              {active.kind === "office" ? "Office" : "Trading Region"}
            </span>
            <CardTitle className="text-xl">{active.label}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{active.role}</CardDescription>
            {active.commodities && active.commodities.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {active.commodities.map((commodity) => (
                  <span
                    key={commodity}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {commodity}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
