import React from "react";

export function WeatherFeature() {
  return (
    <section
      id="weather"
      className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
      aria-labelledby="weather-title"
    >
      <h2 id="weather-title" className="text-2xl font-semibold text-sky-300">
        Météo
      </h2>
      <p className="mt-3 text-gray-400">
        Affichage du temps actuel et des prévisions pour votre région.
      </p>
    </section>
  );
}
