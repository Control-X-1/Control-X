function abrirRegistro() {
    document.getElementById('formularioRegistro').style.display = 'block';
    document.getElementById('fondoEmergente').style.display = 'block';
}

function abrirInicioSesion() {
    document.getElementById('formularioInicioSesion').style.display = 'block';
    document.getElementById('fondoEmergente').style.display = 'block';
}

function cerrarFormulario() {
    document.getElementById('formularioRegistro').style.display = 'none';
    document.getElementById('formularioInicioSesion').style.display = 'none';
    document.getElementById('fondoEmergente').style.display = 'none';
}

function validarInicioSesion() {
    const correo = document.getElementById('correoSesion').value;
    if (!correo.includes('@')) {
        alert('Correo electronico u contraseña Incorrecto.');
        return false;
    }
    alert('Inicio de sesión exitoso.');
    return true;
}