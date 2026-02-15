import { useState, useCallback } from "react";
import { learningAreas } from "@/data/learningData";

type ProgressState = Record<string, boolean>;

function loadFromStorage(): ProgressState {
  const state: ProgressState = {};
  for (const area of learningAreas) {
    for (const section of area.sections) {
      for (const item of section.items) {
        const saved = localStorage.getItem(`lp-${item.id}`);
        state[item.id] = saved === "true";
      }
    }
  }
  return state;
}

export function useProgress() {
  const [checked, setChecked] = useState<ProgressState>(() => loadFromStorage());

  const toggle = useCallback((itemId: string) => {
    setChecked((prev) => {
      const next = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem(`lp-${itemId}`, String(next[itemId]));
      return next;
    });
  }, []);

  // Returns progress 0-100 for a single area (area with id 0 returns null)
  const getAreaProgress = useCallback(
    (areaId: number): number | null => {
      const area = learningAreas.find((a) => a.id === areaId);
      if (!area || area.sections.length === 0) return null;

      const allItems = area.sections.flatMap((s) => s.items);
      if (allItems.length === 0) return null;

      const checkedCount = allItems.filter((item) => checked[item.id]).length;
      return Math.round((checkedCount / allItems.length) * 100);
    },
    [checked]
  );

  // Total progress = average of area progress for areas 1-9
  const totalProgress = useCallback((): number => {
    const areasWithItems = learningAreas.filter(
      (a) => a.id > 0 && a.sections.length > 0
    );
    if (areasWithItems.length === 0) return 0;

    const sum = areasWithItems.reduce((acc, area) => {
      const p = getAreaProgress(area.id);
      return acc + (p ?? 0);
    }, 0);

    return Math.round(sum / areasWithItems.length);
  }, [getAreaProgress]);

  return { checked, toggle, getAreaProgress, totalProgress };
}
