"use client";

import { useRef, useState } from "react";

const colorMap = {
  "edgy-black": {
    primary: {
      base: "text-white bg-edgy-black",
      wave: "bg-black-green",
      hoverText: "group-hover:text-white",
    },
    secondary: {
      base: "text-edgy-black bg-white border border-edgy-black",
      wave: "bg-edgy-black",
      hoverText: "group-hover:text-white",
    },
  },
  "normal-green": {
    primary: {
      base: "text-white bg-normal-green",
      wave: "bg-black-green",
      hoverText: "group-hover:text-white",
    },
    secondary: {
      base: "text-normal-green bg-white border border-normal-green",
      wave: "bg-normal-green",
      hoverText: "group-hover:text-white",
    },
  },
  "black-green": {
    primary: {
      base: "text-white bg-black-green",
      wave: "bg-edgy-black",
      hoverText: "group-hover:text-white",
    },
    secondary: {
      base: "text-black-green bg-white border border-black-green",
      wave: "bg-black-green",
      hoverText: "group-hover:text-white",
    },
  },
  "sahara-green": {
    primary: {
      base: "text-white bg-sahara-green",
      wave: "bg-jungle-green",
      hoverText: "group-hover:text-edgy-black",
    },
    secondary: {
      base: "text-sahara-green bg-white border border-sahara-green",
      wave: "bg-sahara-green",
      hoverText: "group-hover:text-edgy-black",
    },
  },
  "jungle-green": {
    primary: {
      base: "text-white bg-jungle-green",
      wave: "bg-normal-green",
      hoverText: "group-hover:text-white",
    },
    secondary: {
      base: "text-jungle-green bg-white border border-jungle-green",
      wave: "bg-jungle-green",
      hoverText: "group-hover:text-white",
    },
  },
} as const;

type BaseColor = keyof typeof colorMap;
type ButtonType = "primary" | "secondary";

export default function Button({
  children,
  type = "primary",
  baseColor = "edgy-black",
}: {
  children: React.ReactNode;
  type?: ButtonType;
  baseColor?: BaseColor;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const [active, setActive] = useState(false);

  const colors = colorMap[baseColor][type];

  function handleEnter(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setOrigin({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
    setActive(true);
  }

  return (
    <button
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setActive(false)}
      className={`group relative isolate h-12 overflow-hidden rounded-xl px-10 text-sm ${colors.base}`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute aspect-square w-[320%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[translate,scale] duration-500 ease-smooth ${colors.wave} ${
          active ? "scale-100" : "scale-0"
        }`}
        style={{ left: origin.x, top: origin.y }}
      />
      <span className={`relative z-10 transition-colors duration-300 ${colors.hoverText}`}>
        {children}
      </span>
    </button>
  );
}
