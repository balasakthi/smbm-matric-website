import { actionsQuery, options } from "@/lib/sanityQuery";
import { client } from "@/sanity/client";
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
  const actions = await client.fetch(actionsQuery, {}, options);

  return <ClientNavbar logo={logo} menu={menu} actions={actions} />;
};

export { Navbar };
