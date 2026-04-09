import { useState } from 'react';
import './App.css'
import DirectionSelector from './components/DirectionSelector';
import Footer from './components/Footer';
import Header from './components/Header';
import RouteInfo from './components/RouteInfo';
import RouteMap from './components/RouteMap';
import ScheduleSection from './components/ScheduleSection';
import StatsGrid from './components/StatsGrid';
import UnitsSection from './components/UnitsSection';

const unidadesData = [
  { id: 1, numero: 'ALT-01', conductor: 'Juan Pérez', estado: 'en-servicio', ubicacion: 'En camino a Tehuacán', ultimaSalida: '08:30' },
  { id: 2, numero: 'ALT-02', conductor: 'María García', estado: 'en-servicio', ubicacion: 'En Altepexi', ultimaSalida: '09:00' },
  { id: 3, numero: 'ALT-03', conductor: 'Carlos López', estado: 'en-base', ubicacion: 'Terminal Tehuacán', ultimaSalida: '07:45' },
  { id: 4, numero: 'ALT-04', conductor: 'Ana Martínez', estado: 'en-servicio', ubicacion: 'Llegando a Altepexi', ultimaSalida: '08:45' },
  { id: 5, numero: 'ALT-05', conductor: 'Roberto Sánchez', estado: 'fuera-servicio', ubicacion: 'En mantenimiento', ultimaSalida: '-' },
  { id: 6, numero: 'ALT-06', conductor: 'Laura Hernández', estado: 'en-servicio', ubicacion: 'En camino a Altepexi', ultimaSalida: '09:15' },
]

const salidasAltepexi = [
  { id: 1, hora: '09:30', unidad: 'ALT-02', estado: 'proximo', tipo: 'Combi', ocupacion: 'normal' },
  { id: 2, hora: '10:00', unidad: 'ALT-04', estado: 'programado', tipo: 'Urbano', ocupacion: 'vacia' },
  { id: 3, hora: '10:30', unidad: 'ALT-01', estado: 'programado', tipo: 'Van', ocupacion: 'vacia' },
  { id: 4, hora: '11:00', unidad: 'ALT-06', estado: 'programado', tipo: 'Combi', ocupacion: 'vacia' },
  { id: 5, hora: '11:30', unidad: 'ALT-03', estado: 'programado', tipo: 'Van', ocupacion: 'vacia' },
]

const salidasTehuacan = [
  { id: 1, hora: '09:15', unidad: 'ALT-06', estado: 'saliendo', tipo: 'Combi', ocupacion: 'llena' },
  { id: 2, hora: '09:45', unidad: 'ALT-01', estado: 'proximo', tipo: 'Van', ocupacion: 'normal' },
  { id: 3, hora: '10:15', unidad: 'ALT-02', estado: 'programado', tipo: 'Combi', ocupacion: 'vacia' },
  { id: 4, hora: '10:45', unidad: 'ALT-04', estado: 'programado', tipo: 'Urbano', ocupacion: 'vacia' },
  { id: 5, hora: '11:15', unidad: 'ALT-03', estado: 'programado', tipo: 'Van', ocupacion: 'vacia' },
]


function App() {
  const [tema, setTema] = useState("claro");

  const [direccion, setDireccion] = useState(salidasAltepexi)
  return (
    <>
      <Header tema={tema} setTema={setTema} />
      <main className='main-container'>
        <DirectionSelector setDireccion={setDireccion} salida1={salidasAltepexi} salida2={salidasTehuacan} />
        <StatsGrid unidades={unidadesData} />
        <UnitsSection unidades={unidadesData} />
        <RouteMap tema={tema} />
        <ScheduleSection unidades={direccion} />
        <RouteInfo />
      </main>
      <Footer />
    </>
  )
}

export default App
