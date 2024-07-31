import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ width: '70%', margin: '20px auto', borderRadius: '15px', bgcolor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ color: 'black' }}>
          Kritan Bhurtyal
        </Typography>
        <Box>
          <Button color="inherit" sx={{ color: 'black' }} href="#blogs">Blogs</Button>
          <Button color="inherit" sx={{ color: 'black' }} href="#about">About</Button>
          <Button color="inherit" sx={{ color: 'black' }} href="#portfolio">Portfolio</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
