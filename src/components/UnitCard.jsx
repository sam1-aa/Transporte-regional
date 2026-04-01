function UnitCard() {
    return (
        <div className="unit-card">
            <div className="unit-header">
                <span className="unit-number">ALT-01</span>
                <span className="unit-status en-servicio">
                    <span className="status-indicator"></span>
                    En Servicio
                </span>
            </div>
            <div className="unit-details">
                <div className="unit-detail">
                    <span className="label">Conductor</span>
                    <span className="value">Luis Pineda</span>
                </div>
                <div className="unit-detail">
                    <span className="label">Ubicación</span>
                    <span className="value">Saliendo de Altepexi</span>
                </div>
                <div className="unit-detail">
                    <span className="label">Última salida</span>
                    <span className="value">9:15</span>
                </div>
            </div>
        </div>
    )

}
export default UnitCard;