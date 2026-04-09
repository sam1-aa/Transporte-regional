import StatCard from "./StatCard";

function StatsGrid({unidades}) {
    const total_unidades = unidades.length;
    const en_servicio = unidades.filter(n => n.estado === 'en-servicio').length;
    const en_base = unidades.filter(n => n.estado === 'en-base').length;
    return (

        <div className="stats-grid">
            <StatCard nombre={"Total de unidades"} valor={total_unidades} />
            <StatCard nombre={"En servicio"} valor={en_servicio} colorT={"var(--color-success)"} />
            <StatCard nombre={"En base"} valor={en_base} colorT={"var(--color-warning)"} />
            <StatCard nombre={"Proxima salida"} valor={"09:25"} />
        </div>
    )
}
export default StatsGrid;