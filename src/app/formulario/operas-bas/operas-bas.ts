import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {

  num1: string = '';
  num2: string = '';
  resultado: number = 0;



  operacion: string = '';

  x1: string = '';
  y1: string = '';
  x2: string = '';
  y2: string = '';

  sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }


  multiplicar(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }


  dividir(): void {
    this.resultado = parseInt(this.num1) / parseInt(this.num2);
  }


  restar(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }


  
  calcular(): void {

    if (this.operacion === 'sumar') {
      this.sumar();
    }

    if (this.operacion === 'restar') {
      this.restar();
    }

    if (this.operacion === 'multiplicar') {
      this.multiplicar();
    }

    if (this.operacion === 'dividir') {
      this.dividir();
    }

  }
 calcularDistancia(): void {
    const puntoX1 = parseFloat(this.x1);
    const puntoY1 = parseFloat(this.y1);
    const puntoX2 = parseFloat(this.x2);
    const puntoY2 = parseFloat(this.y2);

    const distancia = Math.sqrt(
      Math.pow(puntoX2 - puntoX1, 2) +
      Math.pow(puntoY2 - puntoY1, 2)
    );

    this.resultado = distancia;
  }
}
