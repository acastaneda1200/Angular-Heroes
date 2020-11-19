import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroesService { 

    private heroes:Heroe[] = [
        {
          nombre: "Abaddon",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/Abaddon_icon.png",
          aparicion: "1941-11-01",
          atributo:"Fuerza"
        },
        {
          nombre: "Alchemist",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/Alchemist_icon.png",
          aparicion: "1939-05-01",
          atributo:"Fuerza"
        },
        {
          nombre: "Ancient Apparition",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/Ancient_Apparition_icon.png",
          aparicion: "1964-01-01",
          atributo: "Inteligencia"
        },
        {
          nombre: "Anti Mage",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/Anti-Mage_icon.png",
          aparicion: "1962-05-01",
          atributo:"Agilidad"
        },
        {
          nombre: "Arc_warden",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/Arc_Warden_icon.png",
          aparicion: "1940-06-01",
          atributo: "Inteligencia"
        },
        {
          nombre: "Axe",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/Axe_icon.png",
          aparicion: "1962-08-01",
          atributo: "Fuerza"
        },
        {
          nombre: "Bane",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/Bane_icon.png",
          aparicion: "1974-11-01",
          atributo: "Inteligencia"
        }
        
      ];
    

    constructor(){
      
    }

    getHeroes(){
        return this.heroes;
    }
    getHeroe( id: number){
      return this.heroes[id];
    }
    buscarHeroes( termino:string): Heroe[]{
      let heroesArray: Heroe[] = [];
      termino = termino.toLowerCase();

      for(let heroe of this.heroes){
        
        
        let nombre = heroe.nombre.toLowerCase();
        if (nombre.indexOf(termino) >= 0){
          heroesArray.push(heroe)
         
        }
      }
      return heroesArray;

    }

    buscarTextoHeroe (termino2:string):Heroe[]{
      let heroesArray: Heroe[] = [];
      
      termino2 = termino2.toLowerCase();

      for(let heroe2 of this.heroes){
        
        
        let nombre = heroe2.bio.toLowerCase();
        if (nombre.indexOf(termino2) >= 0){
          heroesArray.push(heroe2)
         
        }
      }
      return heroesArray;
    }
}
export interface Heroe{
nombre: string,
bio:string;
img:string;
aparicion:string;
atributo:string;
}