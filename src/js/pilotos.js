import { pilotos } from '../data/pilotosData.js'; 
import '../components/piloto-card.js'; // Esto registra el custom element

const contenedor = document.getElementById('contenedor-pilotos');

pilotos.forEach(piloto => {
    const card = document.createElement('piloto-card');
    card.setAttribute('nombre', piloto.nombre);
    card.setAttribute('equipo', piloto.equipo);
    card.setAttribute('rol', piloto.rol);
    card.setAttribute('foto', piloto.foto);
    contenedor.appendChild(card);
});
