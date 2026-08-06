export default function CircleCluster() {
  return (
    <div className="relative size-40 shrink-0 animate-breathe">
      <div className="absolute top-0 left-1/2 size-24 -translate-x-1/2 rounded-full bg-olive-mute/75" />
      <div className="absolute bottom-0 left-1/2 size-24 -translate-x-1/2 rounded-full bg-black-green/85" />
      <div className="absolute top-1/2 right-0 size-24 -translate-y-1/2 rounded-full bg-jungle-green/70" />
      <div className="absolute top-1/2 left-0 flex size-24 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-green/90">
        <div className="size-17 animate-spin-slow rounded-full border border-dashed border-white/80" />
      </div>
    </div>
  );
}
