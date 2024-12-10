// Detectar cuando el usuario presiona "Enter" en el campo de búsqueda
document.getElementById("form_buscador").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe de la forma predeterminada

    // Obtener el valor del campo de búsqueda
    const searchQuery = document.querySelector(".input_textBuscador").value.trim();

    // Si hay una búsqueda, redirige a productos.html con el parámetro de búsqueda
    if (searchQuery) {
        window.location.href = "productos.html?search=" + encodeURIComponent(searchQuery);
    } else {
        // Si el campo está vacío, redirige solo a productos.html (sin parámetros)
        window.location.href = "productos.html";
    }
});

// Agregar soporte para presionar "Enter" para enviar el formulario
document.querySelector(".input_textBuscador").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Evitar el envío por defecto
        document.getElementById("form_buscador").submit();  // Enviar el formulario manualmente
    }
});