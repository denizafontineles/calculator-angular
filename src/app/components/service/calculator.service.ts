import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

// Static facilita o acesso ao atributo, pode chamar utilizando o nome da service ponto o nome da constante;
// readonly indica é somente leitura, não pode ser alterado;
// Uma convenção é deixar os atributo em letras maíuscula para indicar uma constante;
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';


  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number { // O método calcular terá o tipo number
    let resultado: number; // Armazena o resultado da operação

    switch(operacao){
      case CalculatorService.SOMA:
        resultado = num1 + num2
    }

  }
}
