import { vehiculos } from '../data/vehiculosData.js';
import '../components/vehiculo-card.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('vehiculos-contenedor');
    const inputBusqueda = document.getElementById('busqueda');

    if (!contenedor) {
        console.error('No se encontró el contenedor con id "vehiculos-contenedor"');
        return;
    }

    if (!vehiculos || vehiculos.length === 0) {
        console.warn('No hay datos de vehículos para mostrar.');
        return;
    }

    function mostrarVehiculos(lista) {
        contenedor.innerHTML = '';
        lista.forEach(vehiculo => {
            const card = document.createElement('vehiculo-card');
            card.vehiculo = vehiculo;
            contenedor.appendChild(card);
        });
    }

    mostrarVehiculos(vehiculos);

    inputBusqueda.addEventListener('input', () => {
        const termino = inputBusqueda.value.toLowerCase();
        const filtrados = vehiculos.filter(v =>
            v.nombre.toLowerCase().includes(termino) ||
            v.equipo.toLowerCase().includes(termino)
        );
        mostrarVehiculos(filtrados);
    });
});
