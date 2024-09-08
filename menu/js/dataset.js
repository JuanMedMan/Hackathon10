// Dataset de cursos asignados
const cursosAsignados = [
    {
        nombre_curso: "Front-End",
        horario: "7:30 a 10:30",
        fecha: "2024-09-07",
        tipo_clase: "Teórica",
        periodo_academico: "2024-2",
        seccion: "A",
        codigo_alumno: "001",
        codigo_docente: "D01"
    },
    {
        nombre_curso: "Back-End",
        horario: "10:00 a 13:00",
        fecha: "2024-09-03",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "002",
        codigo_docente: "D02"
    },
    {
        nombre_curso: "Front-End",
        horario: "3:00 a 9:00",
        fecha: "2024-09-03",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nombre_curso: "Back-End",
        horario: "3:00 a 9:00",
        fecha: "2024-09-05",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nombre_curso: "Calculo",
        horario: "10:00 a 13:00",
        fecha: "2024-09-05",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "002",
        codigo_docente: "D02"
    }
];

// Función para formatear la fecha y obtener día de la semana y día del mes
function obtenerDiaSemanaYFecha(fecha) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const date = new Date(Date.UTC(...fecha.split('-').map((part, index) => index === 1 ? part - 1 : part)));
    const diaSemana = dias[date.getUTCDay()];
    const diaMes = date.getUTCDate();
    return `${diaSemana} ${diaMes}`;
}

// Genera las fechas desde el lunes hasta el sábado de una semana específica
function generarSemana(primeraFecha) {
    const diasSemana = [];
    const startDate = new Date(Date.UTC(...primeraFecha.split('-').map((part, index) => index === 1 ? part - 1 : part)));

    for (let i = 0; i < 6; i++) {
        const dia = new Date(startDate);
        dia.setUTCDate(startDate.getUTCDate() + i);
        const formattedDate = `${dia.getUTCFullYear()}-${String(dia.getUTCMonth() + 1).padStart(2, '0')}-${String(dia.getUTCDate()).padStart(2, '0')}`;
        diasSemana.push({ formattedDate, display: obtenerDiaSemanaYFecha(formattedDate) });
    }

    return diasSemana;
}

// Agrupa los cursos por fecha
function agruparCursosPorFecha() {
    const cursosPorFecha = {};
    cursosAsignados.forEach(curso => {
        const diaYFecha = obtenerDiaSemanaYFecha(curso.fecha);
        if (!cursosPorFecha[diaYFecha]) {
            cursosPorFecha[diaYFecha] = [];
        }
        cursosPorFecha[diaYFecha].push(curso);
    });
    return cursosPorFecha;
}

// Mostrar los cursos en el horario agrupados por fecha
function mostrarCursos() {
    const scheduleList = document.getElementById("schedule-list");
    const cursosPorFecha = agruparCursosPorFecha();
    const semana = generarSemana("2024-09-02");

    semana.forEach(dia => {
        const li = document.createElement("li");
        li.innerHTML = `${dia.display}: <span></span>`;
        if (cursosPorFecha[dia.display]) {
            cursosPorFecha[dia.display].forEach(curso => {
                const cursoInfo = document.createElement("span");
                cursoInfo.innerText = `${curso.nombre_curso} (${curso.horario}) `;
                li.appendChild(cursoInfo);
            });
        }
        scheduleList.appendChild(li);
    });
}

// Ejecutar la función al cargar la página
mostrarCursos();