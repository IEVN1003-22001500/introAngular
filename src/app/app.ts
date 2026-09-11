import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  title = 'Brian Jesus Rodriguez nuñez';

  duplicarnumero(a: number): number {
    return a * 2;
  }

  pelicula = {
    titulo: 'spider-man',
    fechaLanzamiento: '12/32/09'
  };
}
