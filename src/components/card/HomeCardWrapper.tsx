import { Typography, Card, CardContent } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const HomeCardWrapper = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: ReactNode;
}) => (
  <Link to={href} style={{ textDecoration: "none" }}>
    <Card className="home-card cursor-pointer">
      <CardContent
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Typography fontSize={24} mb={3}>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  </Link>
);

export default HomeCardWrapper;
