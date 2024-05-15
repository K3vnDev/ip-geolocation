import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

export function Map ({ position }) {
  return (
    <MapContainer
      className='map-wrapper'
      zoom={10}
      minZoom={2}
      maxZoom={17}
      center={position}
      maxBounds={[
        [-85.06, -180],
        [85.06, 180]
      ]}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} />
    </MapContainer>
  )
}
