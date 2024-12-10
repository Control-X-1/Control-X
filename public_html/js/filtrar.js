// Función para remover tildes y normalizar texto
function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Función para aplicar los filtros y buscar productos
function applyFilters() {
    const searchValue = normalizeText(document.querySelector('.input_textBuscador').value); // Captura y normaliza el texto del buscador
    const activeFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(f => normalizeText(f.value)); // Captura y normaliza los filtros activos
    const products = document.querySelectorAll('.card'); // Captura todos los productos (elementos con clase "card")

    products.forEach(product => {
        // Obtiene los atributos y título del producto
        const category = normalizeText(product.getAttribute('data-category')); // Normaliza data-category
        const title = normalizeText(product.querySelector('h3').textContent); // Normaliza el título del producto

        // Verifica si coincide con el texto del buscador
        const matchesSearch = title.includes(searchValue);

        // Verifica si coincide con los filtros activos
        const matchesFilters = activeFilters.length === 0 || activeFilters.some(filter => category.includes(filter));

        // Muestra u oculta el producto según los criterios
        product.style.display = matchesSearch && matchesFilters ? 'block' : 'none';
    });
}

// Función para restablecer el buscador y filtros
function resetFilters() {
    document.querySelector('.input_textBuscador').value = ''; // Limpia el texto del buscador
    document.querySelectorAll('.filter-checkbox').forEach(filter => filter.checked = false); // Desmarca todos los filtros
    const products = document.querySelectorAll('.card'); // Captura todos los productos
    products.forEach(product => product.style.display = 'block'); // Muestra todos los productos
}

// Event listeners para el buscador y el botón "Restablecer"
document.getElementById('form_buscador').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario
    applyFilters(); // Aplica los filtros y la búsqueda
});

document.getElementById('restablecer').addEventListener('click', function () {
    resetFilters(); // Restablece los filtros y muestra todos los productos
});

// Aplica filtros automáticamente al cambiar los checkboxes
document.querySelectorAll('.filter-checkbox').forEach(filter => {
    filter.addEventListener('change', applyFilters);
});