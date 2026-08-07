"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: false,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      // Pin osobno — anticipatePin zmniejsza przeskok przy starcie/końcu
      ScrollTrigger.create({
        trigger: "#home",
        start: "top top",
        endTrigger: "#projects",
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      // Fade dopiero gdy projects realnie nachodzi — nie od dołu viewportu
      // (wcześniej start: "top bottom" odpalał fade za wcześnie = "zamglenie")
      gsap.fromTo(
        "#home",
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 70%",
            end: "top top",
            scrub: true,
          },
        },
      );
    });

    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    document.fonts?.ready?.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
