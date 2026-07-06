import React from "react";

export function FinanceFeature() {
  return (
    <section
      id="finance"
      className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
      aria-labelledby="finance-title"
    >
      <h2 id="finance-title" className="text-2xl font-semibold text-emerald-300">
        Tirelire et Finances
      </h2>
      <p className="mt-3 text-gray-400">
        Suivi simple de vos économies et de vos dépenses du jour.
      </p>
    </section>
  );
}
