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
          <Link href="/#about" passHref>
            <Button color="inherit" sx={{ color: 'black' }} component="a">About</Button>
          </Link>
          <Link href="/#portfolio" passHref>
            <Button color="inherit" sx={{ color: 'black' }} component="a">Portfolio</Button>
          </Link>
          <Link href="/#tech" passHref>
            <Button color="inherit" sx={{ color: 'black' }} component="a">Tech</Button>
          </Link>
          <Link href="/#links" passHref>
            <Button color="inherit" sx={{ color: 'black' }} component="a">Links</Button>
          </Link>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
