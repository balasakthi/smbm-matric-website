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
  ChartSpline,
  Clock,
  Clock8,
  DoorOpen,
  Dumbbell,
  File,
  FileCheckCorner,
  FileUser,
  FlaskConical,
  Footprints,
  Gem,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Home,
  House,
  IdCard,
  IndianRupee,
  Languages,
  Laptop,
  Leaf,
  Lightbulb,
  LucideIcon,
  Mail,
  MapPin,
  MapPinOff,
  MessageSquareX,
  Palette,
  Phone,
  Presentation,
  Scale,
  School,
  Shield,
  ShieldCheck,
  Shirt,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TestTubeDiagonal,
  Trophy,
  User,
  UserStar,
  Users,
} from "lucide-react";

export type IconCategory =
  | "academics"
  | "admissionSteps"
  | "classCategories"
  | "contact"
  | "curriculum"
  | "discipline"
  | "document"
  | "leadership"
  | "learningApproach"
  | "quickHighlight"
  | "teachingMethodology"
  | "whyChoose"
  | "whyJoinSMBM";

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
  whyJoinSMBM: {
    Handshake,
    ChartSpline,
    Target,
    Shield,
    Scale,
    Trophy,
  },
  discipline: {
    Clock,
    Leaf,
    Smartphone,
    IndianRupee,
    Gem,
    MapPinOff,
    Shirt,
    Handshake,
    MessageSquareX,
    DoorOpen,
    Footprints,
    ShieldCheck,
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
