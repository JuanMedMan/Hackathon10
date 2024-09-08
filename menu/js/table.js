const clases = [
    {
        nro: 1,
        unidad_didactica: "Front-End",
        fecha_clases: "2024-09-07",
        inicio: "7:30",
        fin: "10:30",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 50,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Septiembre",
        seccion: "A",
        periodo_academico: "2024-2",
        producto: "Curso Regular",
        codigo_alumno: "001",
        codigo_docente: "D01"
    },
    {
        nro: 2,
        unidad_didactica: "Back-End",
        fecha_clases: "2024-09-03",
        inicio: "10:00",
        fin: "13:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 60,
        moneda: "S/.",
        estado: "Pendiente",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Práctico",
        codigo_alumno: "002",
        codigo_docente: "D02"
    },
    {
        nro: 3,
        unidad_didactica: "Front-End",
        fecha_clases: "2024-09-03",
        inicio: "15:00",
        fin: "21:00",
        duracion_min: 360,
        duracion_horas: 6,
        tarifa: 50,
        moneda: "S/.",
        estado: "Pendiente",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Intensivo",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nro: 4,
        unidad_didactica: "Back-End",
        fecha_clases: "2024-09-05",
        inicio: "15:00",
        fin: "21:00",
        duracion_min: 360,
        duracion_horas: 6,
        tarifa: 60,
        moneda: "S/.",
        estado: "Pendiente",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Intensivo",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nro: 5,
        unidad_didactica: "Calculo",
        fecha_clases: "2024-09-05",
        inicio: "10:00",
        fin: "13:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 70,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Regular",
        codigo_alumno: "002",
        codigo_docente: "D02"
    }
];

function filtrarClases() {
    const year = document.getElementById("select-year").value;
    const month = document.getElementById("select-month").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    const monthNumber = new Date(`${month} 1, 2024`).getMonth() + 1;

    const clasesFiltradas = clases.filter(clase => {
        const fecha = new Date(clase.fecha_clases);
        const claseYear = fecha.getFullYear();
        const claseMonth = fecha.getMonth() + 1;

        if (!year && !month && !startDate && !endDate) return true;

        let cumpleFiltros = claseYear == year && claseMonth == monthNumber;

        if (startDate && new Date(clase.fecha_clases) < new Date(startDate)) {
            cumpleFiltros = false;
        }
        if (endDate && new Date(clase.fecha_clases) > new Date(endDate)) {
            cumpleFiltros = false;
        }

        return cumpleFiltros;
    });

    mostrarClasesEnTabla(clasesFiltradas);

    calcularResumen(clasesFiltradas);
}

function mostrarClasesEnTabla(clasesFiltradas) {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";

    if (clasesFiltradas.length === 0) {
        const row = tbody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 14;
        cell.textContent = "No hay datos disponibles.";
        return;
    }

    clasesFiltradas.forEach((clase) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${clase.nro}</td>
            <td>${clase.unidad_didactica}</td>
            <td>${clase.fecha_clases}</td>
            <td>${clase.inicio}</td>
            <td>${clase.fin}</td>
            <td>${clase.duracion_min}</td>
            <td>${clase.duracion_horas}</td>
            <td>${clase.tarifa}</td>
            <td>${clase.moneda}</td>
            <td>${clase.estado}</td>
            <td>${clase.mes_pagado}</td>
            <td>${clase.seccion}</td>
            <td>${clase.periodo_academico}</td>
            <td>${clase.producto}</td>
        `;
    });
}

function calcularResumen(clasesFiltradas) {
    let totalMin = 0;
    let totalHours = 0;
    let totalTariff = 0;

    clasesFiltradas.forEach((clase) => {
        totalMin += clase.duracion_min;
        totalHours += clase.duracion_horas;
        totalTariff += clase.duracion_horas * clase.tarifa;
    });

    document.getElementById("total-min").textContent = totalMin;
    document.getElementById("total-hours").textContent = totalHours;
    document.getElementById("total-tariff").textContent = totalTariff;
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarClasesEnTabla(clases);
    calcularResumen(clases);
});

document.getElementById("filter-button").addEventListener("click", filtrarClases);