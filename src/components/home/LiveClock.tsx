"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "America/Montreal",
});

/** Ticks every second, client-only — renders nothing until mounted to avoid an SSR/client mismatch. */
export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    const id = setInterval(tick, 1000);
    const immediate = setTimeout(tick, 0);
    return () => {
      clearInterval(id);
      clearTimeout(immediate);
    };
  }, []);

  if (!time) return null;
  return <span className="tabular-nums">{time} ET</span>;
}
