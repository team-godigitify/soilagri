import type { SpecializationBlock } from "@/types/content";

/**
 * Tufan-chapter STRUCTURE (Section 7.5b): ordered, individually-
 * toggleable blocks, each rendered only if the client has confirmed its
 * content. Renders nothing when `blocks` is empty — the page stays
 * coherent at every stage of content maturity (Edge case 10).
 */
export function SpecializationSection({
  blocks,
}: {
  blocks?: SpecializationBlock[];
}) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div id="specialization" className="flex flex-col gap-10 scroll-mt-24">
      {blocks.map((block) => (
        <div key={block.id} className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-foreground">
            {block.heading}
          </h2>
          {block.body.map((paragraph, i) => (
            <p key={i} className="max-w-[70ch] text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
