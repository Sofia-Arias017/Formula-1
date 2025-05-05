class CircuitoCard extends HTMLElement {
    set circuito(data) {
        this.innerHTML = `
            <div class="circuito-card">
                <h3>${data.nombre} (${data.pais})</h3>
                <img src="${data.imagen}" alt="${data.nombre}" class="circuito-img">
                <p><strong>Longitud:</strong> ${data.longitud_km} km</p>
                <p><strong>Vueltas:</strong> ${data.vueltas}</p>
                <p><strong>Descripción:</strong> ${data.descripcion}</p>
                <p><strong>Récord de vuelta:</strong> ${data.record_vuelta.tiempo} - ${data.record_vuelta.piloto} (${data.record_vuelta.año})</p>
            </div>
        `;
    }
}

customElements.define('circuito-card', CircuitoCard);
