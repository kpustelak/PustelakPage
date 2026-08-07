const rowA = [
  { title: "Finance Desk", tone: "bg-edgy-black text-white", tag: "Dashboard" },
  { title: "Clean Atelier", tone: "bg-sahara-green text-edgy-black", tag: "Landing" },
  { title: "Vault Pay", tone: "bg-normal-green text-white", tag: "Fintech" },
  { title: "Night Drive", tone: "bg-charcoal-green text-white", tag: "Brand" },
  { title: "Studio Grid", tone: "bg-jungle-green text-edgy-black", tag: "Portfolio" },
  { title: "Signal OS", tone: "bg-black-green text-white", tag: "SaaS" },
] as const;

const rowB = [
  { title: "Tax Flow", tone: "bg-normal-green text-white", tag: "Product" },
  { title: "Audio Room", tone: "bg-edgy-black text-white", tag: "Mobile" },
  { title: "Olive Market", tone: "bg-olive-mute text-white", tag: "E-com" },
  { title: "Pulse Board", tone: "bg-sahara-green text-edgy-black", tag: "Analytics" },
  { title: "North Bank", tone: "bg-black-green text-white", tag: "App" },
  { title: "Forma Lab", tone: "bg-jungle-green text-edgy-black", tag: "Studio" },
] as const;

const rowC = [
  { title: "Orbit CRM", tone: "bg-charcoal-green text-white", tag: "B2B" },
  { title: "Leaf Hotel", tone: "bg-jungle-green text-edgy-black", tag: "Hospitality" },
  { title: "Mono Type", tone: "bg-edgy-black text-white", tag: "Editorial" },
  { title: "Greenfield", tone: "bg-normal-green text-white", tag: "Landing" },
  { title: "Cipher Soft", tone: "bg-black-green text-white", tag: "Security" },
  { title: "Quiet UI", tone: "bg-sahara-green text-edgy-black", tag: "System" },
] as const;

function ProjectCard({
  title,
  tone,
  tag,
}: {
  title: string;
  tone: string;
  tag: string;
}) {
  return (
    <article
      className={`relative h-44 w-72 shrink-0 overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.18)] ${tone}`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-6 right-6 size-24 rounded-full border border-current/30" />
        <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-current/10" />
        <div className="absolute top-1/2 left-1/3 h-px w-40 -rotate-12 bg-current/20" />
      </div>
      <div className="relative flex h-full flex-col justify-between p-5">
        <p className="font-sans text-sm tracking-[0.2em] uppercase opacity-70">
          {tag}
        </p>
        <h3 className="font-sans text-2xl font-medium leading-none">{title}</h3>
      </div>
    </article>
  );
}

function ProjectRow({
  items,
  reverse = false,
  slow = false,
  offset = "0",
  className = "",
}: {
  items: readonly { title: string; tone: string; tag: string }[];
  reverse?: boolean;
  slow?: boolean;
  offset?: string;
  className?: string;
}) {
  const animation = reverse
    ? "animate-marquee-x-reverse"
    : slow
      ? "animate-marquee-x-slow"
      : "animate-marquee-x";

  const loop = [...items, ...items];

  return (
    <div className={`relative overflow-visible ${className}`.trim()}>
      <div
        className={`flex w-max gap-3 ${animation}`}
        style={{ marginLeft: offset }}
      >
        {loop.map((item, i) => (
          <ProjectCard
            key={`${item.title}-${i}`}
            title={item.title}
            tone={item.tone}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSlider() {
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen overflow-hidden bg-white pb-24 pt-20 shadow-[0_-24px_60px_rgba(0,0,0,0.06)] mt-20"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="relative mx-auto mb-10 max-w-3xl px-page text-center">
        <h2 className="text-5xl font-medium leading-tight text-edgy-black">
          Projects that keep moving
        </h2>
      </div>

      <div
        className="relative mx-auto"
        style={{
          transform: "perspective(1200px) rotateX(8deg) scale(1.02)",
        }}
      >
        <div className="relative py-6">
          <ProjectRow items={rowA} className="z-10" />
          <ProjectRow
            items={rowB}
            reverse
            offset="-5rem"
            className="z-20 -mt-16"
          />
          <ProjectRow
            items={rowC}
            slow
            offset="-2.5rem"
            className="z-30 -mt-16"
          />
        </div>
      </div>
    </section>
  );
}
