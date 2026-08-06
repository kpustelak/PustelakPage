"use client";

import { useEffect, useState } from "react";
import { SiDotnet } from "react-icons/si";
import { FaReact, FaWordpress, FaFigma, FaRobot } from "react-icons/fa";
import QuoteBlock from "@/Components/QuoteBlock";

const techs = [
  {
    id: "dotnet",
    label: ".NET",
    description: "The heavy lifting — services, APIs, the layer under the UI.",
    icon: SiDotnet,
    circle: "bg-black-green",
  },
  {
    id: "react",
    label: "React",
    description: "Where the product meets the person. Interfaces with restraint.",
    icon: FaReact,
    circle: "bg-normal-green",
  },
  {
    id: "wordpress",
    label: "WordPress",
    description: "Sites meant to outlive the sprint. Quiet, editable, durable.",
    icon: FaWordpress,
    circle: "bg-black-green",
  },
  {
    id: "figma",
    label: "Figma",
    description: "Structure before pixels. Decisions that survive handoff.",
    icon: FaFigma,
    circle: "bg-jungle-green",
  },
  {
    id: "ai",
    label: "AI",
    description: "A tool in the belt — faster drafts, less glue work.",
    icon: FaRobot,
    circle: "bg-normal-green",
  },
] as const;

const ROTATE_MS = 3800;
const FADE_MS = 450;

export default function TechStack() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const displayed = techs[displayedIndex];

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % techs.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (index === displayedIndex) return;

    setTextVisible(false);
    const id = window.setTimeout(() => {
      setDisplayedIndex(index);
      setTextVisible(true);
    }, FADE_MS);

    return () => window.clearTimeout(id);
  }, [index, displayedIndex]);

  return (
    <div
      className="flex w-tech shrink-0 animate-enter-up items-center rounded-4xl bg-sahara-green/50 py-3 pr-4 pl-3 delay-350"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex shrink-0 flex-col items-center">
        {techs.map((tech, techIndex) => {
          const Icon = tech.icon;
          const isActive = techIndex === index;

          return (
            <button
              key={tech.id}
              type="button"
              aria-label={tech.label}
              aria-pressed={isActive}
              onMouseEnter={() => setIndex(techIndex)}
              onClick={() => setIndex(techIndex)}
              className={`flex size-14 items-center justify-center rounded-full text-2xl text-white transition-[scale,box-shadow] duration-500 ease-smooth ${tech.circle} ${
                techIndex > 0 ? "-mt-3" : ""
              } ${
                isActive
                  ? "z-10 scale-110 shadow-md"
                  : "scale-100 hover:scale-105"
              }`}
            >
              <Icon />
            </button>
          );
        })}
      </div>

      <div className="ml-3 min-w-0 flex-1">
        <QuoteBlock>
          <div
            className={`transition-[opacity,translate] duration-500 ease-smooth ${
              textVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-1 opacity-0"
            }`}
          >
            <p className="mt-1 text-lg font-medium text-edgy-black ">
              {displayed.label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-edgy-black/60">
              {displayed.description}
            </p>
          </div>
        </QuoteBlock>
      </div>
    </div>
  );
}
