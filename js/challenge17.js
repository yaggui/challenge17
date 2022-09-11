const checkDni= () => {
  let numberDni= parseInt(prompt("Ingresa tu número de DNI:"));
  if(numberDni>999999 && numberDni<100000000){
    alert("El número que ingresaste es correcto");  
  }else{
    alert("El número que ingresaste no es válido");
  }
}
