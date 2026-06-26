// @ts-nocheck
'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function DataList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const { data: groupUsersData, error: supabaseError } = await supabase
          .from('groupUsers') // À remplacer par le nom de ta table Supabase
          .select('*');

        if (supabaseError) throw supabaseError;

        setData(groupUsersData || []);
      } catch (err) {
        setError(err.message || 'Une erreur est survenue.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p role="status" aria-live="polite">Chargement des données en cours...</p>;
  }

  if (error) {
    return (
      <div role="alert" style={{ color: '#d32f2f', padding: '1rem', border: '1px solid #d32f2f' }}>
        <p>Erreur : {error}</p>
      </div>
    );
  }

  return (
    <section aria-label="Données Supabase">
      {data.length === 0 ? (
        <p>Aucune donnée disponible pour le moment.</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name || `Élément ID: ${item.id}`}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}