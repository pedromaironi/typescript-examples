(() => {
  
  interface Xmen{
    nombre : string;
    edad : number;
  }

  //Las interfaces en typeScript es una forma d definir reglas de typeado para 
  //poder utilizar esta interfaz con estas caracteristicas.


  const enviarMision = ( xmen: Xmen ) => {
    console.log(`Enviando a ${xmen.nombre} a la mision`);
  }

  const Regresar = ( xmen: Xmen ) => {
    console.log(`Enviando a ${xmen.nombre} a la mision`);
  }

  const wolverine: Xmen = {
    nombre: 'Logan',
    edad: 23
  }

  enviarMision(wolverine);
})();