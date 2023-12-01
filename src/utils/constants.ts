import { ISocialLink } from "../interfaces/landing";

export const HOME_LINKS = [
  { id: "projects", label: "My projects", href: "/projects" },
  { id: "career", label: "My career", href: "/career" },
  { id: "blog", label: "My blog", href: "/blog" },
  { id: "me", label: "Me", href: "/me" },
];

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    category: "fab",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/mateoleonjacques/",
    label: "Linkedin",
  },
  {
    category: "fab",
    icon: "github",
    href: "https://github.com/mateojacques",
    label: "Github",
  },
  {
    category: "fab",
    icon: "gitlab",
    href: "https://git.avenida.com/mateo.jacques",
    label: "Gitlab",
  },
  {
    category: "fas",
    icon: "envelope",
    href: "mailto:mateojacquesweb@gmail.com",
    label: "Email",
  },
];

export const THEME_COLORS = [
  /* Blue */ "0, 79, 255",
  /* Pink */ "255, 0, 127",
  /* Green */ "65, 184, 131",
  /* Lightblue */ "118, 229, 252",
  /* Yellow */ "255, 251, 70",
  /* White */ "194, 194, 194",
  /* Red */ " 234, 15, 11",
];
