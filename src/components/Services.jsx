import { Box, Button, Card, CardContent, CardActions, Avatar, Grid, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RoomIcon from "@mui/icons-material/Room";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const steps = [
  { icon: <FastfoodIcon sx={{ fontSize: 60, color: "#f44336" }} />, title: "Choose Your Meals", desc: "Choose your favorite dish from our menu." },
  { icon: <RoomIcon sx={{ fontSize: 60, color: "#ff9800" }} />, title: "Order Online", desc: "Place your order online or via our app." },
  { icon: <LocalShippingIcon sx={{ fontSize: 60, color: "#4caf50" }} />, title: "Fast Delivery", desc: "Get your food delivered in 30 minutes." },
];

const Services = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={5}>
        How Does It <span style={{ color: "#f44336" }}>Work?</span>
      </Typography>
      <Grid container spacing={4}>
        {steps.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ p: 3, borderRadius: 5, textAlign: "center", boxShadow: 4 }}>
              <Avatar sx={{ bgcolor: "#fff", width: 100, height: 100, mx: "auto", mb: 2, boxShadow: 3 }}>
                {item.icon}
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" endIcon={"→"}>Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
