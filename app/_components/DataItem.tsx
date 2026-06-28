"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

// Typage basique de ton objet de données (à adapter selon tes colonnes de bdd)
interface DataItem {
  id: string | number;
  name?: string;
  created_at?: string;
}

export default function DataList() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // "users" ou le nom exact de ta table personnalisée dans Supabase
        const { data: tableData, error: supabaseError } = await supabase
          .from('groupUsers')
          .select('*');

        if (supabaseError) {
          throw supabaseError;
        }

        if (tableData) {
          setData(tableData);
        }
      } catch (err: any) {
        console.error("Erreur Supabase détectée :", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Zone d'accessibilité dynamique avec aria-live
  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500" aria-live="polite">
        Chargement des données en cours...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 my-2 text-red-700 bg-red-100 rounded-lg" aria-live="polite">
        <p className="font-semibold">Erreur de connexion avec la base de données Supabase :</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-800">
        Données récupérées de Supabase :
      </h2>
      
      {data.length === 0 ? (
        <p className="text-gray-500 italic">Aucune donnée disponible pour le moment.</p>
      ) : (
        <ul className="space-y-2">
          {data.map((item) => (
            <li 
              key={item.id} 
              className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700"
            >
              {item.name || `Élément #${item.id}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}