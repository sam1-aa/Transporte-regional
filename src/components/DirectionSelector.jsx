import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

function DirectionSelector() {
    const [activo, setActivo] = useState(true)

    return (
        <div className='direction-selector'>
            <button className={`direction-btn ${activo ? "active" : ""}`} onClick={() => { setActivo(true) }}>Altepexi <MdArrowRightAlt className='arrow' /> Tehuacán</button>
            <button className={`direction-btn ${activo ? "" : "active"}`} onClick={() => { setActivo(false) }}>Tehuacán <MdArrowRightAlt className='arrow' /> Altepexi</button>
        </div>
    )
}
export default DirectionSelector;
