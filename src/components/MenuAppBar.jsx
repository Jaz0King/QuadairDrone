import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { blue, grey, red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[800],
  '&:hover': {
    backgroundColor: grey[800],
  },
}));

const ColorButtons = styled(Nav)(({
  color: grey[500],
  '&:hover': {
    color: red[400],
  },
}));

const MenuAppBar = () => {
  
  return (
    <>
    <Navbar id="navbar"  expand="lg" >
  <Container>
    <Navbar.Brand href="#home" id="brand">
    <img className="logo" src="https://d1e70rtlfmc4ez.cloudfront.net/drne/Logo.png" alt="logo"></img>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle" color="secondary"/>
    <Navbar.Collapse className="justify-content-end">
      <Nav>
      <Nav.Item>
          <ColorButtons href="/home" id="btn1">QUADAIR DRONE</ColorButtons>
        </Nav.Item>
      <Nav.Item>
          <ColorButtons href="/features" id="btn2">FEATURES</ColorButtons>
        </Nav.Item>
        <Nav.Item>
          <ColorButtons href="/reviews" id="btn3">REVIEWS</ColorButtons>
        </Nav.Item>
        <ColorButton
        id="btnONW"
        >
        <Link 
        id="link"
        target="_black"
        color="inherit"
        underline="none"
        href="https://global.quadairdrone.com/#/en/checkout2?uid=136&oid=530&affid=1362&sub5=ts-3_of-130_net-15_ad-greycheckout0312_lt-hp_ci-13260110392_ai-125651620471_cr-523935550983_de-c_kw-quad%20air%20d*_geo-US&mvprm=sub5">      
        
        </Link>
        ORDER NOW
          </ColorButton>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  );
};
export default MenuAppBar;
