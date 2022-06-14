import React from "react";
import { useState }  from "react";
import Maps from "./Maps.jsx"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue, grey } from '@mui/material/colors';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCDrz0XxLtJGTE3Oq899wtT6boFJI-Eat0");

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
  const [address, setAddress] = useState("");

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

      console.log(position)
     
    },
    (error)=> {
      alert ("Error loading position")
    }
  )
  }

  Geocode.fromLatLng(`${latitude}`, `${longitude}`).then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
      setAddress(address);
    },
    (error) => {
      console.error(error);
    }
  );
  


   console.log(latitude)
  return (
    <div id="locationContainer">
      <div id="subTitle2">
        <h2 id="sh4">The firth high-end drone at an afforable price, now in:</h2>
        <h6 id="sh5"> {address}</h6>
        <ColorButton id="btnSearch" onClick={getLocation}>
          SEND TO 
        </ColorButton>
      </div>
      <Maps setLat={latitude} setLng={longitude}/>
    </div>
  );
}

export default Location;