import React from "react";
import DataList from "@/app/_components/DataItem";
import { Header } from "./_features/header/Header";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-950 text-gray-100">
      <div className="w-full max-w-2xl text-center space-y-8">
        <Header />
        <header className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Mon Projet Web
          </h1>
          <p className="text-gray-400">Interface Hub Multi-outils</p>
        </header>

        <section className="w-full py-4" aria-label="Section de test Supabase">
          <p className="text-sm text-gray-400 mb-6">
            Test de connexion avec la base de données Supabase :
          </p>

          {/* Rendu du composant de liste */}
          <DataList />
        </section>

        <footer className="text-xs text-gray-600">
          Hub de développement • Prêt pour l'intégration du Header Retro / Cute
        </footer>
      </div>
    </main>
  );
}
