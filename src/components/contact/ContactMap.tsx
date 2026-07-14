"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import type { Office } from "@/types/content";

const PRIMARY_HEX = "#123c30";
const CTA_HEX = "#bd923a";
const ALL_OFFICES = "__all__";

type ContactMapProps = {
  offices: Office[];
};

function popupHtml(office: Office): string {
  return `<div style="font-family:inherit;">
    <strong style="font-size:13px;">${office.label}</strong><br/>
    <span style="font-size:12px;color:#62675f;">${office.address}</span>
  </div>`;
}

/** Free, no-key office map (Leaflet + OpenStreetMap) — defaults to fitting all markers in view; selecting one office from the dropdown pans/zooms to it. Leaflet touches `window` at import time, so it's loaded dynamically inside an effect rather than at module scope — a static top-level import breaks Next's server-side prerender. */
export function ContactMap({ offices }: ContactMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, LeafletMarker>>(new Map());
  const [selected, setSelected] = useState<string>(ALL_OFFICES);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    let cancelled = false;
    const markers = markersRef.current;

    import("leaflet").then(({ default: L }) => {
      if (cancelled || !containerRef.current) return;

      const officeIcon = (isHq: boolean) => {
        const size = isHq ? 22 : 16;
        const color = isHq ? CTA_HEX : PRIMARY_HEX;
        return L.divIcon({
          className: "",
          html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:9999px;background:${color};border:2px solid #ffffff;box-shadow:0 1px 4px rgba(18,36,28,0.35);"></span>`,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      };

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        worldCopyJump: true,
      });
      mapRef.current = map;

      // CARTO's free Voyager basemap — closer to Google Maps' clean, muted
      // look than raw OpenStreetMap's default cartoon-ish tile style.
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const bounds = L.latLngBounds(offices.map((office) => [office.lat, office.lng]));
      offices.forEach((office) => {
        const marker = L.marker([office.lat, office.lng], { icon: officeIcon(office.kind === "hq") })
          .addTo(map)
          .bindPopup(popupHtml(office));
        markers.set(office.id, marker);
      });
      map.fitBounds(bounds, { padding: [48, 48] });
      setReady(true);
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markers.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    const map = mapRef.current;
    if (!map) return;

    import("leaflet").then(({ default: L }) => {
      if (selected === ALL_OFFICES) {
        const bounds = L.latLngBounds(offices.map((office) => [office.lat, office.lng]));
        map.flyToBounds(bounds, { padding: [48, 48], duration: 0.6 });
        map.closePopup();
        return;
      }

      const office = offices.find((o) => o.id === selected);
      const marker = markersRef.current.get(selected);
      if (!office || !marker) return;
      map.flyTo([office.lat, office.lng], 11, { duration: 0.6 });
      marker.openPopup();
    });
  }, [selected, ready, offices]);

  return (
    <div className="flex flex-col gap-4">
      <Select value={selected} onValueChange={(value) => setSelected(value ?? ALL_OFFICES)}>
        <SelectTrigger className="h-11 w-full">
          <SelectValue placeholder="All Offices" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL_OFFICES}>All Offices</SelectItem>
          {offices.map((office) => (
            <SelectItem key={office.id} value={office.id}>
              {office.label}
              {office.kind === "hq" ? " (HQ)" : ""}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/*
        isolate: Leaflet's own panes/controls use inline z-index values up
        to 1000, which otherwise paint on top of the Select dropdown above
        (portaled to document.body). Isolation traps Leaflet's stacking
        inside this box so it can never escape above sibling UI, regardless
        of the specific numbers Leaflet uses internally.
      */}
      <div className="relative isolate h-80 w-full overflow-hidden rounded-3xl bg-secondary sm:h-96">
        <div ref={containerRef} className="h-full w-full" />
        {!ready && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
            Loading map…
          </div>
        )}
      </div>
    </div>
  );
}
