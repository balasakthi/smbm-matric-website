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
  Handshake,
  HeartHandshake,
  Home,
  IdCard,
  Laptop,
  Lightbulb,
  LucideIcon,
  Palette,
  School,
  ShieldCheck,
  Star,
  TestTubeDiagonal,
  Trophy,
  User,
  Users,
} from "lucide-react";

type IconComponent = LucideIcon;

export const quickHighlightIconMap: Record<string, IconComponent> = {
  BookOpen,
  Building,
  School,
  Users,
};

export const academicsIconMap: Record<string, IconComponent> = {
  Baby,
  Backpack,
  BookOpen,
  FlaskConical,
  GraduationCap,
};

export const whyChooseSmbmIconMap: Record<string, IconComponent> = {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Trophy,
  Users,
};

export const classCategoriesIconMap: Record<string, IconComponent> = {
  Award,
  BookOpen,
  GraduationCap,
  School,
  Star,
};

export const documentIconMap: Record<string, LucideIcon> = {
  BookOpen,
  Camera,
  FileCheckCorner,
  FileUser,
  GraduationCap,
  Home,
  IdCard,
  User,
  Users,
};

export const learningApproachIconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Handshake,
  Laptop,
  Lightbulb,
  Palette,
  TestTubeDiagonal,
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
