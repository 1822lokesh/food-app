import { Box, Button, Card, CardActions, CardContent, Avatar, Grid, Stack, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";

const dishes = [
  { title: "Kala Bhuna", image: "../src/assets/kala.png", price: 50.99, rating: 4.5, likes: "1.5k", fav: false },
  { title: "Meat Curry", image: "../src/assets/mutton.webp", price: 50.99, rating: 4.5, likes: "1.5k", fav: true },
  { title: "Chicken Meals", image: "../src/assets/chiken.png", price: 50.99, rating: 4.5, likes: "1.5k", fav: false },
];

const Menu = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={5}>
        Our Popular <span style={{ color: "#f44336" }}>Dishes</span>
      </Typography>
      <Grid container spacing={4}>
        {dishes.map((dish, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
              <Avatar src={dish.image} sx={{ width: 100, height: 100, mx: "auto", mt: 2 }} />
              <Stack direction="row" justifyContent="center" spacing={1} mt={1}>
                <StarIcon sx={{ color: "#fbc02d" }} />
                <Typography>{dish.rating}</Typography>
                <IconButton>{dish.fav ? <FavoriteIcon color="error" /> : <FavoriteBorderOutlined />}</IconButton>
                <Typography>{dish.likes}</Typography>
              </Stack>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{dish.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Get your favorite food delivered quickly to your doorstep.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Typography fontWeight="bold">${dish.price}</Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
