import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Returns the index of the child element closest to the vertical center
 * of the viewport. Mobile-only by default — desktop returns -1 so hover
 * styling stays driven by the cursor.
 *
 * Also exposes `setManualIndex` so a click/tap can override the scroll
 * highlight. The manual override is cleared as soon as the user scrolls.
 */
export function useScrollActiveIndex<T extends HTMLElement>(options?: {
  selector?: string;
  mobileOnly?: boolean;
  maxWidth?: number;
}) {
  const { selector, mobileOnly = true, maxWidth = 768 } = options ?? {};
  const containerRef = useRef<T | null>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(-1);
  const [manualIndex, setManualIndexState] = useState<number>(-1);
  const manualRef = useRef<number>(-1);

  const setManualIndex = useCallback((idx: number) => {
    manualRef.current = idx;
    setManualIndexState(idx);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = () =>
      typeof window !== "undefined" && window.innerWidth < maxWidth;

    if (mobileOnly && !isMobile()) {
      setScrollIndex(-1);
    }

    let frame = 0;
    const compute = () => {
      if (mobileOnly && !isMobile()) {
        setScrollIndex(-1);
        return;
      }
      const nodes = selector
        ? Array.from(container.querySelectorAll<HTMLElement>(selector))
        : (Array.from(container.children) as HTMLElement[]);
      if (nodes.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let bestIdx = -1;
      let bestDist = Infinity;
      nodes.forEach((node, i) => {
        const rect = node.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setScrollIndex(bestIdx);
    };

    const onScroll = () => {
      // Clear any manual override the moment the user scrolls again.
      if (manualRef.current !== -1) {
        manualRef.current = -1;
        setManualIndexState(-1);
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [selector, mobileOnly, maxWidth]);

  const activeIndex = manualIndex !== -1 ? manualIndex : scrollIndex;
  return { containerRef, activeIndex, setManualIndex };
}
