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
    icon: Icons.GitHub,
    link: "https://github.com/octaviospain",
  },
  {
    name: "LinkedIn",
    username: "Octavio Calleya Garcia",
    icon: Icons.Linkedin,
    link: "https://www.linkedin.com/in/developerotto",
  },
  {
    name: "Mail",
    username: "octavio",
    icon: Icons.Gmail,
    link: "mailto:octavio@transgressoft.net",
  },
];
