import React, { useState, useEffect } from 'react';
import './Switch.css'; // Asegúrate de tener un archivo CSS para estilizar el interruptor

const Switch = () => {
    const [isChecked, setChecked] = useState(true);

    useEffect(() => {
        // Cambia el fondo del body cuando el componente se monta
        document.body.style.backgroundColor = isChecked ? "rgb(233, 232, 231)" : "#000000";
    }, [isChecked]);

    const handleToggle = () => {
        setChecked(!isChecked);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
    );
};

export default Switch;
