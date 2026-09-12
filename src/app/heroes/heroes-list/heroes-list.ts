import { Component } from '@angular/core';
import{IHeroe} from '../heroe';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

imageWidth:number=80;
imageMargin:number=2;
muestraImagen:boolean=true;
listFilter:string='';
showImage():void{
  this.muestraImagen=!this.muestraImagen;
}


  heroes: IHeroe[] = [
    {
      imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
      nombre: 'goku',
      descripcion: 'kame hame ha',
      race: 'sayayin',
      ki: 9000
    },
    {
      imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre: 'vegeta',
      descripcion: 'final flash',
      race: 'sayayin',
      ki: 7000
    },
    {
      imagen: 'https://dragonball-api.com/characters/Freezer.webp',
      nombre: 'frezer',
      descripcion: 'Death ball',
      race: 'alien',
      ki: 8000
    },
    {
      imagen: 'https://dragonball-api.com/characters/picolo_normal.webp',
      nombre: 'picolo',
      descripcion: 'makankosappo',
      race: 'namekiano',
      ki: 6000
    }
  ];
}
