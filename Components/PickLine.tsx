export default function PickLine({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-block pl-4 text-sm transition-[color,translate] duration-500 ease-smooth hover:translate-x-1.5 hover:text-normal-green"
    >
      &gt; {text}
    </a>
  );
}
