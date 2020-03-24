(() => {
  
  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroAct: number = 1000;

    return new Promise( ( resolve, reject) =>{
      if(montoRetirar > dineroAct){
        reject('No hay suficiente dinero');
      } else{
        dineroAct -= montoRetirar;
        resolve( dineroAct );
      }
    });
  }
  
  retirarDinero( 20000 )
  .then(montoActual => console.log(`Me quedan ${montoActual}`))
  .catch(err => console.warn(`${err}`));
})();