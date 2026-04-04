import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import { Polyline } from 'react-leaflet';
import { TbMapPin } from "react-icons/tb";
import data from './route.json'

function AjustarVista({ ruta }) {
    const map = useMap();

    map.fitBounds(ruta);

    return null;
}

function RouteMap() {
    const [unidadSeleccionada, setUnidadSeleccionada] = useState(null);
    const ruta = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
  
    const iconoCamion = new L.Icon({
        // iconUrl: 'https://cdn-icons-png.flaticon.com/512/14703/14703667.png',
        // iconUrl: '   https://cdn-icons-png.flaticon.com/512/2503/2503549.png',
        // iconUrl: '   https://cdn-icons-png.flaticon.com/512/15441/15441176.png',
        iconUrl: '   https://cdn-icons-png.flaticon.com/512/3448/3448314.png ',
        iconSize: [40, 40],       // tamaño
        iconAnchor: [20, 40],     // punto donde “toca” el mapa
    });

    // 🔴 AQUÍ VA unidades
    const [unidades, setUnidades] = useState([
        { id: 1, pos: [18.4628, -97.3905] },
        { id: 2, pos: [ 18.37800597571403, -97.30043649673462] }
    ]);

    const centro = [18.4616, -97.3925];

    return (

        <section className="route-map-section">
            <h2 className="section-title "><TbMapPin /> Mapa en tiempo real</h2>
            <div className="map-container">
                <MapContainer center={centro} zoom={16} className="map">

                    <TileLayer 
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    //   url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    //   url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    // url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                    // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
                    />
                    <Polyline positions={ruta} />
                    <AjustarVista ruta={ruta} />
                    {/* 🔴 AQUÍ SE USAN */}
                    {unidades.map((u) => (
                        <Marker key={u.id} position={u.pos} icon={iconoCamion} >
                            <Popup>
                                <strong>{u.nombre}</strong><br />
                                Ruta: {u.ruta}<br />
                                ID: {u.id}
                            </Popup>

                        </Marker>
                    ))}

                </MapContainer>
            </div>
        </section>
    )
}
export default RouteMap;