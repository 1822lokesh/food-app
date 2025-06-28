import { Box, Button, Chip, Container, Grid, Stack, Typography, Avatar } from "@mui/material";

const foodItems = [
  { name: "Chicken biryani", img: "../src/assets/chiken.png" },
  { name: "Hundi mutton", img: "../src/assets/mutton.webp" },
  { name: "Kala bhuna", img: "../src/assets/kala.png" },
];

const Home = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Chip label="🍔 Eat healthy, Stay Healthy" sx={{ bgcolor: "#ffe9e9", mb: 2 }} />
          <Typography variant="h3" fontWeight="bold">
            Be The <span style={{ color: "#f44336" }}>First</span>
            <br />Delivery & Easy Pick Up
          </Typography>
          <Typography sx={{ my: 2 }}>
            We will deliver your food within 30 minutes in your town, If we would fail, we will give the food free.
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <Button variant="contained" color="error">Order Now</Button>
            <Button variant="outlined" color="error">Book a Table</Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={4}>
            {foodItems.map((item) => (
              <Box key={item.name} sx={{ textAlign: "center" }}>
                <Avatar src={item.img} sx={{ width: 60, height: 60, mx: "auto" }} />
                <Typography>{item.name}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="../src/assets/burger.png"
            sx={{ width: "100%", borderRadius: "30px", boxShadow: 3 }}
            alt="Burger"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
