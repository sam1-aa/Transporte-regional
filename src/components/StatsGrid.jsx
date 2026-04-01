import StatCard from "./StatCard";

function StatsGrid() {
    return (

        <div className="stats-grid">
            <StatCard nombre={"Total de unidades"} valor={1} />
            <StatCard nombre={"En servicio"} valor={2} colorT={"var(--color-success)"} />
            <StatCard nombre={"En base"} valor={0} colorT={"var(--color-warning)"} />
            <StatCard nombre={"Proxima salida"} valor={"10:45"} />
        </div>
    )
}
export default StatsGrid;