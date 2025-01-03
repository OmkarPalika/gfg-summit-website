import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

interface Ticket {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  available: number | null;
  highlight: boolean;
}

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const { data, error: fetchError } = await supabase
          .from('tickets')
          .select('*')
          .order('price');

        if (fetchError) throw fetchError;
        setTickets(data || []);
      } catch (err) {
        setError('Failed to load tickets');
      } finally {
        setLoading(false);
      }
    }

    fetchTickets();
  }, []);

  return { tickets, loading, error };
}