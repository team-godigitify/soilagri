import { Reveal } from "@/components/shared/Reveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { trackRecord } from "@/content/home";

/** Full-height split: full-bleed image left, off-white stat panel right. */
export function TrackRecordSplit() {
  return (
    <section className="bg-background">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <Reveal variants={fadeRight} className="relative h-96 sm:h-136 lg:h-full">
          <ParallaxImage
            src={trackRecord.image}
            alt=""
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          variants={fadeLeft}
          className="flex flex-col justify-center gap-6 px-8 py-12 sm:px-12 sm:py-16 lg:h-full lg:justify-between lg:overflow-y-auto lg:px-16 lg:py-10 xl:px-20"
        >
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              <span className="h-px w-10 bg-cta" aria-hidden="true" />
              {trackRecord.eyebrow}
            </span>
            <h2 className="font-heading text-3xl leading-[1.15] font-semibold text-balance text-primary sm:text-4xl lg:text-4xl xl:text-5xl">
              {trackRecord.headline[0]}
              <br />
              {trackRecord.headline[1]}
            </h2>
            <p className="max-w-[54ch] text-base text-muted-foreground sm:text-lg">
              {trackRecord.body}
            </p>
          </div>

          <div className="flex flex-col justify-center">
            {trackRecord.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between gap-8 border-b border-border py-3 sm:py-4"
              >
                <span className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                  {metric.value}
                </span>
                <span className="max-w-[22ch] text-right text-sm font-medium tracking-[0.04em] text-muted-foreground uppercase">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <p className="max-w-[62ch] text-xs tracking-[0.04em] text-muted-foreground uppercase">
            {trackRecord.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
