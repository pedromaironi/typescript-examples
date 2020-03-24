(() => {
  
  class Avenger{

    /*nombre: string;
    equipo: string;
    nombreReal: string;

    puedePelear: boolean;
    peleasGanadas: number;*/

    constructor( public nombre: string,
                public equipo: string,
                public nombreReal?: string,
                public puedePelear: boolean = true,
                public peleasGanadas: number = 0){}
  }

  const antman: Avenger = new Avenger('Antman', 'capi');

  console.log(antman);
})();