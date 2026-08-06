import type { ReactNode } from "react";

export default function StickyIntro({ children }: { children: ReactNode }) {
  // Pin + fade robi SmoothScroll (ScrollSmoother) — tu tylko marker sekcji
  return (
    <div id="home" className="relative z-0 bg-white">
      {children}
    </div>
  );
}
