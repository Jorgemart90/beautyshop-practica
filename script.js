const botonesAgregar = document.querySelectorAll(".agregar-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const contador = document.getElementById("cart-count");
const mensajeCompra = document.getElementById("mensaje-compra");

let carrito = [];
let totalCarrito = 0;

botonesAgregar.forEach((btn) => {
  btn.addEventListener("click", () => {
    const producto = btn.parentElement;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);

    carrito.push({ nombre, precio });
    totalCarrito += precio;
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio} MXN`;
    listaCarrito.appendChild(li);
  });

  total.textContent = totalCarrito.toFixed(2);
  contador.textContent = carrito.length;
  mensajeCompra.textContent = "";
}

document.getElementById("comprar").addEventListener("click", () => {
  if (carrito.length === 0) {
    mensajeCompra.textContent = "El carrito está vacío.";
    return;
  }

  mensajeCompra.textContent = "¡Gracias por tu compra! (Simulada)";
  carrito = [];
  totalCarrito = 0;
  actualizarCarrito();
});
