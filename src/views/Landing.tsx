import {
  Container,
  Typography,
  Grid,
  Box,
  Tooltip,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import HomeCardWrapper from "../components/card/HomeCardWrapper";
import avenidaLogo from "../assets/avenida_logo.svg";
import { LEARNING, PROJECTS, STACK } from "../utils/mock";
import { HOME_LINKS, SOCIAL_LINKS } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Container>
      <Grid container className="section">
        <Grid item xs={12} mb={6.5} textAlign="center">
          <Typography fontSize={48} fontWeight={800}>
            Mateo Jacques <span className="text-muted">is a</span>{" "}
            <span className="text-accent">Fullstack Developer</span>
          </Typography>
        </Grid>

        <Grid container spacing={3} mb={5.5}>
          <Grid item xs={12} md={6}>
            <HomeCardWrapper title="I've built..." href="/projects">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={5}
                textAlign="center"
              >
                {PROJECTS.map(({ id, name, icon }) => (
                  <Grid key={id} item xs={6} md={3}>
                    <Tooltip title={name} arrow>
                      <img src={icon} alt={name} />
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </HomeCardWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeCardWrapper title="I work in..." href="/career">
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                gap={2}
                marginBlock="auto"
              >
                <img
                  src={avenidaLogo}
                  alt="avenida+ logo"
                  width={130}
                  height="auto"
                />
                <Box>
                  <Typography fontSize={20} fontWeight={800} mb={1}>
                    Fullstack Developer (React + Node)
                  </Typography>
                  <Typography fontSize={16} className="text-muted">
                    <b className="text-muted">avenida+</b> - Joined on
                    04/04/2022
                  </Typography>
                </Box>
              </Box>
            </HomeCardWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeCardWrapper title="My current stack is..." href="/stack">
              <Grid
                container
                textAlign="center"
                alignItems="center"
                spacing={5}
              >
                {STACK.map(({ id, name, icon }) => (
                  <Grid key={id} item xs={4} md={2}>
                    <Tooltip title={name}>
                      <img src={icon} alt={name} />
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </HomeCardWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeCardWrapper
              title="I'm interested in learning..."
              href="/stack"
            >
              <Grid
                container
                textAlign="center"
                alignItems="center"
                spacing={5}
              >
                {LEARNING.map(({ id, name, icon }) => (
                  <Grid key={id} item xs={4} md={2}>
                    <Tooltip title={name}>
                      <img src={icon} alt={name} />
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </HomeCardWrapper>
          </Grid>
        </Grid>

        <Grid container mb={8}>
          <Grid item xs={12}>
            <Typography fontSize={24} className="text-muted" mb={4}>
              Learn more about...
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            {HOME_LINKS.map(({ id, label, href }) => (
              <Grid key={id} item xs={12} sm={6} md={3} textAlign="center">
                <Link to={href} style={{ textDecoration: "none" }}>
                  <Card className="home-link">
                    <CardContent>
                      <Typography fontSize={24}>{label}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid
            item
            display="flex"
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: 4,
                paddingInline: 4,
                fontSize: 20,
                borderColor: "var(--accent) !important",
                color: "var(--accent) !important",
              }}
            >
              Download CV
            </Button>
          </Grid>
          <Grid
            item
            display="flex"
            gap={5}
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
          >
            {SOCIAL_LINKS.map(({ category, icon, href, label }) => (
              <Tooltip key={icon} title={label}>
                <Link to={href} target="_blank">
                  <Typography fontSize={32}>
                    <FontAwesomeIcon icon={[category, icon]} />
                  </Typography>
                </Link>
              </Tooltip>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;