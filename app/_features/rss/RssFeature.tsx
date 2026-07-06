import React from "react";

export function RssFeature() {
  return (
    <section
      id="rss"
      className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
      aria-labelledby="rss-title"
    >
      <h2 id="rss-title" className="text-2xl font-semibold text-cyan-300">
        Flux RSS
      </h2>
      <p className="mt-3 text-gray-400">
        Aperçu des dernières actualités et contenus partagés sur votre Hub.
      </p>
    </section>
  );
}
