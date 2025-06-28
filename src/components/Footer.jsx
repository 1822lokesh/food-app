import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Chip,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#fff", pt: 8, pb: 3 }}>
      <Container>
        <Grid container spacing={5}>
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Box
                component="img"
                src="/src/assets/Food-logo.png"
                alt="Logo"
                sx={{ width: 40, height: 40 }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: "220px" }}
              >
                Delivering happiness through delicious food. Fast, fresh, and tasty.
              </Typography>
            </Stack>
          </Grid>

          {/* Product Links */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Product
            </Typography>
            <Stack spacing={1}>
              <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </NavLink>
              <NavLink to="/menu" style={{ textDecoration: "none", color: "inherit" }}>
                Menu
              </NavLink>
              <NavLink to="/services" style={{ textDecoration: "none", color: "inherit" }}>
                Services
              </NavLink>
              <NavLink to="/reviews" style={{ textDecoration: "none", color: "inherit" }}>
                Customer Reviews
              </NavLink>
              <Box display="flex" alignItems="center" gap={1}>
                <Link href="#" underline="none" color="text.primary">
                  Products
                </Link>
                <Chip label="New" size="small" color="error" />
              </Box>
              <Link href="#" underline="none" color="text.primary">
                FAQ
              </Link>
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Social
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.primary">
                Twitter
              </Link>
              <Link href="#" underline="none" color="text.primary">
                LinkedIn
              </Link>
              <Link href="#" underline="none" color="text.primary">
                Facebook
              </Link>
              <Link href="#" underline="none" color="text.primary">
                GitHub
              </Link>
              <Link href="#" underline="none" color="text.primary">
                Dribbble
              </Link>
            </Stack>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.primary">
                Terms
              </Link>
              <Link href="#" underline="none" color="text.primary">
                Privacy
              </Link>
              <Link href="#" underline="none" color="text.primary">
                Cookies
              </Link>
              <Link href="#" underline="none" color="text.primary">
                Licenses
              </Link>
              <Link href="#" underline="none" color="text.primary">
                Settings
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: "1px solid #f5f5f5", mt: 5, pt: 3 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="caption" color="text.secondary">
              <CopyrightIcon sx={{ fontSize: "12px", mr: 0.5 }} />
              2025 Falcon Thought. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton>
                <TwitterIcon sx={{ fontSize: 20, color: "#9e9e9e" }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ fontSize: 20, color: "#9e9e9e" }} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={{ fontSize: 20, color: "#9e9e9e" }} />
              </IconButton>
              <IconButton>
                <GitHubIcon sx={{ fontSize: 20, color: "#9e9e9e" }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
