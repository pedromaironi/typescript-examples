(() => {
  const avenger = {
    nombre: 'Pedro',
    clave: 'Iron man',
    //poder: 'millonario'
  }
  /*
  const extraer = ( {nombre,clave,poder} : any) => {
    //const {nombre, clave, poder} = avenger;

    console.log( nombre );
    console.log( clave );
    console.log( poder );
  }
  
  const {nombre, clave, poder} = avenger;
  console.log( nombre );
  console.log( clave );
  console.log( poder );

  extraer (avenger);*/

  const avengers: string[] = ['Pedro', 'ironman'];
  
  const [ , ironman] = avengers;

  //console.log( ironman );

  const extraerARR = ( [ pedro, iron ]: string[] ) => {
    console.log( pedro );
    console.log( iron );
    
  }

  extraerARR( avengers );

})();