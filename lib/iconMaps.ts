import {
  Users,
  BookOpen,
  School,
  Building,
  Baby,
  GraduationCap,
  FlaskConical,
  Backpack,
  HeartHandshake,
  Trophy,
  ShieldCheck,
} from "lucide-react";

type IconComponent = React.ComponentType<{
  className?: string;
  strokeWidth?: number;
  size?: string | number;
}>;

export const quickHighlightIconMap: Record<string, IconComponent> = {
  School,
  Users,
  Building,
  BookOpen,
};

export const academicsIconMap: Record<string, IconComponent> = {
  Baby,
  BookOpen,
  Backpack,
  GraduationCap,
  FlaskConical,
};

export const whyChooseSmbmMap: Record<string, IconComponent> = {
  GraduationCap,
  Users,
  BookOpen,
  HeartHandshake,
  Trophy,
  ShieldCheck,
};

const toPascalCase = (str: string) =>
  str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

export function getIcon(
  iconName: string | undefined,
  iconMap: Record<string, IconComponent>,
  fallback: IconComponent,
): IconComponent {
  if (!iconName) return fallback;
  if (iconMap[iconName]) return iconMap[iconName];
  const normalizedName = toPascalCase(iconName);

  return iconMap[normalizedName] || fallback;
}
