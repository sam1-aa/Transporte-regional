import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import { Polyline } from 'react-leaflet';
import { TbMapPin } from "react-icons/tb";

function RouteMap() {
    const [unidadSeleccionada, setUnidadSeleccionada] = useState(null);
    const ruta = [
        [18.4616, -97.3925],
        [18.4630, -97.3900],
        [18.4650, -97.3880],
        [18.4670, -97.3850]
    ];
    const iconoCamion = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61231.png',
        iconSize: [40, 40],       // tamaño
        iconAnchor: [20, 40],     // punto donde “toca” el mapa
    });

    // 🔴 AQUÍ VA unidades
    const [unidades, setUnidades] = useState([
        { id: 1, pos: [18.462, -97.39] },
        { id: 2, pos: [18.465, -97.38] }
    ]);

    const centro = [18.4616, -97.3925];

    return (

        <section className="route-map-section">
            <h2 className="section-title "><TbMapPin /> Mapa en tiempo real</h2>
            <div className="map-container">
                <MapContainer center={centro} zoom={15} className="map">

                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Polyline positions={ruta} />
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