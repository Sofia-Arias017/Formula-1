class VehiculoCard extends HTMLElement {
    set vehiculo(data) {
        this.innerHTML = `
        <div class="vehiculo-card">
            <h3>${data.equipo} - ${data.modelo}</h3>
            <img src="${data.imagen}" alt="${data.modelo}" class="vehiculo-img">
            <p><strong>Motor:</strong> ${data.motor}</p>
            <p><strong>Velocidad Máxima:</strong> ${data.velocidad_maxima_kmh} km/h</p>
            <p><strong>Aceleración 0-100:</strong> ${data.aceleracion_0_100} s</p>
        </div>
    `;
    }
}

customElements.define('vehiculo-card', VehiculoCard);
