(function(){
  
  function activar(quien: string, 
    objeto: string = "activo la batisenal",
    momento?: string ){
  
      if ( momento ){
        console.log(`${quien} ${objeto} en la ${momento}.`);
      } else {
        console.log(`${quien} ${objeto}`);
      }
    
  }

  activar('Gordon','activo la batisenal','en la tarde');
})();