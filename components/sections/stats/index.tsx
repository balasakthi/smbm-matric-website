import { STATS_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { StatsItem } from "./StatsItem";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface StatsSection {
  title?: string;
  stats: Stat[];
}

async function Stats() {
  const data = await fetchSectionData<StatsSection>(STATS_QUERY);

  const stats = data?.stats ?? [];

  return (
    <section className="bg-primary">
      <div className="container mx-auto py-12 text-center text-primary-foreground">
        <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-center">
          {stats.map((stat, index) => (
            <StatsItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Stats };
