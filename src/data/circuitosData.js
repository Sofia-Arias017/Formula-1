export const circuitos = [
    {
    nombre: "Circuito de Mónaco",
    pais: "Mónaco",
    longitud_km: 3.34,
    vueltas: 78,
    descripcion: "Uno de los circuitos más prestigiosos y difíciles del calendario...",
    record_vuelta: { tiempo: "1:10.166", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
        { temporada: 2021, piloto: 1 },
        { temporada: 2022, piloto: 2 },
        { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://lebalap.academy/wp-content/uploads/2021/02/esquema-circuito-de-monaco.png"
    },
    {
    nombre: "Silverstone",
    pais: "Reino Unido",
    longitud_km: 5.89,
    vueltas: 52,
    descripcion: "Uno de los circuitos más rápidos del calendario...",
    record_vuelta: { tiempo: "1:27.097", piloto: "Max Verstappen", año: 2020 },
    ganadores: [
        { temporada: 2021, piloto: 3 },
        { temporada: 2022, piloto: 5 },
        { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit"
    },
    {
    nombre: "Circuito de Spa-Francorchamps",
    pais: "Bélgica",
    longitud_km: 7.00,
    vueltas: 44,
    descripcion: "Famoso por la curva Eau Rouge y la larga recta de Kemmel...",
    record_vuelta: { tiempo: "1:46.286", piloto: "Valtteri Bottas", año: 2018 },
    ganadores: [
        { temporada: 2021, piloto: 1 },
        { temporada: 2022, piloto: 1 },
        { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://lebalap.academy/wp-content/uploads/2021/02/image-5.png"
    },
    {
    nombre: "Circuito de Monza",
    pais: "Italia",
    longitud_km: 5.79,
    vueltas: 53,
    descripcion: "Conocido como 'El Templo de la Velocidad'...",
    record_vuelta: { tiempo: "1:21.046", piloto: "Rubens Barrichello", año: 2004 },
    ganadores: [
        { temporada: 2021, piloto: 2 },
        { temporada: 2022, piloto: 1 },
        { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://images.daznservices.com/di/library/DAZN_News/eb/98/monza-gp-italia-gran-premio-de-italia-formula-1-f1_6ig2wzyt5ppl1i7uyv8q0dxpg.jpg?t=314989067"
    },
    {
    nombre: "Interlagos",
    pais: "Brasil",
    longitud_km: 4.31,
    vueltas: 71,
    descripcion: "Interlagos es un circuito legendario con cambios de elevación...",
    record_vuelta: { tiempo: "1:10.540", piloto: "Valtteri Bottas", año: 2018 },
    ganadores: [
        { temporada: 2021, piloto: 3 },
        { temporada: 2022, piloto: 1 },
        { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://lebalap.academy/wp-content/uploads/2021/02/image-8.png"
    },
    {
    nombre: "Circuito de Yas Marina",
    pais: "Emiratos Árabes Unidos",
    longitud_km: 5.28,
    vueltas: 58,
    descripcion: "Ubicado en Abu Dhabi, es famoso por su espectacular carrera nocturna.",
    record_vuelta: { tiempo: "1:39.283", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
        { temporada: 2021, piloto: 1 },
        { temporada: 2022, piloto: 1 },
        { temporada: 2023, piloto: 3 }
    ],
    imagen: "https://lebalap.academy/wp-content/uploads/2021/02/image-1-4.png"
    },
    {
    nombre: "Circuito de Suzuka",
    pais: "Japón",
    longitud_km: 5.81,
    vueltas: 53,
    descripcion: "Un circuito desafiante con un diseño en forma de ocho...",
    record_vuelta: { tiempo: "1:30.983", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
        { temporada: 2021, piloto: 1 },
        { temporada: 2022, piloto: 1 },
        { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://images.daznservices.com/di/library/DAZN_News/8c/b9/suzuka-f1_nd5l87nqmsbrzbrq5j9j3obw.jpg?t=-1548675717"
    }
];

export const vehiculos = [
    {
    equipo: "Red Bull Racing",
    modelo: "RB20",
    motor: "Honda",
    velocidad_maxima_kmh: 360,
    aceleracion_0_100: 2.5,
    pilotos: [1, 2],
    rendimiento: {
        conduccion_normal: {
        velocidad_promedio_kmh: 320,
        consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
        desgaste_neumaticos: { seco: 1.5, lluvioso: 0.8, extremo: 2.5 }
        },
        conduccion_agresiva: {
        velocidad_promedio_kmh: 340,
        consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 3.0 },
        desgaste_neumaticos: { seco: 2.2, lluvioso: 1.2, extremo: 3.5 }
        },
        ahorro_combustible: {
        velocidad_promedio_kmh: 300,
        consumo_combustible: { seco: 1.6, lluvioso: 1.8, extremo: 2.1 },
        desgaste_neumaticos: { seco: 1.0, lluvioso: 0.5, extremo: 1.8 }
        }
    },
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/89/Max_Verstappen_2023_Austria_FP2_%28cropped%29.jpg"
    },
    {
    equipo: "Mercedes-AMG Petronas",
    modelo: "W15",
    motor: "Mercedes",
    velocidad_maxima_kmh: 355,
    aceleracion_0_100: 2.6,
    pilotos: [3, 4],
    rendimiento: {
        conduccion_normal: {
        velocidad_promedio_kmh: 315,
        consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
        desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
        },
        conduccion_agresiva: {
        velocidad_promedio_kmh: 335,
        consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
        desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
        },
        ahorro_combustible: {
        velocidad_promedio_kmh: 295,
        consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
        desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
        }
    },
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/87/Lewis_Hamilton_2022_Imola.jpg"
    }
];
