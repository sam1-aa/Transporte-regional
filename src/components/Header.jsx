import { IoInvertMode, IoInvertModeOutline } from "react-icons/io5";
import { useEffect, useState } from 'react'

function Header({tema, setTema}) {
    
    useEffect(() => {
        document.body.className = tema;
    }, [tema])

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-title">

                    <h1>Ruta Altepexi - Tehuacán</h1>
                    <span className="route-badge">Transporte Regional</span>
                    <span className="route-badge" onClick={() => { setTema(tema === "claro" ? "oscuro" : "claro") }}>
                        {tema === "claro" ? <IoInvertModeOutline /> : <IoInvertMode />}
                    </span>
                </div>
            </div>
        </header>
    )
}
export default Header;