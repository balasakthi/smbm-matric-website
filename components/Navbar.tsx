import { defaultMenu, MenuItem } from "@/lib/menuData";
import { ClientNavbar } from "./ClientNavbar";

interface Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: MenuItem[];
}

const Navbar = async ({
  logo = {
    url: "/",
    src: "/logo/smbm-matric-logo-text.webp",
    alt: "Logo of SMBM Matric School",
  },
  menu = defaultMenu,
}: Props) => {
  return <ClientNavbar logo={logo} menu={menu} />;
};

export { Navbar };
