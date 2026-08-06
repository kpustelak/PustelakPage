export default function QuoteBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex gap-3 ${className}`.trim()}>
      <div className="w-px shrink-0 self-stretch bg-edgy-black" />
      <div className="min-w-0 transition-[translate] duration-500 ease-smooth hover:translate-x-1.5">
        {children}
      </div>
    </div>
  );
}
