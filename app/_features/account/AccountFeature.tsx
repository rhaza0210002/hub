import React from "react";

export function AccountFeature() {
  return (
    <section
      id="account"
      className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
      aria-labelledby="account-title"
    >
      <h2 id="account-title" className="text-2xl font-semibold text-orange-300">
        Profil Utilisateur
      </h2>
      <p className="mt-3 text-gray-400">
        Informations de compte, avatar et préférences personnelles.
      </p>
    </section>
  );
}
