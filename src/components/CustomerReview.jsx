import { Avatar, Box, Button, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomerReview = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
      <Grid container spacing={5} alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/src/assets/man.png"
            alt="Customer"
            sx={{ width: "100%", borderRadius: "40px", boxShadow: "0px 10px 40px rgba(0,0,0,0.08)" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <Typography variant="h4" fontWeight="bold">
              Customers <span style={{ color: "#f44336" }}>Reaction</span>
            </Typography>
            <Paper sx={{ p: 3, borderRadius: 4, border: "1px solid #eee" }}>
              <Stack spacing={2}>
                <Box display="flex" justifyContent="space-between">
                  <Chip label="✔ Verified Purchase" color="success" size="small" />
                  <Typography variant="caption" color="text.secondary">23 Nov 2021</Typography>
                </Box>
                <Typography fontStyle="italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar src="/src/assets/user.png" />
                    <Box>
                      <Typography fontWeight="bold">Md. Athik Foisal</Typography>
                      <Typography variant="caption" color="text.secondary">UI/UX Designer</Typography>
                    </Box>
                  </Stack>
                  <Typography color="warning.main">★★★★☆</Typography>
                </Stack>
              </Stack>
            </Paper>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined"><ArrowBackIcon /></Button>
              <Button variant="contained" sx={{ bgcolor: "#f44336", "&:hover": { bgcolor: "#d32f2f" } }}>
                <ArrowForwardIcon />
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerReview;
