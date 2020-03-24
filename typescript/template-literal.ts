(function(){
  
  function getEdad(){
    return 100 + 100 + 300;
  }
  const nombre = 'fernando';
  const apellido = 'toribio';
  const edad = 13;

  //const salida = nombre + " " + apellido + " " + " (Edad:" + edad + ")";
  const salida = `${nombre} ${apellido} (Edad: ${(edad + getEdad())})`
  console.log(salida);

})();