"use client";

import { useEffect, useRef, useState } from "react";
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
  apiKey: string;
};

let loaderPromise: Promise<void> | null = null;

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window !== "undefined" && window.google?.maps) return Promise.resolve();
  if (loaderPromise) return loaderPromise;
  loaderPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&v=weekly`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
  return loaderPromise;
}

function markerIcon(isHq: boolean): google.maps.Symbol {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    scale: isHq ? 10 : 7,
    fillColor: isHq ? CTA_HEX : PRIMARY_HEX,
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 2,
  };
}

/** Interactive office map — defaults to fitting all markers in view; selecting one office from the dropdown pans/zooms to it. Falls back gracefully (returns null; caller shows a plain list) if Maps fails to load. */
export function ContactMap({ offices, apiKey }: ContactMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const markersRef = useRef<Map<string, google.maps.Marker>>(new Map());
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState<string>(ALL_OFFICES);

  useEffect(() => {
    let cancelled = false;

    loadGoogleMaps(apiKey)
      .then(() => {
        if (cancelled || !containerRef.current || !window.google) return;

        const map = new window.google.maps.Map(containerRef.current, {
          center: { lat: 20, lng: 10 },
          zoom: 2,
          disableDefaultUI: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        });
        mapRef.current = map;
        infoWindowRef.current = new window.google.maps.InfoWindow();

        const bounds = new window.google.maps.LatLngBounds();
        offices.forEach((office) => {
          const marker = new window.google!.maps.Marker({
            position: { lat: office.lat, lng: office.lng },
            map,
            title: office.label,
            icon: markerIcon(office.kind === "hq"),
          });
          marker.addListener("click", () => {
            infoWindowRef.current?.setContent(
              `<div style="font-family:inherit;padding:2px 4px;">
                 <strong>${office.label}</strong><br/>
                 <span style="font-size:12px;color:#62675f;">${office.address}</span>
               </div>`
            );
            infoWindowRef.current?.open({ map, anchor: marker });
          });
          markersRef.current.set(office.id, marker);
          bounds.extend({ lat: office.lat, lng: office.lng });
        });
        map.fitBounds(bounds, 48);
        setReady(true);
      })
      .catch(() => setFailed(true));

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

  useEffect(() => {
    if (!ready || !mapRef.current || !window.google) return;
    const map = mapRef.current;

    if (selected === ALL_OFFICES) {
      const bounds = new window.google.maps.LatLngBounds();
      offices.forEach((office) => bounds.extend({ lat: office.lat, lng: office.lng }));
      map.fitBounds(bounds, 48);
      infoWindowRef.current?.close();
      return;
    }

    const office = offices.find((o) => o.id === selected);
    const marker = markersRef.current.get(selected);
    if (!office || !marker) return;
    map.panTo({ lat: office.lat, lng: office.lng });
    map.setZoom(12);
    infoWindowRef.current?.setContent(
      `<div style="font-family:inherit;padding:2px 4px;">
         <strong>${office.label}</strong><br/>
         <span style="font-size:12px;color:#62675f;">${office.address}</span>
       </div>`
    );
    infoWindowRef.current?.open({ map, anchor: marker });
  }, [selected, ready, offices]);

  if (failed) return null;

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

      <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-secondary sm:h-96">
        <div ref={containerRef} className="h-full w-full" />
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
            Loading map…
          </div>
        )}
      </div>
    </div>
  );
}
