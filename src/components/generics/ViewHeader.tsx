import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ViewHeader = ({ title }: { title: string }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} display="flex" gap={2}>
      <IconButton component={Link} to="/">
        <FontAwesomeIcon icon={["fas", "home"]} />
      </IconButton>
      <Typography
        fontSize={45}
        letterSpacing={2}
        fontWeight={800}
        textAlign="center"
        width="100%"
      >
        {title}
      </Typography>
    </Grid>
  </Grid>
);

export default ViewHeader;
