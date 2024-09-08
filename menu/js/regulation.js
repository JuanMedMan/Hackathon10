const reglamentos = [
    {
        categoria: "Reglamento",
        titulo: "Linamientos de Conflictos de Interes",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis alias, placeat asperiores ipsum inventore dicta fugit est deleniti totam eligendi. Explicabo quod sequi cumque dolores qui eaque atque ab.",
        fecha_inicio_valido: "2024-01-01",
        fecha_fin: "2024-12-31"
    },
    {
        categoria: "Reglamento",
        titulo: "Linamientos de Donaciones, Auspicios y Patrocinios",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis alias, placeat asperiores ipsum inventore dicta fugit est deleniti totam eligendi. Explicabo quod sequi cumque dolores qui eaque atque ab.",
        fecha_inicio_valido: "2024-03-01",
        fecha_fin: "2024-09-31"
    },
    {
        categoria: "Reglamento",
        titulo: "Linamientos de Regalos y Atenciones",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis alias, placeat asperiores ipsum inventore dicta fugit est deleniti totam eligendi. Explicabo quod sequi cumque dolores qui eaque atque ab.",
        fecha_inicio_valido: "2024-05-01",
        fecha_fin: "2024-10-31"
    },
    {
        categoria: "Guías",
        titulo: "Protocolo de atención de denuncias",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis alias, placeat asperiores ipsum inventore dicta fugit est deleniti totam eligendi. Explicabo quod sequi cumque dolores qui eaque atque ab.",
        fecha_inicio_valido: "2024-02-01",
        fecha_fin: "2024-12-31"
    },
    {
        categoria: "Guías",
        titulo: "Objetivos y metas de seguridad y salud en el trabajo",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis alias, placeat asperiores ipsum inventore dicta fugit est deleniti totam eligendi. Explicabo quod sequi cumque dolores qui eaque atque ab.",
        fecha_inicio_valido: "2024-06-01",
        fecha_fin: "2024-12-31"
    },
    {
        categoria: "Guías",
        titulo: "Guía de evaluación docente 360 - Formación Continua",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis alias, placeat asperiores ipsum inventore dicta fugit est deleniti totam eligendi. Explicabo quod sequi cumque dolores qui eaque atque ab.",
        fecha_inicio_valido: "2024-04-01",
        fecha_fin: "2024-09-30"
    }
];

function filtrarReglamentos() {
    const today = new Date();
    const reglamentosContainer = document.getElementById('reglamentos-container');
    const guiasContainer = document.getElementById('guias-container');
    
    reglamentosContainer.innerHTML = '';
    guiasContainer.innerHTML = '';

    reglamentos.forEach(reglamento => {
        const fechaInicio = new Date(reglamento.fecha_inicio_valido);
        const fechaFin = new Date(reglamento.fecha_fin);
        
        console.log(`Hoy: ${today.toDateString()}`);
        console.log(`Inicio: ${fechaInicio.toDateString()}`);
        console.log(`Fin: ${fechaFin.toDateString()}`);
        
        if (today >= fechaInicio && today <= fechaFin) {
            const card = document.createElement('div');
            card.className = 'content-card';

            card.innerHTML = `
                <h5>${reglamento.titulo}</h5>
                <p>${reglamento.descripcion}</p>
                <div>
                    <a href="#">Previsualizar</a> <a href="#">Descargar</a>
                </div>
            `;
            
            if (reglamento.categoria === "Reglamento") {
                reglamentosContainer.appendChild(card);
            } else if (reglamento.categoria === "Guías") {
                guiasContainer.appendChild(card);
            }
        }
    });
}

filtrarReglamentos();