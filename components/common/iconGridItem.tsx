import { cn } from "@/lib/utils";

interface IconGridItemProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export function IconGridItem({
  icon,
  title,
  description,
  className,
}: IconGridItemProps) {
  return (
    <article className={cn("group flex gap-6 items-start", className)}>
      {icon && <div className="shrink-0">{icon}</div>}

      <div className="flex flex-col justify-center w-full">
        {title && (
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
        )}
        {description && (
          <div className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
            {description}
          </div>
        )}
      </div>
    </article>
  );
}
