import Button from "@/Components/Button";
import PickLine from "@/Components/PickLine";
import QuoteBlock from "@/Components/QuoteBlock";
import TechStack from "@/Components/TechStack";

export default function Hero() {
  return (
    <div className="flex w-full items-stretch px-page pt-8" id="home">
      <div className="flex w-1/2 items-center gap-8">
        <div className="animate-enter-left delay-150">
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

        <TechStack />
      </div>

      <div className="flex w-1/2 items-stretch">
        <div className="min-h-115 min-w-0 flex-1 animate-enter-up bg-sahara-green delay-250" />

        <div className="flex min-w-0 flex-1 animate-enter-right flex-col justify-center gap-10 delay-400">
          <QuoteBlock className="pl-4">
            <p className="text-xl leading-relaxed text-edgy-black/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              volutpat tempus mi ac faucibus.
            </p>
          </QuoteBlock>
          <div className="flex flex-col gap-2 pl-4 text-sm">
            <PickLine text="Show me your work" href="#work" />
            <PickLine text="Who are you?" href="#who" />
            <PickLine text="Lets talk" href="#talk" />
          </div>
        </div>
      </div>
    </div>
  );
}
