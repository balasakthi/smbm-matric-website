import { cn } from "@/lib/utils";

interface GridSectionProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  footer?: React.ReactNode;
  className?: string;
}

export function GridSection({
  children,
  columns = 2,
  footer,
  className,
}: GridSectionProps) {
  const gridCols =
    columns === 3
      ? "lg:grid-cols-3"
      : columns === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-2";

  return (
    <section className={className}>
      <div className={cn("grid gap-12", gridCols)}>{children}</div>
      {footer && <div className="mt-16 flex justify-center">{footer}</div>}
    </section>
  );
}
