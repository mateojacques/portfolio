import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface ISocialLink {
  category: IconPrefix;
  icon: IconName;
  href: string;
  label: string;
}
