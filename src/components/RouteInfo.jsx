import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock  } from "react-icons/fa6";
import RouteItem from "./RouteItem";
import { LuDollarSign, LuCalendar } from "react-icons/lu";

function RouteInfo() {
    return (
        <div className="route-info">
            <RouteItem icono={<IoLocationOutline />} nombre={"Distancia total"} valor={"25 km aproximadamente"} />
            <RouteItem icono={<FaRegClock  />} nombre={"Tiempo de viaje"} valor={"35 - 45 minutos"} />
            <RouteItem icono={<LuDollarSign />} nombre={"Tarifa"} valor={"$15.00 MXN"} />
            <RouteItem icono={<LuCalendar />} nombre={"Horario de servicio"} valor={"5:00 AM - 10:00 PM"} />
        </div>
    )
}
export default RouteInfo;