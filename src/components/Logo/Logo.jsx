import * as React from "react";
import { logoStyles } from "./logo.module.css";

const Logo = ({ tag, classes }) => {
  const logo = React.createElement(
    tag,
    {
      className: `${logoStyles} ${classes}`,
      href: tag === "a" ? "/" : "",
    },
    "Jacques"
  );

  return logo;
};

export default Logo;
