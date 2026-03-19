import {
  Award,
  Baby,
  Backpack,
  BookOpen,
  Building,
  Camera,
  FileCheckCorner,
  FileUser,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Home,
  IdCard,
  LucideIcon,
  School,
  ShieldCheck,
  Star,
  Trophy,
  User,
  Users,
} from "lucide-react";

type IconComponent = LucideIcon;

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

export const classCategoriesMap: Record<string, IconComponent> = {
  Star,
  BookOpen,
  School,
  GraduationCap,
  Award,
};

export const documentIconsMap: Record<string, LucideIcon> = {
  FileCheckCorner,
  GraduationCap,
  BookOpen,
  Camera,
  IdCard,
  User,
  Home,
  FileUser,
  Users,
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
