import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue, grey } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[800],
  '&:hover': {
    backgroundColor: grey[800],
  },
}));

const Banner = () => {
    return (
        <>
         <Container id="contBan">
            <div id="subTitle">
                <h2 id="sh2">The first high-end drone at an affordable price</h2>
                <ColorButton
        id="btnONW2"
        href="https://global.quadairdrone.com/#/en/checkout2?uid=136&oid=530&affid=1362&sub5=ts-3_of-130_net-15_ad-greycheckout0312_lt-hp_ci-13260110392_ai-125651620471_cr-523935550983_de-c_kw-quad%20air%20d*_geo-US&mvprm=sub5"
        >   
        ORDER NOW
          </ColorButton>
            </div>
         </Container>
        </>
    )
}

export default Banner;