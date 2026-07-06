import React from "react";

export function SettingsFeature() {
  return (
    <section
      id="settings"
      className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
      aria-labelledby="settings-title"
    >
      <h2 id="settings-title" className="text-2xl font-semibold text-cyan-300">
        Configuration Système
      </h2>
      <p className="mt-3 text-gray-400">
        Paramètres de l’application et options d’affichage.
      </p>
    </section>
  );
}
