import { vehiculos } from '../data/vehiculosData.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('vehiculos-contenedor');


    if (!contenedor) {
    console.error('No se encontró el contenedor con id "vehiculos-container"');
    return;
}

    if (!vehiculos || vehiculos.length === 0) {
    console.warn('No hay datos de vehículos para mostrar.');
    return;
}

    vehiculos.forEach(vehiculo => {
    const card = document.createElement('vehiculo-card');
    card.vehiculo = vehiculo;
    contenedor.appendChild(card);
});
});
