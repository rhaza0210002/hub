import React from "react";

export function BooksFeature() {
  return (
    <section
      id="books"
      className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20"
      aria-labelledby="books-title"
    >
      <h2 id="books-title" className="text-2xl font-semibold text-indigo-300">
        Lectures et Livres
      </h2>
      <p className="mt-3 text-gray-400">
        Bibliothèque de lectures recommandées et notes de lecture.
      </p>
    </section>
  );
}
