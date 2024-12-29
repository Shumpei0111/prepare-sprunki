import Clock from "@/components/clock/clock";
import { Contents } from "@/components/contents/contents";
import { SprunkiList } from "@/components/sprunki-list/sprunki-list";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  return (
    <article className="p-4 relative min-h-screen">
      <div className="relative">
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <div className="absolute right-0">
          <Clock />
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
