 import { Component } from '@angular/core'
import { CommonModule} from '@angular/common'
declare var bootstrap: any;

 @Component({
  selector: 'app-punto2',
  imports:[CommonModule], //para usar ngFor
  templateUrl: './punto2.html',
  styleUrl: './punto2.css'})
  export class Punto2{
    mis_productos= [
      {nombre:'Notebook Asus Zenbook 13',
         descripcion:'Caracterizada por pantallas ultra delgadas,ligeras y de alto rendimiento, ideal parea usuarios que necesitan portabilidad sin sacrificar potencia', 
         img:'img/punto2/shopping.webp',
         precio:1348200},
      {nombre:'Notebook HP Pavilion 15' ,
        descripcion:'Diseñada para ofrecer un rendimiento sólido y una experiencia de usuario fluida, ideal para tareas diarias, entretenimiento y trabajo',
         img:'img/punto2/23892.webp',
          precio:1099000},
         {nombre:'Notebook Dell XPS 13', 
          descripcion:'Referente en ultraportátiles con diseño premium de aluminio y fibra de carbono. Ofrece pantallas InfinityEdge casi sin marcos y una potencia excepcional para profesionales que viajan.',
          img:'img/punto2/NotebookDellXPS13.webp',
          precio:2913300},
        {nombre:'Notebook Lenovo Yoga Slim 7i',
          descripcion:'Una laptop 2 en 1 extremadamente versátil y delgada. Combina una pantalla OLED de alta fidelidad con un rendimiento inteligente impulsado por IA, ideal para creadores de contenido.', 
          img:'img/punto2/lenovoYogaSlim.webp ',
          precio:1800000 },
          {nombre:'Smart TV Samsung QLED 4K 65',
             descripcion:'Destaca por su tecnología de puntos cuánticos que ofrece mil millones de matices de color. Incluye procesador con IA para escalar cualquier contenido a 4K con nitidez asombrosa.',
              img:'img/punto2/SmartTVSamsungQLED4K65.webp',
              precio:1750000},
              {nombre:'Smart TV Sony Bravia XR 42"',
               descripcion:'Equipada con el procesador cognitivo XR que replica la forma en que los humanos ven y oyen. Ofrece una experiencia cinematográfica inigualable y sonido integrado en la pantalla.', 
               img:'img/punto2/SmartTVSonyBraviaXR42.webp', 
               precio:5997100},

          {nombre:'Smart TV TCL Google TV 55', 
            descripcion:'Excelente relación calidad-precio con sistema Google TV integrado. Ofrece acceso fluido a aplicaciones de streaming y control por voz manos libres, ideal para el entretenimiento hogareño.', 
            img:'img/punto2/descarga.webp',
            precio:699.999},
          {nombre:'Smart TV LG OLED evo C3 55', 
            descripcion:'Líder en calidad de imagen gracias a sus píxeles autoiluminados que logran negros perfectos. Es la opción favorita de los gamers por su bajísimo tiempo de respuesta.', 
            img:'img/punto2/SmartTVLGOLEDevoC355.webp',
            precio:2100000},

            {nombre:'Samsung Galaxy S24 Ultra', descripcion:'El buque insignia con estructura de titanio y S-Pen integrado. Destaca por sus funciones avanzadas de inteligencia artificial y un sistema de cámaras con zoom óptico de alta resolución.',
            img:'img/punto2/SamsungGalaxyS24Ultra.webp',
            precio:2200000},
            {nombre:'iPhone 15 Pro 128GB', 
              descripcion:'Construido con titanio de grado aeroespacial, es ligero y resistente. Incluye el chip A17 Pro para gaming de consola y el nuevo botón de acción personalizable.',
              img:'img/punto2/iPhone15Pro128GB.webp',
              precio:1540000},
            {nombre:'Xiaomi Redmi Note 13', 
              descripcion:'Un smartphone equilibrado con pantalla AMOLED a 120Hz y cámara principal de 108MP. Perfecto para quienes buscan especificaciones sólidas y carga rápida a un precio accesible.', 
              img:'img/punto2/XiaomiRedmiNote13.webp',
              precio:399999}, 
              {nombre:'Motorola Edge 50 Pro', 
                descripcion:'Diseño elegante con bordes curvos y carga ultrarrápida de 125W. Su cámara está validada por Pantone para capturar colores y tonos de piel con máxima fidelidad.', 
                img:'img/punto2/MotorolaEdge50Pro.webp',
                precio:999.999}
            
            
            ]

      arrayCarrito: any[]=[];
      total: number = 0;
      agregarAlCarrito(producto: any){
        this.arrayCarrito.push(producto);
        this.total=this.total + producto.precio;
 const toastLiveExample = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
      }
  }