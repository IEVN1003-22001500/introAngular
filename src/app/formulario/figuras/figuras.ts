import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
  styleUrl: './figuras.css'
})

export class Figuras {

  // Figura seleccionada
  figura: string = '';

  // Datos de las figuras
  lado: string = '';
  base: string = '';
  altura: string = '';
  radio: string = '';

  // Datos del pentágono
  perimetro: string = '';
  apotema: string = '';

  // Resultado
  resultado: number = 0;


  calcularArea(): void {

    // CUADRADO
    if (this.figura === 'cuadrado') {

      const lado = parseFloat(this.lado);

      this.resultado = lado * lado;
    }


    // RECTÁNGULO
    if (this.figura === 'rectangulo') {

      const base = parseFloat(this.base);
      const altura = parseFloat(this.altura);

      this.resultado = base * altura;
    }


    // TRIÁNGULO
    if (this.figura === 'triangulo') {

      const base = parseFloat(this.base);
      const altura = parseFloat(this.altura);

      this.resultado = (base * altura) / 2;
    }


    // CÍRCULO
    if (this.figura === 'circulo') {

      const radio = parseFloat(this.radio);

      this.resultado = Math.PI * radio * radio;
    }


    // PENTÁGONO
    if (this.figura === 'pentagono') {

      const perimetro = parseFloat(this.perimetro);
      const apotema = parseFloat(this.apotema);

      this.resultado = (perimetro * apotema) / 2;
    }

  }

}