/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";
//Map's styling
const defaultMapContainerStyle = {
  width: '50%',
  height: '50vh',
  borderRadius: '5px 5px 5px 5px',
  margin: 'auto',
};

//K2's coordinates -22.767406485409623, -47.39246826876674
const defaultMapCenter = {
  lat: -22.767406485409623,
  lng: -47.39246826876674
}

//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'roadmap',
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}

      >
        <Marker position={{
          lat: -22.76751,
          lng: -47.39280
        }} />
      </GoogleMap>
    </div>
  )
};

export { MapComponent };