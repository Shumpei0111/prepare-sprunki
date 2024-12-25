import Clock from "@/components/clock/clock";
import { Settings } from "@/components/settings/settings";

export default function Home() {
  return (
    <article className="p-4 relative min-h-screen">
      <div className="relative">
        <div className="absolute right-0">
          <Clock />
        </div>
      </div>
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <Settings />
      </section>
    </article>
  );
}