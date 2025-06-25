import { AppBar, Toolbar, Box, IconButton, Typography, Badge, Container } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 64, px: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="../src/assets/Food-logo.png"
              alt="Logo"
              sx={{ width: 40, height: 40, mr: 1 }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {['Home', 'Menu', 'Services', 'Food Carts'].map((item) => (
              <Typography key={item} variant="body1" sx={{ color: '#000', cursor: 'pointer' }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton>
              <SearchIcon sx={{ color: '#000' }} />
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <ShoppingBagIcon sx={{ color: '#000' }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;