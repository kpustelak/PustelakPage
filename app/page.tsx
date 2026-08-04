import Button from "@/Components/Button";
import { SiDotnet } from "react-icons/si";

function SunburstArrow() {
  const rays = Array.from({ length: 60 }, (_, i) => i * 6);

  return (
    <div className="relative flex size-36 items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full text-edgy-black"
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
        viewBox="0 0 24 24"
        className="relative z-10 size-7 text-edgy-black"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 4v14" />
        <path d="M6 12l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-5">
        <p className="text-xl text-edgy-black">Kornel Pustelak</p>
        <div className="flex space-x-10 text-sm">
          <a href="#home">Home</a>
          <p>Projects</p>
          <p>Why me</p>
          <p>Now what?</p>
          <p>Contact</p>
        </div>
        <Button type="primary" baseColor="edgy-black">
          Get in touch
        </Button>
      </div>

      <div className="flex w-full items-center px-36 pt-8" id="home">
        <div className="flex w-1/2 items-center gap-8">
          <div>
            <h2 className="text-5xl">Hi, I am</h2>
            <h2 className="text-8xl font-medium leading-none">
              Kornel <br /> Pustelak
            </h2>
            <div className="flex space-x-2 pt-10">
              <Button type="primary" baseColor="normal-green">
                I WANT TO KNOW MORE
              </Button>
              <Button type="secondary" baseColor="edgy-black">
                Let&apos;s connect
              </Button>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center rounded-full bg-sahara-green/50 px-2.5 py-3">
            <div className="flex size-14 items-center justify-center rounded-full bg-black-green text-2xl text-white">
              <SiDotnet />
            </div>
            <div className="-mt-3 flex size-14 items-center justify-center rounded-full bg-normal-green text-2xl text-white">
              <SiDotnet />
            </div>
            <div className="-mt-3 flex size-14 items-center justify-center rounded-full bg-black-green text-2xl text-white">
              <SiDotnet />
            </div>
          </div>
        </div>

        <div className="flex w-1/2 items-center">
          <div className="h-[460px] min-w-0 flex-1 bg-[#d9d9d9]" />

          <div className="flex min-w-0 flex-1 flex-col gap-10 ">
            <div className="flex gap-4 pl-4">
              <div className="w-px shrink-0 self-stretch bg-[#c5c5c5]" />
              <p className="text-sm leading-relaxed text-edgy-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                volutpat tempus mi ac faucibus.
              </p>
            </div>
            <div className="flex flex-col gap-2 pl-4 text-sm pl-4">
              <p>&gt; Show me your work</p>
              <p className="text-normal-green">&gt; Who are you?</p>
              <p>&gt; Lets talk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dolny rząd — te same 1/2 co hero */}
      <div className="flex w-full items-stretch px-36">
        <div className="flex h-52 w-1/2 items-center justify-between bg-edgy-black px-10">
          <div className="max-w-[260px]">
            <p className="text-sm leading-relaxed text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              volutpat tempus mi ac faucibus. Nunc velit massa, ullamcorper ut
              magna non.
            </p>
          </div>

          <div className="relative size-36 shrink-0">
            <div className="absolute top-0 left-0 size-20 rounded-full border border-dashed border-white/80" />
            <div className="absolute top-0 right-0 size-20 rounded-full bg-white/20" />
            <div className="absolute bottom-0 left-2 size-20 rounded-full bg-black-green" />
            <div className="absolute right-0 bottom-0 size-20 rounded-full bg-jungle-green" />
          </div>
        </div>

        <div className="flex h-52 w-1/2 gap-0">
          <div className="flex min-w-0 flex-1 items-center justify-center">
            <SunburstArrow />
          </div>

          <div className="flex min-w-0 flex-1">
            <div className="w-1/2 bg-normal-green" />
            <div className="flex w-1/2 flex-col">
              <div className="flex-1 bg-black-green" />
              <div className="flex-1 bg-jungle-green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
