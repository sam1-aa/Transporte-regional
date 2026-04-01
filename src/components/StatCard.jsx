function StatCard({ nombre, valor, colorT="" }) {
    return (
        <div className="stat-card">
            <p className="stat-label">{nombre}</p>
            <p className="stat-value" style={{ color:  colorT }}>{valor}</p>
        </div>
    )
}
export default StatCard;