import React from "react";
import {
  Book,
  School,
  Home,
  Info,
  Target,
  Users,
  Briefcase,
  Building2,
  Image as ImageIcon,
  Scale,
  Shirt,
  HandHelping,
  Clock,
  MessageSquareText,
  BookOpen,
  ScrollText,
  Baby,
} from "lucide-react";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
  highlight?: boolean;
}

export const defaultMenu: MenuItem[] = [
  { title: "Home", url: "/", icon: <Home className="size-4" /> },

  {
    title: "About",
    url: "#",
    icon: <Info className="size-4" />,
    items: [
      {
        title: "History",
        description: "Know the journey of our institution",
        icon: <Clock className="size-5" />,
        url: "#",
        highlight: true,
      },
      {
        title: "Mission & Vision",
        description: "Our guiding principles and goals.",
        icon: <Target className="size-5" />,
        url: "#",
      },
      {
        title: "Leadership Team",
        description: "Meet our school leaders.",
        icon: <Users className="size-5" />,
        url: "#",
      },
      {
        title: "Careers",
        description: "Join our team and shape young minds.",
        icon: <Briefcase className="size-5" />,
        url: "/about/careers",
      },
      {
        title: "Correspondent's Message",
        url: "/about/correspondent-message",
        description: "A message from the Correspondent.",
        icon: <MessageSquareText className="size-5" />,
      },
      {
        title: "Principal's Message",
        url: "/about/principal-message",
        description: "Guidance from the Principal.",
        icon: <MessageSquareText className="size-5" />,
      },
      {
        title: "Vice Principal's Message",
        url: "/about/vice-principal-message",
        description: "Words from the Vice Principal.",
        icon: <MessageSquareText className="size-5" />,
      },
    ],
  },

  {
    title: "Academics",
    url: "#",
    icon: <Book className="size-4" />,
    items: [
      {
        title: "Curriculum",
        description: "Structured programs and learning goals.",
        icon: <Book className="size-5" />,
        url: "#",
      },
      {
        title: "Courses Offered",
        url: "/academics/courses-offered",
        description: "Subjects and courses for each grade.",
        icon: <BookOpen className="size-5" />,
      },
      {
        title: "Kindergarten",
        url: "/academics/kindergarten",
        description: "Early learning programs overview.",
        icon: <Baby className="size-5" />,
      },
      {
        title: "Rules & Regulations",
        url: "/academics/rules-regulations",
        description: "Policies ensuring a disciplined school.",
        icon: <ScrollText className="size-5" />,
      },
    ],
  },

  {
    title: "Campus Life",
    url: "#",
    icon: <School className="size-4 " />,
    items: [
      {
        title: "Facilities",
        description: "Explore our infrastructure.",
        icon: <Building2 className="size-5" />,
        url: "/school-life/facilities",
      },
      {
        title: "Gallery",
        description: "School events & activities.",
        icon: <ImageIcon className="size-5" />,
        url: "/school-life/gallery",
      },
      {
        title: "Discipline Policy",
        description: "Rules and guidelines.",
        icon: <Scale className="size-5" />,
        url: "/school-life/discipline-policy",
      },
      {
        title: "Uniform & Care",
        description: "Dress code details.",
        icon: <Shirt className="size-5" />,
        url: "/school-life/uniform-personal-care",
      },
      {
        title: "School Prayers",
        description: "Daily spiritual activities.",
        icon: <HandHelping className="size-5" />,
        url: "/school-life/school-prayers",
      },
    ],
  },
  {
    title: "News & Events",
    url: "/news-events",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];
