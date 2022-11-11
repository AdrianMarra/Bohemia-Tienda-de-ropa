//codigo para formulario
//variables = let , const
//let nombre = prompt('ingrese su nombre');
//let apellido = prompt('ingrese su apellido');
//let direccion= prompt('ingre su direccion')
//const DNI =Number( prompt('ingrese su DNI'));
let kmDistancia=Number(prompt('distancia para la entrega'))
let resultado = 0;
let precioKm = 200;
let valorDeTransporte = 0;
let KmPromo = 21;
//funcion para calcular costo de flete
function valorFlete(a, b) {
    let Resta = a - b;
    let valor = Resta * KmPromo;
    return valor
}
if (kmDistancia <= 21) {
    alert('Estimado cliente su entrega va a ser gratuito ')
} else {
    let cost= console.log(valorFlete(valor))
    alert('El costo por km extra tendra un valor de 200 pesos, su valor total a pagar es de '+valorFlete(kmDistancia,KmPromo))
}
//funcion para calcular valor + iva
let valorProducto = Number(prompt('ingresa el valor del producto'))
const sumar = (a, d) => a + d;
const productoIva = x => x * valorProducto;
let precioFinal = sumar(valorProducto, productoIva(valorProducto));
console.log(precioFinal)
//array objetos
class indumentaria{
    constructor(nombre, precio) {
        this.nombre = nombre();
        this.precio = parseFloat(precio);
    }
}
const productosEnCarrito = [];    //productosEnCarrito va a tomar todos los productos que se agreguen en el mismo.
productosEnCarrito.push(new indumentaria("calza", "1000"));
productosEnCarrito.push(new indumentaria("remera", "600"));
productosEnCarrito.push(new indumentaria("top", "500"));
productosEnCarrito.push(new indumentaria("calza", "1000"));
// promo de 2x1 calzas
function promo2X1([productosEnCarrito],calza) { 
    let cantidadDeCalzas = 0;
    for (let i = 0; i < productosEnCarrito.length; i++) {
        if (productosEnCarrito[i] == calza) {
            cantidadDeCalzas = cantidadDeCalzas + 1;
        }
    }
    if (cantidadDeCalzas = 2) {
        alert('Usted tiene la promo de calzas de 2x1 . Muchas gracias por su compra!!!!')
    } else {
        alert('Su compra no tiene ninguna oferta, puede aprovechar de nuestras ojrtas de 2x1. gracias por su compra.')
    }
}

