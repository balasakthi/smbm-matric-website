import {
  ArrowUpRight,
  Award,
  Baby,
  Backpack,
  BookOpen,
  BookOpenText,
  Brain,
  BriefcaseBusiness,
  Building,
  Camera,
  Clock8,
  Dumbbell,
  File,
  FileCheckCorner,
  FileUser,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Home,
  House,
  IdCard,
  Languages,
  Laptop,
  Lightbulb,
  LucideIcon,
  Mail,
  MapPin,
  Palette,
  Phone,
  Presentation,
  School,
  ShieldCheck,
  Sparkles,
  Star,
  TestTubeDiagonal,
  Trophy,
  User,
  UserStar,
  Users,
} from "lucide-react";

export type IconCategory =
  | "quickHighlight"
  | "academics"
  | "whyChoose"
  | "curriculum"
  | "classCategories"
  | "document"
  | "learningApproach"
  | "teachingMethodology"
  | "leadership"
  | "admissionSteps"
  | "contact";

export const iconMaps: Record<IconCategory, Record<string, LucideIcon>> = {
  quickHighlight: {
    BookOpen,
    Building,
    School,
    Users,
  },
  academics: {
    Baby,
    Backpack,
    BookOpen,
    FlaskConical,
    GraduationCap,
  },
  whyChoose: {
    BookOpen,
    GraduationCap,
    HeartHandshake,
    ShieldCheck,
    Trophy,
    Users,
  },
  curriculum: {
    Award,
    BookOpen,
    Brain,
    BriefcaseBusiness,
    Dumbbell,
    GraduationCap,
    Languages,
    Laptop,
    Palette,
    Sparkles,
    TestTubeDiagonal,
  },
  classCategories: {
    Award,
    BookOpenText,
    Backpack,
    GraduationCap,
    Star,
  },
  document: {
    BookOpen,
    Camera,
    File,
    FileCheckCorner,
    FileUser,
    GraduationCap,
    Home,
    House,
    IdCard,
    User,
    Users,
  },
  learningApproach: {
    GraduationCap,
    Handshake,
    Laptop,
    Lightbulb,
    Palette,
    TestTubeDiagonal,
  },
  teachingMethodology: {
    BookOpen,
    Presentation,
    UserStar,
  },
  leadership: {
    User,
  },
  admissionSteps: {
    ArrowUpRight,
  },
  contact: {
    Clock8,
    Phone,
    Mail,
    MapPin,
  },
};

const toPascalCase = (str: string) =>
  str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

export function getIconByCategory(
  iconName: string | undefined,
  category: IconCategory,
  fallback: LucideIcon = School,
): LucideIcon {
  const iconMap = iconMaps[category];
  if (!iconName) return fallback;

  if (iconMap[iconName]) return iconMap[iconName];

  const normalizedName = toPascalCase(iconName);
  return iconMap[normalizedName] || fallback;
}
