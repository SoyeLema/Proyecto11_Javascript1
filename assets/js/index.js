//OPTIONS en CARD
const cantidadInput = document.querySelector(".quantity1");
const colorInput = document.querySelector("#color");
const precio = 81490;
const calcular = document.querySelector(".calculate");

//SOLUTION "detalle de compra"
const precioTotal = document.querySelector(".price2");
const cantidadTotal = document.querySelector(".quantity2");
const colorSeleccionado = document.querySelector(".chosen-color");

let total = 0


function calcularTotal() {
    const cantidad = cantidadInput.value
    const color = colorInput.value

    precioTotal.innerHTML = (+cantidad * precio).toLocaleString();
    cantidadTotal.innerHTML = cantidad
    colorSeleccionado.style.backgroundColor = color

    //CAMBIO DE IMAGEN
    const image = document.querySelector(".rojos")

    if (color == "blue") {
        image.src = "assets/img/azules.webp"
    } else if (color == "black") {
        image.src = "assets/img/negros.webp"
    } else {
        image.src = "assets/img/rojos.webp"
    }
}