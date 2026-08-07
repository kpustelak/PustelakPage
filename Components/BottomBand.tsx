import Marquee from "@/Components/Marquee";
import DiagonalSkills from "@/Components/DiagonalSkills";

const yearItems = ["2026", "2026"];
const placeItems = ["PL ", "REMOTE", " STUDENT "];

export default function BottomBand() {
  return (
    <div className="relative z-0 flex w-full items-stretch px-page">
      <div className="flex h-52 w-1/2 animate-enter-left items-center justify-between px-inset delay-500" />

      <div className="flex h-52 w-1/2 gap-0">
        <div className="flex min-w-0 flex-1 animate-enter-up items-center justify-center overflow-hidden delay-600">
          <DiagonalSkills />
        </div>

        <div className="grid h-52 min-w-0 flex-1 animate-enter-right grid-cols-2 overflow-hidden delay-700">
          <div className="flex items-end bg-normal-green p-4">
            <p className="text-sm font-medium leading-snug text-white">
              Available
              <br />
              <span className="font-normal text-white/75">Open for work</span>
            </p>
          </div>
          <div className="grid min-w-0 grid-rows-2 overflow-hidden">
            <Marquee
              items={placeItems}
              direction="x"
              className="bg-black-green"
              itemClassName="font-sans text-7xl font-extrabold text-white/40"
            />
            <Marquee
              items={yearItems}
              direction="y"
              className="bg-jungle-green"
              itemClassName="text-center font-sans text-7xl font-extrabold leading-none text-edgy-black/40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
