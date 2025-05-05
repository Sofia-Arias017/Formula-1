class EquipoCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set data(equipo) {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 1.5rem;
                    width: 300px;
                    background-color: transparent;
                    border: none;
                    box-shadow: none;
                    transition: transform 0.2s;
                }

                .card:hover {
                    transform: scale(1.05);
                }

                .logo {
                    width: 180px;
                    height: auto;
                    margin-bottom: 1.2rem;
                }

                .nombre {
                    font-size: 1.4rem;
                    font-weight: bold;
                    color: #000;
                    margin-bottom: 0.5rem;
                }

                .pais {
                    font-size: 1.1rem;
                    color: #555;
                }
            </style>

            <div class="card">
                <img class="logo" src="${equipo.imagen}" alt="${equipo.nombre}">
                <div class="nombre">${equipo.nombre}</div>
                <div class="pais">${equipo.pais}</div>
            </div>
        `;
    }
}

customElements.define('equipo-card', EquipoCard);
