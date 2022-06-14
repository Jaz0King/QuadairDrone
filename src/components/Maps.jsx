import React from "react";
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import '../App.css';



const containerStyle = {
  width: '800px',
  height: '400px'
};

const Maps = ({setLat, setLng}) => {  
  let lati = Number(setLat)  
  let longi = Number(setLng)
  const center = {
    lat: lati,
    lng: longi
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCDrz0XxLtJGTE3Oq899wtT6boFJI-Eat0"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div id="mapContainer">
      <GoogleMap
        id="map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
    <Marker>         
    <RoomTwoToneIcon center={center} />
    </Marker> 
      
      </GoogleMap>
     </div>
  ) : <></>
}

export default React.memo(Maps)