const vehiculos = [
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
    imagen: "https://cdn-5.motorsport.com/images/amp/YpN4KgW0/s1200/red-bull-racing-rb16-1.webp"
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
    imagen: "https://cdn.houseofmodelcars.com/images/Mercedes_AMG_Petronas_F1_Lewis_Hamilton_110210144_13154012138756656Mercedes_AMG_Petronas_F1_Lewis_Hamilton_110210144_Houseofmodelcars.jpg"
    },
    {
    equipo: "Ferrari",
    modelo: "SF-24",
    motor: "Ferrari",
    velocidad_maxima_kmh: 350,
    aceleracion_0_100: 2.6,
    pilotos: [5, 6],
    rendimiento: {
        conduccion_normal: {
        velocidad_promedio_kmh: 310,
        consumo_combustible: { seco: 2.0, lluvioso: 2.3, extremo: 2.6 },
        desgaste_neumaticos: { seco: 1.7, lluvioso: 1.0, extremo: 2.7 }
        },
        conduccion_agresiva: {
        velocidad_promedio_kmh: 330,
        consumo_combustible: { seco: 2.5, lluvioso: 2.7, extremo: 3.1 },
        desgaste_neumaticos: { seco: 2.4, lluvioso: 1.5, extremo: 3.6 }
        },
        ahorro_combustible: {
        velocidad_promedio_kmh: 290,
        consumo_combustible: { seco: 1.8, lluvioso: 2.0, extremo: 2.3 },
        desgaste_neumaticos: { seco: 1.2, lluvioso: 0.7, extremo: 2.0 }
        }
    },
    imagen: "https://bucket.carmodel.com/images/cm-lg/180397_2-3.jpg?_gl=1*1u9a8qv*_up*MQ..*_ga*MTAwODE5NjU2MS4xNzQ2MjAxOTU1*_ga_1T6QJ9R7WS*MTc0NjIwMTk1NC4xLjAuMTc0NjIwMTk1NC4wLjAuMA.."
    },
    {
    equipo: "McLaren",
    modelo: "MCL60",
    motor: "Mercedes",
    velocidad_maxima_kmh: 345,
    aceleracion_0_100: 2.7,
    pilotos: [7, 8],
    rendimiento: {
        conduccion_normal: {
        velocidad_promedio_kmh: 305,
        consumo_combustible: { seco: 2.1, lluvioso: 2.3, extremo: 2.7 },
        desgaste_neumaticos: { seco: 1.8, lluvioso: 1.1, extremo: 2.8 }
        },
        conduccion_agresiva: {
        velocidad_promedio_kmh: 325,
        consumo_combustible: { seco: 2.7, lluvioso: 2.9, extremo: 3.3 },
        desgaste_neumaticos: { seco: 2.5, lluvioso: 1.6, extremo: 3.9 }
        },
        ahorro_combustible: {
        velocidad_promedio_kmh: 285,
        consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
        desgaste_neumaticos: { seco: 1.3, lluvioso: 0.8, extremo: 2.1 }
        }
    },
    imagen: "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2023-f1-mcl60-lando-norris-1:43-model_ss5_p-201150687+pv-1+u-bt6ri2xudtokymrplob8+v-lkowwmkzosvfgbqjdf4y.jpg?_hv=2&w=900"
    },
    {
    equipo: "Aston Martin",
    modelo: "AMR24",
    motor: "Mercedes",
    velocidad_maxima_kmh: 340,
    aceleracion_0_100: 2.8,
    pilotos: [9, 10],
    rendimiento: {
        conduccion_normal: {
        velocidad_promedio_kmh: 300,
        consumo_combustible: { seco: 2.2, lluvioso: 2.4, extremo: 2.8 },
        desgaste_neumaticos: { seco: 1.9, lluvioso: 1.2, extremo: 3.0 }
        },
        conduccion_agresiva: {
        velocidad_promedio_kmh: 320,
        consumo_combustible: { seco: 2.8, lluvioso: 3.0, extremo: 3.4 },
        desgaste_neumaticos: { seco: 2.6, lluvioso: 1.7, extremo: 4.0 }
        },
        ahorro_combustible: {
        velocidad_promedio_kmh: 280,
        consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
        desgaste_neumaticos: { seco: 1.4, lluvioso: 0.9, extremo: 2.2 }
        }
    },
    imagen: "https://fuelcarmagazine.com/wp-content/uploads/2022/02/Formula-1-Aston-Martin-2022.jpg"
    },
];
