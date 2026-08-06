"use client";

import { useEffect, useState } from "react";
import Button from "@/Components/Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why me" },
  { href: "#what", label: "Now what?" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-between px-page py-5">
      <p className="animate-enter-down text-xl text-edgy-black">
        Kornel Pustelak
      </p>

      <div className="flex animate-enter-down space-x-10 text-sm delay-100">
        {links.map((link) => {
          const isActive = active === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "flex items-center font-semibold text-edgy-black"
                  : "text-jungle-green transition-colors hover:text-edgy-black"
              }
            >
              {link.label}
              {isActive ? (
                <span className="ml-2 size-1.5 rounded-full bg-black-green" />
              ) : null}
            </a>
          );
        })}
      </div>

      <div className="animate-enter-down delay-200">
        <Button type="primary" baseColor="edgy-black">
          Get in touch
        </Button>
      </div>
    </div>
  );
}
