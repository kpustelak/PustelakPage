import type { ReactNode } from "react";

export default function StickyIntro({ children }: { children: ReactNode }) {
  return (
    <div id="home" className="relative z-0 min-h-screen bg-white">
      {children}
    </div>
  );
}
