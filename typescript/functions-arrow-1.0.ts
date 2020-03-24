(() => {
  
  const sumar = (a: number, b: number): number =>  {
    return a + b;
  }

  const nombre = () : string => 'Hola';

  const obtenerSalario = () : Promise<String> => {
    return new Promise( (resolve, reject) => {
      resolve('Pedro');
    })
  }

  obtenerSalario().then( a => console.log(a.toUpperCase));
})();