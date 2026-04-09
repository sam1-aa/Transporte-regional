import { HiOutlineSquares2X2 } from "react-icons/hi2";
import UnitCard from "./UnitCard";
function UnitsSection( {unidades}) {
    return (
        <section className="units-section">
            <h2 className="section-title">
                <HiOutlineSquares2X2 />
                Unidades
            </h2>
            <div className="units-grid">
                {unidades.map(unidad=>(
                    <UnitCard key={unidad.id} unidad={unidad}/>
                ))}
            </div>
        </section>
    )
}
export default UnitsSection;