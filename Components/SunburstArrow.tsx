export default function SunburstArrow() {
  const rays = Array.from({ length: 60 }, (_, i) => i * 6);

  return (
    <div className="relative flex size-36 items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full animate-[spin_20s_linear_infinite] text-edgy-black"
        aria-hidden
      >
        {rays.map((deg) => (
          <line
            key={deg}
            x1="50"
            y1="50"
            x2="50"
            y2="6"
            stroke="currentColor"
            strokeWidth="0.55"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </svg>
      <svg
        className="relative z-10 size-20 text-edgy-black"
        width="58"
        height="90"
        viewBox="0 0 58 90"
        fill="none"
        aria-hidden
      >
        <path
          d="M28.8674 90L57.7349 40L-8.02675e-05 40L28.8674 90ZM28.8674 0L23.8674 2.18557e-07L23.8674 45L28.8674 45L33.8674 45L33.8674 -2.18557e-07L28.8674 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
