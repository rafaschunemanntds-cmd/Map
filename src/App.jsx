import s from './App.module.css'
import { Menu } from './components/menu'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function App() {
  
  const position = [-25.4249598, -49.2748779]
  return (
    <>
      <Menu />
      <div className={s.wrapHome}>
        <MapContainer className={s.map} center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>,
      </div>
    </>
  )
}

export default App
