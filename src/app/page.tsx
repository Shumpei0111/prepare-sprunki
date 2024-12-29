import Clock from "@/components/clock/clock";
import { Contents } from "@/components/contents/contents";
import { Settings } from "@/components/settings/settings";
import { SprunkiList } from "@/components/sprunki-list/sprunki-list";

export default function Home() {
  return (
    <article className="p-4 relative min-h-screen">
      <div className="relative">
        <div className="absolute left-0">
          <Clock />
        </div>
        <div className="absolute right-0">
          <Settings />
        </div>
      </div>
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <Contents />
      </section>
      <section>
        <SprunkiList />
      </section>
    </article>
  );
}
