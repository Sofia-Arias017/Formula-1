// Referencias a los botones y elementos del DOM
const btnUsuario = document.getElementById('btnUsuario');
const btnAdmin = document.getElementById('btnAdmin');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Mostrar el formulario cuando se elige un tipo de usuario
btnUsuario.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

btnAdmin.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

// Crear usuarios predefinidos si no existen
const usuariosPredefinidos = [
  { username: 'sofia', password: 'sofia2025', rol: 'usuario' },
  { username: 'Adrian', password: 'Adrian2025', rol: 'admin' }
];

if (!localStorage.getItem('usuarios')) {
  localStorage.setItem('usuarios', JSON.stringify(usuariosPredefinidos));
}

// Manejar envío del formulario
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(
    u => u.username === username && u.password === password
  );

  if (!usuario) {
    alert('Usuario o contraseña incorrectos.');
    return;
  }

  // Guardar sesión
  localStorage.setItem('usuarioActual', JSON.stringify(usuario));

  // Redirigir según el rol
  if (usuario.rol === 'admin') {
    window.location.href = './views/circuitos.html';
  } else {
    window.location.href = './views/pilotos.html';
  }
});
