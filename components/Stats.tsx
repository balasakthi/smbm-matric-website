import { client } from "@/sanity/client";
import { statsQuery, options } from "@/lib/sanityQuery";
import StatsItem from "./StatsItem";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export default async function Stats() {
  const stats = await client.fetch(statsQuery, {}, options);

  return (
    <section className="bg-accent">
      <div className="container mx-auto py-12 text-center text-accent-foreground">
        <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-center">
          {stats.map((stat: Stat, index: number) => (
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
