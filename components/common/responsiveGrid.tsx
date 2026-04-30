import { cn } from "@/lib/utils";

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
  gap?: "4" | "6" | "8" | "12";
  className?: string;
}

export function ResponsiveGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = "8",
  className,
}: ResponsiveGridProps) {
  const getColClass = (prefix: string, count?: number) =>
    count ? `${prefix}:grid-cols-${count}` : "";

  const gridClasses = cn(
    "grid",
    `gap-${gap}`,
    getColClass("sm", columns.sm),
    getColClass("md", columns.md),
    getColClass("lg", columns.lg),
    className,
  );

  return <div className={gridClasses}>{children}</div>;
}
