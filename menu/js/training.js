const cursos = [
    {
        tipo: "Ruta Formativa",
        titulo: "Herramientas virtuales participativas para la enseñanza",
        area: "Área 1",
        fecha_inicio: "2024-08-01",
        fecha_fin: "2024-12-01",
        descripcion: "Curso sobre herramientas virtuales para mejorar la enseñanza.",
        tipo_insignia: "Insignia TICs",
        foto: "img/curse.jpg",
    },
    {
        tipo: "Ruta Formativa",
        titulo: "Módulo 5: Diseño II: Variables y patrones",
        area: "Área 2",
        fecha_inicio: "2024-09-01",
        fecha_fin: "2024-11-30",
        descripcion: "Curso avanzado en diseño y patrones de programación.",
        tipo_insignia: "Insignia Introducción a la investigación aplicada",
        foto: "img/curse.jpg",
    },
    {
        tipo: "Ruta Formativa",
        titulo: "Manejo de conflictos en el aula",
        area: "Área 3",
        fecha_inicio: "2024-10-01",
        fecha_fin: "2024-12-15",
        descripcion: "Curso para gestionar y resolver conflictos en el entorno educativo.",
        tipo_insignia: "Insignia Clima en el aula",
        foto: "img/curse.jpg",
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const inputBuscar = document.querySelector('.inputs input[type="text"]');
    const selectArea = document.querySelector('.inputs select:nth-of-type(1)');
    const selectInsignia = document.querySelector('.inputs select:nth-of-type(2)');
    const coursesContainer = document.querySelector('.courses');

    function renderCourses(filteredCourses) {
        coursesContainer.innerHTML = '';
        filteredCourses.forEach(curso => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            courseCard.innerHTML = `
                <img src="${curso.foto}" alt="${curso.titulo}">
                <h5>${curso.titulo}</h5>
                <p>${curso.tipo_insignia}</p>
                <a href="#" class="btn">Ver curso</a>
            `;
            coursesContainer.appendChild(courseCard);
        });
    }

    function filterCourses() {
        const searchValue = inputBuscar.value.toLowerCase();
        const selectedArea = selectArea.value;
        const selectedInsignia = selectInsignia.value;

        const filteredCourses = cursos.filter(curso => {
            return (!searchValue || curso.titulo.toLowerCase().includes(searchValue)) &&
                   (!selectedArea || curso.area === `Área ${selectedArea}`) &&
                   (!selectedInsignia || curso.tipo_insignia.toLowerCase().includes(selectedInsignia.toLowerCase()));
        });

        renderCourses(filteredCourses);
    }

    inputBuscar.addEventListener('input', filterCourses);
    selectArea.addEventListener('change', filterCourses);
    selectInsignia.addEventListener('change', filterCourses);

    renderCourses(cursos);
});