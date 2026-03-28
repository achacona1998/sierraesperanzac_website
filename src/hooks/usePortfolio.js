import { useState, useMemo, useEffect } from "react";
import { useLang } from "../i18n.jsx";
import { getProjects, getProjectImageUrl } from "../lib/supabase.js";

/**
 * Custom hook to manage portfolio items and filtering.
 *
 * @returns {Object} The portfolio state and helpers.
 * @returns {Array} return.items - The list of portfolio items.
 * @returns {Array} return.filteredItems - The filtered list of items.
 * @returns {string} return.filter - The current filter category.
 * @returns {Function} return.setFilter - Function to update the filter.
 * @returns {Array} return.filters - List of available filters.
 * @returns {boolean} return.loading - Whether data is loading.
 */
export function usePortfolio() {
  const { t } = useLang();
  const [filter, setFilter] = useState(t.portfolio.filters[0]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case DB is empty or fails (to prevent broken UI during dev)
  const fallbackItems = useMemo(
    () => [
      {
        id: 1,
        title: "Landing React",
        category: "Web",
        metric: "TTFB 120ms",
        image: "bg-linear-to-br from-blue-900 to-slate-900",
        client: "TechStart Inc.",
        year: "2024",
        services: ["Desarrollo Web", "Performance", "SEO Técnico"],
        challenge:
          "La empresa necesitaba reducir el tiempo de carga de su landing page principal, que superaba los 4 segundos, causando una tasa de rebote del 65%.",
        solution:
          "Reconstruimos el sitio utilizando React y Vite, implementando lazy loading, optimización de imágenes y code splitting. Migramos el hosting a un CDN global.",
        results: [
          "Tiempo de carga reducido a 120ms",
          "Tasa de conversión aumentó un 45%",
          "Score de Lighthouse 100/100",
        ],
        testimonial: {
          text: "Increíble velocidad. Nuestros clientes notaron la diferencia de inmediato.",
          author: "CEO, TechStart",
        },
      },
      // ... more fallback items if needed
    ],
    [],
  );

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      const { data, error } = await getProjects();

      if (!error && data && data.length > 0) {
        // Transform data if necessary (e.g. resolve image URLs)
        const processed = data.map((p) => ({
          ...p,
          // If image is not a CSS class (starts with bg-), try to resolve as Supabase URL
          image:
            p.image && !p.image.startsWith("bg-") && !p.image.startsWith("http")
              ? getProjectImageUrl(p.image)
              : p.image,
        }));
        setItems(processed);
      } else {
        setItems(fallbackItems);
      }
      setLoading(false);
    }

    fetchProjects();
  }, [fallbackItems]);

  const normalized = (f) =>
    f === "Todos" || f === "All" ? "All" : f === "Diseño" ? "Design" : f;

  const filteredItems = useMemo(() => {
    return items.filter(
      (it) =>
        normalized(filter) === "All" || it.category === normalized(filter),
    );
  }, [items, filter]);

  return {
    items,
    filteredItems,
    filter,
    setFilter,
    filters: t.portfolio.filters,
    loading,
  };
}
