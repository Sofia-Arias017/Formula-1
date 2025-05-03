export const vehiculos = [
    {
        equipo: "Red Bull Racing",
        modelo: "RB20",
        motor: "Honda",
        velocidad_maxima_kmh: 345,
        aceleracion_0_100: 2.5,
        pilotos: [1, 2],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 310,
                consumo_combustible: { seco: 2.5, lluvioso: 2.7, extremo: 3.0 },
                desgaste_neumaticos: { seco: 2.2, lluvioso: 1.5, extremo: 3.5 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 330,
                consumo_combustible: { seco: 3.1, lluvioso: 3.4, extremo: 3.8 },
                desgaste_neumaticos: { seco: 3.0, lluvioso: 2.0, extremo: 4.5 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 290,
                consumo_combustible: { seco: 2.2, lluvioso: 2.4, extremo: 2.7 },
                desgaste_neumaticos: { seco: 1.8, lluvioso: 1.2, extremo: 3.0 }
            }
        },
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b0/FIA_F1_Austria_2018_Nr._3_Ricciardo.jpg"
    },
    {
        equipo: "Scuderia Ferrari",
        modelo: "SF-24",
        motor: "Ferrari",
        velocidad_maxima_kmh: 340,
        aceleracion_0_100: 2.6,
        pilotos: [3, 4],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 305,
                consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 2.9 },
                desgaste_neumaticos: { seco: 2.1, lluvioso: 1.4, extremo: 3.2 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 325,
                consumo_combustible: { seco: 3.0, lluvioso: 3.3, extremo: 3.6 },
                desgaste_neumaticos: { seco: 2.8, lluvioso: 1.9, extremo: 4.2 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 285,
                consumo_combustible: { seco: 2.1, lluvioso: 2.3, extremo: 2.6 },
                desgaste_neumaticos: { seco: 1.6, lluvioso: 1.0, extremo: 2.8 }
            }
        },
        imagen: "https://m.media-amazon.com/images/I/61ghQwhYRoL._AC_SL1500_.jpg"
    },
    {
        equipo: "Mercedes-AMG Petronas",
        modelo: "W15",
        motor: "Mercedes",
        velocidad_maxima_kmh: 342,
        aceleracion_0_100: 2.6,
        pilotos: [5, 6],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 308,
                consumo_combustible: { seco: 2.5, lluvioso: 2.7, extremo: 3.0 },
                desgaste_neumaticos: { seco: 2.0, lluvioso: 1.4, extremo: 3.3 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 328,
                consumo_combustible: { seco: 3.1, lluvioso: 3.3, extremo: 3.7 },
                desgaste_neumaticos: { seco: 2.7, lluvioso: 1.8, extremo: 4.4 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 288,
                consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
                desgaste_neumaticos: { seco: 1.4, lluvioso: 0.9, extremo: 2.6 }
            }
        },
        imagen: "https://cdn-7.motorsport.com/images/amp/0k7VdMD0/s1200/mercedes-f1-w15.webp"
    },
    {
        equipo: "McLaren F1 Team",
        modelo: "MCL38",
        motor: "Mercedes",
        velocidad_maxima_kmh: 338,
        aceleracion_0_100: 2.7,
        pilotos: [7, 8],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 306,
                consumo_combustible: { seco: 2.3, lluvioso: 2.5, extremo: 2.8 },
                desgaste_neumaticos: { seco: 2.0, lluvioso: 1.3, extremo: 3.0 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 326,
                consumo_combustible: { seco: 2.9, lluvioso: 3.1, extremo: 3.5 },
                desgaste_neumaticos: { seco: 2.6, lluvioso: 1.7, extremo: 4.1 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 286,
                consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
                desgaste_neumaticos: { seco: 1.3, lluvioso: 0.8, extremo: 2.2 }
            }
        },
        imagen: "https://www.modelsnavigator.com/buxus/images/fotogaleria/modelsnavigator.com/katalog_produktov/modely_aut/modely_sportovych_aut/mclaren_mcl38_no.81_mclaren_f1_team_formula_1_o.piastri_2024/712cN5KvueL._AC_SL1500_.jpg"
    },
    {
        equipo: "Aston Martin Aramco F1 Team",
        modelo: "AMR24",
        motor: "Mercedes",
        velocidad_maxima_kmh: 336,
        aceleracion_0_100: 2.7,
        pilotos: [9, 10],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 304,
                consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 2.9 },
                desgaste_neumaticos: { seco: 2.1, lluvioso: 1.4, extremo: 3.1 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 324,
                consumo_combustible: { seco: 3.0, lluvioso: 3.2, extremo: 3.6 },
                desgaste_neumaticos: { seco: 2.8, lluvioso: 1.9, extremo: 4.2 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 284,
                consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
                desgaste_neumaticos: { seco: 1.5, lluvioso: 0.9, extremo: 2.5 }
            }
        },
        imagen: "https://www.valvolineglobal.com/49f17c/globalassets/vcom/amr23-front-quarter-view_kv_18_16x9.jpg?format=webp&quality=80"
    },
    {
        equipo: "Alpine F1 Team",
        modelo: "A524",
        motor: "Renault",
        velocidad_maxima_kmh: 335,
        aceleracion_0_100: 2.8,
        pilotos: [11, 12],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 295,
                consumo_combustible: { seco: 2.3, lluvioso: 2.5, extremo: 2.9 },
                desgaste_neumaticos: { seco: 2.0, lluvioso: 1.3, extremo: 3.1 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 315,
                consumo_combustible: { seco: 2.9, lluvioso: 3.1, extremo: 3.6 },
                desgaste_neumaticos: { seco: 2.7, lluvioso: 1.8, extremo: 4.2 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 275,
                consumo_combustible: { seco: 2.1, lluvioso: 2.3, extremo: 2.6 },
                desgaste_neumaticos: { seco: 1.5, lluvioso: 0.9, extremo: 2.4 }
            }
        },
        imagen: "https://cdn-prensa.renault.com.co/wp-content/uploads/2022/07/05141807/bwt-alpine-f1-team-1-2048x1152.jpg"
    },
    {
        equipo: "Visa Cash App RB",
        modelo: "VCARB 01",
        motor: "Honda",
        velocidad_maxima_kmh: 330,
        aceleracion_0_100: 2.9,
        pilotos: [13, 14],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 290,
                consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 3.0 },
                desgaste_neumaticos: { seco: 2.1, lluvioso: 1.4, extremo: 3.2 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 310,
                consumo_combustible: { seco: 3.0, lluvioso: 3.2, extremo: 3.7 },
                desgaste_neumaticos: { seco: 2.8, lluvioso: 1.9, extremo: 4.3 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 270,
                consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
                desgaste_neumaticos: { seco: 1.6, lluvioso: 1.0, extremo: 2.5 }
            }
        },
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/d92feb56-c9bb-416d-80fc-31a23dc12492_16-9-discover-aspect-ratio_default_0.webp"
    },
    {
        equipo: "Williams Racing",
        modelo: "FW46",
        motor: "Mercedes",
        velocidad_maxima_kmh: 345,
        aceleracion_0_100: 2.8,
        pilotos: [15, 16],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 300,
                consumo_combustible: { seco: 2.2, lluvioso: 2.4, extremo: 2.7 },
                desgaste_neumaticos: { seco: 1.9, lluvioso: 1.2, extremo: 2.9 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 320,
                consumo_combustible: { seco: 2.8, lluvioso: 3.0, extremo: 3.4 },
                desgaste_neumaticos: { seco: 2.5, lluvioso: 1.7, extremo: 4.0 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 280,
                consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
                desgaste_neumaticos: { seco: 1.3, lluvioso: 0.8, extremo: 2.2 }
            }
        },
        imagen: "https://e00-xlk-ue-marca.uecdn.es/files/article_1320_widen_webp/uploads/2024/11/20/17071463043864.webp"
    },
    {
        equipo: "Stake F1 Team Kick Sauber",
        modelo: "C44",
        motor: "Ferrari",
        velocidad_maxima_kmh: 332,
        aceleracion_0_100: 2.9,
        pilotos: [17, 18],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 292,
                consumo_combustible: { seco: 2.3, lluvioso: 2.5, extremo: 2.8 },
                desgaste_neumaticos: { seco: 2.0, lluvioso: 1.3, extremo: 3.0 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 312,
                consumo_combustible: { seco: 2.9, lluvioso: 3.1, extremo: 3.5 },
                desgaste_neumaticos: { seco: 2.7, lluvioso: 1.8, extremo: 4.1 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 270,
                consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
                desgaste_neumaticos: { seco: 1.5, lluvioso: 0.9, extremo: 2.3 }
            }
        },
        imagen: "https://images.daznservices.com/di/library/DAZN_News/d4/82/c45-stake-team-kick-sauber-f1_xyu806i7z1nz1kxb78jkjilvy.jpg?t=518344757&w=800&quality=100"
    },
    {
        equipo: "Haas F1 Team",
        modelo: "VF-24",
        motor: "Ferrari",
        velocidad_maxima_kmh: 328,
        aceleracion_0_100: 2.9,
        pilotos: [19, 20],
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 290,
                consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 2.9 },
                desgaste_neumaticos: { seco: 2.1, lluvioso: 1.4, extremo: 3.2 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 310,
                consumo_combustible: { seco: 3.0, lluvioso: 3.2, extremo: 3.7 },
                desgaste_neumaticos: { seco: 2.9, lluvioso: 1.9, extremo: 4.3 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 270,
                consumo_combustible: { seco: 2.1, lluvioso: 2.3, extremo: 2.6 },
                desgaste_neumaticos: { seco: 1.6, lluvioso: 1.0, extremo: 2.4 }
            }
        },
        imagen: "https://cdn-7.motorsport.com/images/mgl/YpNpL8N0/s700/haas-vf-24-livery.jpg"
    }
];
