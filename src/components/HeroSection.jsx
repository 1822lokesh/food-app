import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  Avatar,
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RoomIcon from "@mui/icons-material/Room";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const foodItems = [
  {
    name: "Chicken biryani",
    img: "../src/assets/chiken.png",
    alt: "Chicken biryani image",
  },
  { name: "Hundi mutton", img: "/mutton.webp", alt: "Hundi mutton image" },
  {
    name: "kala bhuna",
    img: "../src/assets/kala.png",
    alt: "Kala bhuna image",
  },
];

const dishes = [
  {
    title: "Kala Bhuna",
    image: "../src/assets/kala.png",
    price: 50.99,
    rating: 4.5,
    likes: "1.5k",
    fav: false,
  },
  {
    title: "Meat Cu",
    image: "../src/assets/mutton.webp",
    price: 50.99,
    rating: 4.5,
    likes: "1.5k",
    fav: true,
  },
  {
    title: "Chose your Meals",
    image: "../src/assets/chiken.png",
    price: 50.99,
    rating: 4.5,
    likes: "1.5k",
    fav: false,
  },
  {
    title: "Karavali Thali",
    image: "../src/assets/chiken.png",
    price: 50.99,
    rating: 4.5,
    likes: "1.5k",
    fav: true,
  },
];
const steps = [
  {
    icon: <FastfoodIcon sx={{ fontSize: 60, color: "#f44336" }} />,
    title: "Choose Your Meals",
    description: "Choose your favorite dish from our menu.",
  },
  {
    icon: <RoomIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
    title: "Order Online",
    description: "Place your order online or via our app.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 60, color: "#4caf50" }} />,
    title: "Fast Delivery",
    description: "Get your food delivered to your doorstep in 30 minutes.",
  },
];

const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 10 } }}>
      {/* Hero Grid */}
      <Grid
        container
        spacing={6}
        alignItems="stretch"
        sx={{
          minHeight: { md: 400, lg: 450 },
        }}
      >
        {/* Left */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <Chip
              label="🍔 Eat healthy, Stay Healthy"
              sx={{
                backgroundColor: "#ffe9e9",
                color: "#000",
                fontWeight: "bold",
                px: 2,
                py: 1,
                fontSize: "0.9rem",
                borderRadius: 2,
              }}
            />
          </Box>
          <Typography variant="h3" fontWeight="bold" lineHeight={1.2}>
            Be The <span style={{ color: "#f44336" }}>First</span>
            <br />
            Delivery & Easy Pick Up
          </Typography>
          <Typography sx={{ mt: 2, color: "#555" }}>
            We will deliver your food within 30 minutes in your town, If we
            would fail, we will give the food free.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 3 }}
          >
            <Button
              variant="contained"
              color="error"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 3, py: 1.5, fontWeight: 600 }}
            >
              Order Now
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ px: 3, py: 1.5, fontWeight: 600 }}
            >
              Book a Table
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }} flexWrap="wrap">
            {foodItems.map((item) => (
              <Box
                key={item.name}
                textAlign="center"
                sx={{
                  backgroundColor: "#fff",
                  p: 2,
                  borderRadius: 3,
                  boxShadow: 1,
                  minWidth: 100,
                }}
              >
                <Avatar
                  src={item.img}
                  alt={item.alt}
                  sx={{ width: 60, height: 60, mx: "auto" }}
                />
                <Typography variant="subtitle2" fontWeight={500} mt={1}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Right */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative", width: "100%", maxWidth: 350 }}>
            <Box
              component="img"
              src="../src/assets/burger.png"
              alt="Burger with ingredients"
              sx={{
                width: "100%",
                borderRadius: 5,
                boxShadow: 3,
                backgroundColor: "#111",
                p: 2,
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                backgroundColor: "#fff",
                px: 2,
                py: 1,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="body1" fontWeight="bold" color="error">
                10%
              </Typography>
              <Typography variant="caption">Discount for 2 orders</Typography>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button
                sx={{ borderRadius: 2, px: 2 }}
                variant="contained"
                color="inherit"
              >
                ←
              </Button>
              <Button
                sx={{ borderRadius: 2, px: 2 }}
                variant="contained"
                color="error"
              >
                →
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <Avatar
                src="/user.webp"
                alt="Delivery person"
                sx={{ width: 30, height: 30, mr: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                We will deliver your food within 30 minutes in your town.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* --- Popular Dishes Section --- */}
      <Box textAlign="center" mt={10}>
        <Typography variant="h4" fontWeight="bold">
          Our Popular{" "}
          <Box
            component="span"
            sx={{
              color: "primary.main",
              textDecoration: "underline",
              textDecorationColor: "#f44336",
            }}
          >
            Dishes
          </Box>
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={3}>
          {dishes.map((dish, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 2,
                  borderRadius: 10,
                  textAlign: "center",
                  boxShadow: 3,
                }}
              >
                <Avatar
                  src={dish.image}
                  alt={dish.title}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 1 }}
                />
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <StarIcon fontSize="small" sx={{ color: "#fbc02d" }} />
                  <Typography>{dish.rating}</Typography>
                  <Box flexGrow={1} />
                  <IconButton>
                    {dish.fav ? (
                      <FavoriteIcon sx={{ color: "#f44336" }} />
                    ) : (
                      <FavoriteBorderOutlined />
                    )}
                  </IconButton>
                  <Typography>{dish.likes}</Typography>
                </Stack>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {dish.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We will deliver your food within 30 minutes in your town, If
                    we would.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Typography fontWeight="bold">
                    ${dish.price.toFixed(2)}
                  </Typography>
                  <Button variant="outlined">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          sx={{
            mt: 5,
            background: "linear-gradient(90deg, #ff5e57, #ff7e5f)",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: "bold",
            boxShadow: 2,
          }}
        >
          See All Dishes →
        </Button>
      </Box>
      <Box sx={{ textAlign: "center", mt: 10, mb: 10, px: 2 }}>
      <Typography variant="h4" fontWeight="bold">
        How Does It <span style={{ color: "#f44336" }}>Work?</span>
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        mt={3}
      >
        {steps.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                borderRadius: 5,
                textAlign: "center",
                boxShadow: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 8,
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#ffffff",
                  width: 100,
                  height: 100,
                  mx: "auto",
                  mb: 2,
                  boxShadow: 3,
                }}
              >
                {item.icon}
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" endIcon={"→"}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default HeroSection;
