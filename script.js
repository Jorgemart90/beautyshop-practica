let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agregar productos al carrito
document.querySelectorAll(".agregar-carrito").forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement;
    const nombre = producto.dataset.nombre;
    const precio = parseInt(producto.dataset.precio);

    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
    actualizarCarrito();
  });
});

// Actualizar contador del carrito
function actualizarContador() {
  document.getElementById(
    "contador-carrito"
  ).textContent = `(${carrito.length})`;
}

// Actualizar lista y total del carrito con botón quitar
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  if (!lista) return;
  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((p, index) => {
    const item = document.createElement("li");
    item.textContent = `${p.nombre} - $${p.precio} COP `;

    const botonQuitar = document.createElement("button");
    botonQuitar.textContent = "Quitar";
    botonQuitar.style.marginLeft = "8px";
    botonQuitar.addEventListener("click", () => {
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarContador();
      actualizarCarrito();
    });

    item.appendChild(botonQuitar);
    lista.appendChild(item);
    total += p.precio;
  });

  document.getElementById("total").textContent = `$${total} COP`;
}

// Inicializar contador y carrito al cargar la página
actualizarContador();
actualizarCarrito();

// Filtro de productos con botones
const botonesFiltro = document.querySelectorAll("#filtros button");
const productos = document.querySelectorAll(".producto");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoriaSeleccionada = boton.dataset.categoria;

    productos.forEach((producto) => {
      if (categoriaSeleccionada === "todos") {
        producto.style.display = "block";
      } else {
        if (producto.dataset.categoria === categoriaSeleccionada) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      }
    });
  });
});

document.getElementById("btn-ver-resumen").addEventListener("click", () => {
  // Redirigir a la página resumen.html
  window.location.href = "resumen.html";
});
