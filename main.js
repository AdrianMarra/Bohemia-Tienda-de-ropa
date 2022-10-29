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

