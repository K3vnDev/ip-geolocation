import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import markerIcon from '../assets/marker-icon-2x.png'
import L from 'leaflet'

export function Map ({ position }) {
  const icon = L.icon({
    iconUrl: markerIcon,
    iconSize: [20]
  })

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
      <Marker position={position} icon={icon} />
    </MapContainer>
  )
}
