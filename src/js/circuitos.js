import { circuitos } from '../data/circuitosData.js';

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('circuitos-contenedor');

    if (!contenedor) {
        console.error('No se encontró el contenedor con id "circuitos-contenedor"');
        return;
    }

    if (!circuitos || circuitos.length === 0) {
        console.warn('No hay datos de circuitos para mostrar.');
        return;
    }

    circuitos.forEach(circuito => {
        const card = document.createElement('circuito-card');
        card.circuito = circuito;
        contenedor.appendChild(card);
    });
});
