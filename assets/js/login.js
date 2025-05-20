document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/;

    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'La contraseña debe contener al menos una mayúscula, una minúscula y un número.';
        return;
    }

    // Aquí iría la lógica de autenticación con el backend
    errorMessage.textContent = '';
    alert('Inicio de sesión exitoso (simulado).');
});

function loginWithGoogle() {
    // Aquí se iniciaría el flujo OAuth con Google
    window.location.href = 'dashboard.html';
}

function registerUser() {
    alert('Redirigiendo al registro de usuario (simulado).');
}

function forgotPassword() {
    alert('Redirigiendo a recuperación de contraseña (simulado).');
}