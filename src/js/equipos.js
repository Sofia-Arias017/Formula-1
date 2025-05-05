import { equipos } from '../data/equiposData.js';

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-equipos');

    equipos.forEach(equipo => {
        const card = document.createElement('equipo-card');
        card.data = equipo;
        contenedor.appendChild(card);
    });
});
