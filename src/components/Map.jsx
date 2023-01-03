// eslint-disable-next-line no-unused-vars
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: -32.889076, lng: -68.839578
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyCET9XGvcR8GrLaItzphrFQEpXml0kbgDQ'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
