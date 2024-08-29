import React from "react";

const Hours = () => {
    // Lista de horarios del refugio
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "9:00", close: "20:00" },
        { day: "Sunday", open: "9:00", close: "20:00" },
    ];

    // Obtener el nombre del día actual
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    // Obtener las horas correspondientes al día de hoy
    const todayHours = shelterHours.find((day) => day.day === today);

    // Renderizado del componente
    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            {todayHours ? (
                <p>{todayHours.day}: {todayHours.open} - {todayHours.close}</p>
            ) : (
                <p>Closed</p>
            )}
        </div>
    );
};

export default Hours;
