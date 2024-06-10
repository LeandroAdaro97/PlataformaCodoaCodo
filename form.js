document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Previene el envío del formulario
    
    // Limpiar mensajes de error anteriores
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Obtener valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validar nombre de usuario
    if (!username) {
        document.getElementById('usernameError').textContent = 'El nombre de usuario es requerido.';
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'El nombre de usuario debe tener al menos 3 caracteres.';
        isValid = false;
    }

    // Validar contraseña
    if (!password) {
        document.getElementById('passwordError').textContent = 'La contraseña es requerida.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes enviar el formulario o hacer cualquier otra cosa
        // this.submit(); // Si quieres enviar el formulario
    }
};