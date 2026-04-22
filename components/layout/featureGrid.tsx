interface Props {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

function FeatureGrid({ children, columns = 3, className }: Props) {
  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className={`grid gap-8 ${gridCols} ${className || ""}`}>
      {children}
    </div>
  );
}

export { FeatureGrid };
