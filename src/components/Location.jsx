import React from "react";
import { useState }  from "react";
import Maps from "./Maps.jsx"
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
 
const Location = () => {
  const [longitude, setLng] = useState("");
  const [latitude, setLat] = useState("");

  if(!navigator.geolocation) {
    alert('Geolocation not supported in your browser');
    return;
  }

  function getLocation(){
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lati = position.coords.latitude;
      console.log(lati)
      setLat(lati);
      
      const longi = position.coords.longitude;
      console.log(longi)
      setLng(longi);
     
    },
    (error)=> {
      alert ("Error loading position")
    }
  )
}
   console.log(latitude)
  return (
    <div id="locationContainer">
      <div id="subTitle2">
      <h4 id="sh4">SEARCH IN YOUR LOCATION</h4>
      <ColorButton onClick={getLocation}>
        SEARCH 
      </ColorButton>
      </div>
      <Maps setLat={latitude} setLng={longitude}/>
    </div>
  );
}

export default Location;