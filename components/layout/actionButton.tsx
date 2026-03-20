import Link from "next/link";
import { ArrowUpRight, Loader2, LucideIcon } from "lucide-react";
import { BTN_ICON_HOVER_SLIDE, BTN_HOVER_SCALE } from "@/lib/ui-constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentPropsWithoutRef<typeof Button> {
  text: string;
  href?: string;
  showIcon?: boolean;
  isLoading?: boolean;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

export function ActionButton({
  href,
  text,
  showIcon = true,
  isLoading = false,
  icon: Icon = ArrowUpRight,
  className,
  children,
  size,
  ...props
}: Props) {
  const buttonContent = (
    <>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {text}
      {showIcon && !isLoading && (
        <Icon className={cn(BTN_ICON_HOVER_SLIDE, "size-5 ml-2")} />
      )}
      {children}
    </>
  );

  const combinedClasses = cn(BTN_HOVER_SCALE, "font-semibold", className);

  if (href) {
    return (
      <Button asChild size={size} className={combinedClasses} {...props}>
        <Link href={href}>{buttonContent}</Link>
      </Button>
    );
  }

  return (
    <Button
      size={size}
      className={combinedClasses}
      disabled={isLoading}
      {...props}
    >
      {buttonContent}
    </Button>
  );
}
