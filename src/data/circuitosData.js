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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Monte_Carlo_Formula_1_track_map.svg"
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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Silverstone_Circuit_2020_layout.png"
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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Circuit_Spa_2018.png"
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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Monza_track_map.svg"
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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/23/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28Interlagos%29.svg"
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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Yas_Marina_Circuit_2021_layout.svg"
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
    imagen: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Suzuka_circuit_map--2005.svg"
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
