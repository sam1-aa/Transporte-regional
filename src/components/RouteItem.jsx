function RouteItem({ icono, nombre, valor }) {
    return (
        <div className="route-info-item">
            <div className="route-info-icon">
                {icono}
            </div>
            <div className="route-info-content">
                <h4 className="route-info-content-label">{nombre}</h4>
                <p className="route-info-content-value">{valor}</p>
            </div>
        </div>
    )
}
export default RouteItem;