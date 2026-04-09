import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

function DirectionSelector({ setDireccion, salida1, salida2 }) {
    const [activo, setActivo] = useState(true)

    return (
        <div className='direction-selector'>
              <button
        className={`direction-btn ${activo ? "active" : ""}`}
        onClick={() => {
          setActivo(true)
          setDireccion(salida1)
        }}
      >
        Altepexi <MdArrowRightAlt className='arrow' /> Tehuacán
      </button>
            <button
                className={`direction-btn ${!activo ? "active" : ""}`}
                onClick={() => {
                    setActivo(false)
                    setDireccion(salida2)
                }}
            >
                Tehuacán <MdArrowRightAlt className='arrow' /> Altepexi
            </button>
        </div >
    )
}
export default DirectionSelector;
