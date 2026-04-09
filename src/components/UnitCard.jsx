function UnitCard({ unidad }) {
    const estadoTexto = (estado) => {

        switch (estado) {
            case "en-base":
                return "En Base";

            case "en-servicio":
                return "En Servicio";

            default:
                return "Fuera de Servicio";
        }
    }

    return (
        <>

            <div className="unit-card">
                <div className="unit-header">
                    <span className="unit-number">{unidad.numero}</span>
                    <span className={`unit-status ${unidad.estado}`}>
                        <span className="status-indicator"></span>
                        {estadoTexto(unidad.estado)}
                    </span>
                </div>
                <div className="unit-details">
                    <div className="unit-detail">
                        <span className="label">Conductor</span>
                        <span className="value">{unidad.conductor}</span>
                    </div>
                    <div className="unit-detail">
                        <span className="label">Ubicación</span>
                        <span className="value">{unidad.ubicacion}</span>
                    </div>
                    <div className="unit-detail">
                        <span className="label">Última salida</span>
                        <span className="value">{unidad.ultimaSalida}</span>
                    </div>
                </div>
            </div>
        </>
    )

}
export default UnitCard;