class PilotoCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['nombre', 'equipo', 'rol', 'foto'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const nombre = this.getAttribute('nombre') || '';
        const equipo = this.getAttribute('equipo') || '';
        const rol = this.getAttribute('rol') || '';
        const foto = this.getAttribute('foto') || '';

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    width: 250px;
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    overflow: hidden;
                    text-align: center;
                    background-color: white;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s;
                }

                .card:hover {
                    transform: scale(1.05);
                }

                .foto {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                }

                .contenido {
                    padding: 0.5rem;
                }

                .nombre {
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                .equipo {
                    color: #666;
                }

                .rol {
                    font-style: italic;
                    margin-top: 0.2rem;
                }
            </style>

            <div class="card">
                <img src="${foto}" alt="${nombre}" class="foto">
                <div class="contenido">
                    <div class="nombre">${nombre}</div>
                    <div class="equipo">${equipo}</div>
                    <div class="rol">${rol}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('piloto-card', PilotoCard);
