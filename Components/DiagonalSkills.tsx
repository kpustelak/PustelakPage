const skills = [
  "FIGMA",
  ".NET",
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND",
  "C#",
  "SQL",
  "NODE",
  "GIT",
  "DOCKER",
  "AZURE",
  "POSTGRES",
  "REST",
  "GRAPHQL",
  "FRAMER",
  "ASP.NET",
  "BLAZOR",
] as const;

function lineFor(seed: number) {
  const copy = [...skills];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = (seed * (i + 3)) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.join("   ·   ");
}

export default function DiagonalSkills() {
  // Tekst jak "2026", pod kątem, rzędy w obie strony
  const rows = Array.from({ length: 10 }, (_, row) => (
    <div key={row} className="overflow-hidden leading-none">
      <div
        className={`flex w-max gap-12 whitespace-nowrap ${
          row % 2 === 0 ? "animate-marquee-x" : "animate-marquee-x-reverse"
        }`}
        style={{ animationDuration: "40s" }}
      >
        {Array.from({ length: 4 }, (_, copy) => (
          <span
            key={copy}
            className="shrink-0 font-sans text-7xl font-extrabold text-edgy-black/45"
          >
            {lineFor(row + 1)}
          </span>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 flex w-[210%] -translate-x-1/2 -translate-y-1/2 -rotate-[28deg] flex-col gap-1">
        {rows}
      </div>
    </div>
  );
}
