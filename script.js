let precio, monto, montoiva, sum = 0
let menu,iva = 0.21

do{
menu = parseInt(prompt("Ingrese la cantidad de articulos que va a agregar" + 
                  "\n para salir ingrese 00"))
}while(isNaN(menu))


if(menu != 00){
  for (i=1; i <= menu; i++){
      precio = prompt("Ingrese el precio del articulo " + i)
      cant = prompt("Ingrese la cantidad vendida del articulo " + i)
      monto = precio * cant;
      montoiva = monto + (monto * iva)
      alert('el monto de la venta es de: ' + monto +
        '\n el monto con el iva es de: ' + montoiva)
      sum += montoiva
  }                
}else{
  alert('El programa ha finalizado');
}   

alert('El monto final es de: '+ sum + '\nEl programa ha finalizado')

