import React from "react";

export function WorkspaceFeature() {
  return (
    <section
      id="workspace"
      className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
      aria-labelledby="workspace-title"
    >
      <h2 id="workspace-title" className="text-2xl font-semibold text-rose-300">
        Espace Bureau Hub
      </h2>
      <p className="mt-3 text-gray-400">
        Tableau de bord de vos tâches, projets et raccourcis importants.
      </p>
    </section>
  );
}
