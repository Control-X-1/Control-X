const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav_cerrar");

//Mostrar menu
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('mostrar-menu')
    }) 
}

//Ocultar menu
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('mostrar-menu')
    })
}

//Remover el menu dando en cualquier "li" de la lista
const navLink = document.querySelectorAll('nav_link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')

        navMenu.classList.add('mostrar-menu')
}
navLink.forEach (n => n.addEventListener('click', linkAction))

/*=============================INDEX PRODUCTO======================================*/
const btnCart = document.querySelector('.button_carrito')
const containerCartProducto = document.querySelector('.container-cart-products')

btnCart.addEventListener ('click', ()=>{
    containerCartProducto.classList.toggle('hidden-cart')
})

/* =============CARRITO=============== */ 
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

//Lista de todos los contenedores de productos
const productsList= document.querySelector('.gallery')

//Variable de arreglo de Productos
let allProducts = []
const valorTotal = document.querySelector('.total-pagar')
const countProducts = document.querySelector('#contador-productos')

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


productsList.addEventListener('click', e =>{
    //console.log(e.target.classList.contains('btn-comprar'))
    if(e.target.classList.contains('btn-comprar')){
        //console.log(e.target.parentElement)
        const product = e.target.parentElement

        // console.log(product.querySelector('h3').textContent)
        // console.log(product.querySelector('.precio').textContent)
        //console.log(product.querySelector('.precio').textContent.trim())
        //trim() elimina espacios.

        const infoProduct ={
            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('.precio').textContent.trim(),
        };

        //Recorre para ver si hay una existencia del objeto
        const existe = allProducts.some(product => product.title === infoProduct.title)
        //console.log(existe)
        if(existe){
            const products = allProducts.map(product =>{
                if(product.title === infoProduct.title){
                    //Si existe un objeto ya el el vector entonces suma
                    product.quantity++;
                    return product
                } else{
                    return product
                }
            })
            allProducts = [...products] //products devuelve el arreglo
        } else{
            allProducts = [... allProducts, infoProduct]
        }

        
        //Se agrega objetos literales
        // console.log(allProducts)
        
        showHTML();

    }
});

rowProduct.addEventListener('click', e => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        console.log(product)
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );
        console.log(allProducts)
        showHTML();
    }
})

//Funcion para mostrar HTML
const showHTML = () =>{
    if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

    //Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalDeProductos = 0;

    allProducts.forEach(product =>{
        //Creamos un contenedor para cada producto
        const containerProduct = document.createElement('div')
        //Al contenedor le agregamos la clase cart-product
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
            <button class="icon-close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        `
        //Añadiendo div
        rowProduct.append(containerProduct)

        total = total + parseFloat(product.quantity * product.price.slice(2))
        totalDeProductos = totalDeProductos + product.quantity; 
    });

    valorTotal.innerText = `S/.${total.toFixed(2)}`;
    countProducts.innerText = totalDeProductos;
};