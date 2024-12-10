window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search'); // Obtener el parámetro 'search'

    if (searchQuery) {
        filtrarProductos(searchQuery);
    } else {
        mostrarTodosLosProductos();
    }
};

function filtrarProductos(query) {
    const productos = document.querySelectorAll('.card');
    productos.forEach(producto => {
        const nombreProducto = producto.querySelector('h3').innerText.toLowerCase();
        if (nombreProducto.includes(query.toLowerCase())) {
            producto.style.display = 'block'; // Mostrar si coincide
        } else {
            producto.style.display = 'none'; // Ocultar si no coincide
        }
    });
}

function mostrarTodosLosProductos() {
    const productos = document.querySelectorAll('.card');
    productos.forEach(producto => {
        producto.style.display = 'block'; // Mostrar todos los productos
    });
}