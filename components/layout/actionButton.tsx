"use client";

import Link from "next/link";
import { ArrowUpRight, Loader2, LucideIcon } from "lucide-react";
import { BTN_ICON_HOVER_SLIDE, BTN_HOVER_SCALE } from "@/lib/ui-constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ActionButtonProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Button>,
  "onClick"
> {
  text: string;
  href?: string;
  formId?: string;
  targetPage?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  showIcon?: boolean;
  icon?: LucideIcon;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ActionButton({
  text,
  href,
  formId,
  targetPage,
  variant = "default",
  showIcon = true,
  icon: Icon = ArrowUpRight,
  isLoading = false,
  className,
  children,
  size,
  ...props
}: ActionButtonProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (formId) {
      const currentPath = window.location.pathname;

      if (!targetPage || currentPath === targetPage) {
        const el = document.getElementById(formId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      router.push(targetPage);

      setTimeout(() => {
        const el = document.getElementById(formId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 500);

      return;
    }

    if (props.onClick) {
      props.onClick(event);
    }
  };

  const content = (
    <>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

      {text}

      {showIcon && !isLoading && (
        <Icon className={cn(BTN_ICON_HOVER_SLIDE, "size-5")} />
      )}

      {children}
    </>
  );

  const classes = cn(BTN_HOVER_SCALE, "font-semibold", className);

  if (href && !formId) {
    return (
      <Button
        asChild
        size={size}
        variant={variant}
        className={classes}
        {...props}
      >
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={classes}
      disabled={isLoading}
      onClick={handleClick}
      aria-label={text}
      {...props}
    >
      {content}
    </Button>
  );
}

export { ActionButton };
