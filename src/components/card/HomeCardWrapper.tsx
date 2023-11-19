import { Typography, Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

const HomeCardWrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Card className="home-card cursor-pointer">
    <CardContent>
      <Typography fontSize={24} mb={3}>{title}</Typography>
      {children}
    </CardContent>
  </Card>
);

export default HomeCardWrapper;
