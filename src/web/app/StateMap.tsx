'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  state: {
    id: number;
    name: string;
    abbreviation: string;
    latitude: number;
    longitude: number;
  };
}

export default function StateMap({ state }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    if (!map.current) {
      map.current = L.map(mapContainer.current).setView(
        [parseFloat(state.latitude.toString()), parseFloat(state.longitude.toString())],
        6
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map.current);
    }

    // Add marker for state center
    if (map.current) {
      // Remove existing markers
      map.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.current?.removeLayer(layer);
        }
      });

      L.marker([parseFloat(state.latitude.toString()), parseFloat(state.longitude.toString())])
        .bindPopup(`<strong>${state.name}</strong><br/>${state.abbreviation}`)
        .addTo(map.current)
        .openPopup();
    }
  }, [state]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-96 rounded-lg border border-zinc-300 dark:border-zinc-600"
    />
  );
}
