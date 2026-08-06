export default function Marquee({
  items,
  direction = "x",
  className = "",
  itemClassName = "",
}: {
  items: string[];
  direction?: "x" | "y";
  className?: string;
  itemClassName?: string;
}) {
  const track =
    direction === "x"
      ? "animate-marquee-x flex w-max gap-16 whitespace-nowrap"
      : "animate-marquee-y flex flex-col";

  return (
    <div className={`min-w-0 overflow-hidden ${className}`.trim()}>
      <div className={track}>
        {[...items, ...items, ...items].map((item, i) => (
          <p key={`${item}-${i}`} className={`shrink-0 ${itemClassName}`.trim()}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
