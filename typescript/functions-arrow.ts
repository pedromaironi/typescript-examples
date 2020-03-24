(function(){
  
  const miFuncion = function ( a: string){
    return a;
  }

  const miFuncionF = ( a: string ) => a.toUpperCase();
  
  const SumarN = ( a: number, b: number) => (a+b);

  console.log( miFuncion('hola') );
  console.log( miFuncionF('flecha') );
  console.log( SumarN(2,2) );

  const hulk = {
    nombre: 'Hulk',
    smash(){
      setTimeout( () =>{
        console.log( `${this.nombre} smashh!!!`);
      }, 1000);
    }
  }
  
 //Las funciones de flecha no apuntan a this, => return abreviado
  hulk.smash();
  


})();