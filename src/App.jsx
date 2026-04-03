import './App.css'
import DirectionSelector from './components/DirectionSelector';
import Footer from './components/Footer';
import Header from './components/Header';
import RouteInfo from './components/RouteInfo';
import RouteMap from './components/RouteMap';
import ScheduleSection from './components/ScheduleSection';
import StatsGrid from './components/StatsGrid';
import UnitsSection from './components/UnitsSection';


function App() {
  return (
    <>
      <Header />
      <main className='main-container'>
        <DirectionSelector />
        <StatsGrid />
        <UnitsSection />
        <RouteMap />
        <ScheduleSection />
        <RouteInfo />
      </main>
      <Footer />
    </>
  )
}

export default App
