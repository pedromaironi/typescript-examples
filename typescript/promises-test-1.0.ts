(() => {
  
  
  console.log('Inicio');

  const prom1 = new Promise( ( resolve, reject) => {

    setTimeout(() => {
      //resolve('Se termino el timeout');
      reject('Se termino el timeout');
    }, 1000);
  });

  //prom1.then( mensaje => console.log(mensaje))
  prom1.catch( ee => console.warn(ee))
  
  console.log('fin');

})();
/*
function devuelvePromesa() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      let todoCorrecto = true;
      if (todoCorrecto) {
        resolve('Todo ha ido bien');
      } else {
        reject('Algo ha fallado)
      }
    }, 2000)
  })
}

const devuelvePromesa = new Promise( (resolve, reject) => {
  setTimeout(() => {
        let todoCorrecto = true;
        if (todoCorrecto) {
          resolve('Todo ha ido bien');
        } else {
          reject('Algo ha fallado)
        }
      }, 2000)
});
*/