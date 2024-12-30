import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ width: '70%', margin: '20px auto', borderRadius: '15px', bgcolor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href="/" passHref style={{textDecoration: "none"}}>
          <Typography variant="h6" component="a" sx={{ color: 'black', textDecoration: 'none' }}>
            Kritan Bhurtyal
          </Typography>
        </Link>
        <Box>
          <Button color="inherit" sx={{ color: 'black' }} href="#about">About</Button>
          <Button color="inherit" sx={{ color: 'black' }} href="#portfolio">Portfolio</Button>
          <Button color="inherit" sx={{ color: 'black' }} href="#arcade">Arcade</Button>
          <Button color="inherit" sx={{ color: 'black' }} href="#links">Links</Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
