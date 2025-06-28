import { AppBar, Toolbar, Box, IconButton, Typography, Badge, Container, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Services', path: '/services' },
    { label: 'Customer Reviews', path: '/reviews' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 64 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/src/assets/Food-logo.png"
              alt="Logo"
              sx={{ width: 40, height: 40, mr: 1 }}
            />
          </Box>

          {/* Navigation */}
          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#f44336' : '#000',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                  {item.label}
                </Typography>
              </NavLink>
            ))}
          </Stack>

          {/* Icons */}
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
