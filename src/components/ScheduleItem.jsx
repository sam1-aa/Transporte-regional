function ScheduleItem({ unidad }) {

    return (
        <tr >
            <td>
                <span className="departure-time">{unidad.hora || "_"}</span>
            </td>
            <td>{unidad.unidad}</td>
            <td>{unidad.ocupacion}</td>
            <td>
                <span className={`departure-status ${unidad.estado}`}>{unidad.estado}</span>
            </td>
        </tr>
    )
}
export default ScheduleItem;