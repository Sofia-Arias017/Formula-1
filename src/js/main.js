let tipoUsuarioSeleccionado = null;

function mostrarFormulario(tipo) {
    tipoUsuarioSeleccionado = tipo;
    const formulario = document.getElementById('formulario');
    const inputNombre = document.getElementById('inputNombre');

    if (tipo === 'usuario') {
        inputNombre.placeholder = 'Nombre del Usuario';
    } else if (tipo === 'admin') {
        inputNombre.placeholder = 'Nombre del Administrador';
    }

    formulario.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const btnUsuario = document.getElementById('btnUsuario');
    const btnAdmin = document.getElementById('btnAdmin');
    const formulario = document.getElementById('formulario');

    btnUsuario.addEventListener('click', () => mostrarFormulario('usuario'));
    btnAdmin.addEventListener('click', () => mostrarFormulario('admin'));

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('inputNombre').value.trim();
        const contrasena = document.getElementById('inputContrasena').value.trim();

        if (
            (tipoUsuarioSeleccionado === 'usuario' && nombre === 'sofia' && contrasena === 'sofia2025') ||
            (tipoUsuarioSeleccionado === 'admin' && nombre === 'Adrian' && contrasena === 'Adrian 2025')
        ) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('tipoUsuario', tipoUsuarioSeleccionado);
            localStorage.setItem('nombreUsuario', nombre);
            window.location.href = 'index.html';
        } else {
            alert('Nombre o contraseña incorrectos.');
        }
    });
});
