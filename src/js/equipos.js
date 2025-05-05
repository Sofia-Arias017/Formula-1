import { equipos } from '../data/equiposData.js';
import '../components/equipo-card.js'; 

const contenedor = document.getElementById('contenedor-equipos');
const inputBusqueda = document.getElementById('busqueda');

function renderizarEquipos(lista) {
    contenedor.innerHTML = '';
    lista.forEach(equipo => {
        const card = document.createElement('equipo-card');
        card.data = equipo;
        contenedor.appendChild(card);
    });
}

renderizarEquipos(equipos);

inputBusqueda.addEventListener('input', () => {
    const termino = inputBusqueda.value.toLowerCase();
    const filtrados = equipos.filter(e =>
        e.nombre.toLowerCase().includes(termino) ||
        e.pais.toLowerCase().includes(termino)
    );
    renderizarEquipos(filtrados);
});
