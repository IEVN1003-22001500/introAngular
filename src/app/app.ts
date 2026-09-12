import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
  title:string = 'Brian Jesus Rodriguez Nuñez'


  duplicarnumero(a:number):number{
    return a*2;
  }

  pelicula={
    titulo: 'Spiderman',
    fechaLanzamiento: new Date(),
    precio: 2353
  }

}

//@component({
//selector: 'app-root',
//template: '

//<div> <h1>{{title}}</h>
//<app-heroes-list></app/heroes-list>
//</div>'
//})
