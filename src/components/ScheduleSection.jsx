import { FaRegClock } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import ScheduleItem from "./ScheduleItem";
function ScheduleSection({ unidades }) {
    return (
        <section className="schedule-section">
            <h2 className="section-title">
                <FaRegClock /> Proximas Salidas: Altepexi <MdArrowRightAlt /> Tehuacán
            </h2>
            <p className="schedule-frecuencia">Frecuencia aproximada: <strong>5-10 min</strong> en hora pico, <strong>10 min</strong> en hora normal.</p>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Hora salida</th>
                        <th>Unidad</th>
                        <th>Asientos</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {unidades.map(unidad =>
                    (
                        <ScheduleItem key={unidad} unidad={unidad} />
                    )
                    )}
                </tbody>
            </table>
        </section >
    )
}
export default ScheduleSection;