import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@octaviospain",
    icon: Icons.gitHub,
    link: "https://github.com/octaviospain",
  },
  {
    name: "LinkedIn",
    username: "Octavio Calleya Garcia",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/developerotto",
  },
  {
    name: "Mail",
    username: "octavio",
    icon: Icons.gmail,
    link: "mailto:octavio@transgressoft.net",
  },
];
