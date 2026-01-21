import StatsItem from "./StatsItem";

export default function Stats() {
  return (
    <section className="bg-accent">
      <div className="container mx-auto py-12 text-center text-accent-foreground">
        <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-center">
          <StatsItem value={1500} suffix="+" label="Students" delay={0} />
          <StatsItem
            value={80}
            suffix="+"
            label="Qualified Staff"
            delay={0.1}
          />
          <StatsItem value={100} suffix="%" label="Board Results" delay={0.2} />
          <StatsItem
            suffix="K.G. - XII"
            label="Complete Education"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
