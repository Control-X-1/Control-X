document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  const products = document.querySelectorAll('.card');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
  });

  function filterProducts() {
    const selectedCategories = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    products.forEach(product => {
      const productCategories = product.getAttribute('data-category').split(' '); // Convertir en array
      const isMatch = selectedCategories.length === 0 || selectedCategories.some(category => productCategories.includes(category));

      product.style.display = isMatch ? 'block' : 'none';
    });
  }
});
