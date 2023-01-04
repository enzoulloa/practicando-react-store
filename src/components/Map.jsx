import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    // lat: -32.889076, lng: -68.839578
    lat: data.lat, lng: data.lng
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyCET9XGvcR8GrLaItzphrFQEpXml0kbgDQ'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
