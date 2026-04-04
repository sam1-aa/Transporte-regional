import { FaRegClock } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
function ScheduleSection() {
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
                    <tr >
                        <td>
                            <span className="departure-time">9:15</span>
                        </td>
                        <td>ALT-01</td>
                        <td>15 asientos</td>
                        <td>
                            <span className="departure-status saliendo">Saliendo</span>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <span className="departure-time">9:25</span>
                        </td>
                        <td>ALT-03</td>
                        <td>13 asientos</td>
                        <td>
                            <span className="departure-status proximo">próximo</span>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <span className="departure-time">9:35</span>
                        </td>
                        <td>ALT-04</td>
                        <td>15 asientos</td>
                        <td>
                            <span className="departure-status programado">Programado</span>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <span className="departure-time">9:35</span>
                        </td>
                        <td>ALT-02</td>
                        <td>15 asientos</td>
                        <td>
                            <span className="departure-status programado">programado</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section >
    )
}
export default ScheduleSection;