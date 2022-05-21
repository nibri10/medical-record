import {AbstractControl} from "@angular/forms";

export default class Util {
  /**
   *
   * @param inputText
   */
  static isNullOrEmpty(inputText: any): boolean {
    return inputText === null || inputText === '' || inputText === undefined
  }


  /**
   *
   * @param input
   * @param length
   */
  static checkLengthInput(input: any, length: number): boolean {
    return input.length >= length
  }

  /**
   *
   * @param input
   * @param length
   */
  static checkEqualInputLength(input: any, length: number): boolean {
    return input.length === length
  }

  /**
   *
   * @param input
   * @param length
   */
  static checkLengthLessInput(input: any, length: number): boolean {
    return input.length <= length
  }

  /**
   *
   * @param input
   */
  static isOnlyLowerCase(input: string): boolean {
    const checkLowerCase = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/
    return checkLowerCase.test(input)
  }

  /**
   *
   * @param value
   */
  static cleanInt(value: string): string {
    return value.replace(/[^0-9]/g, '')
  }

  /**
   *
   * @param value
   */
  static cleanString(value: string): string {
    return value.replace(/[^0-9a-zA-ZÀ-ú!@#$%&*?\.\-\_ ]/g, '')
  }

  /**
   *
   * @param value
   */
  static cleanAlphaNumeric(value: string): string {
    return value.replace(/[^0-9a-zA-Z]/g, '')
  }

  static ValidaCpf(controle: AbstractControl) {
    let cpf = controle.value;


    // Validar se é String
    if (typeof cpf !== 'string') return { cpfInvalid: true }

    // Tirar formatação
    cpf = cpf.replace(/[^\d]+/g, '')

    // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return { cpfInvalid: true }

    // String para Array
    cpf = cpf.split('')

    const validator = cpf
      // Pegar os últimos 2 digitos de validação
      .filter((digit: any, index: number, array: string | any[]) => index >= array.length - 2 && digit)
      // Transformar digitos em números
      .map((el: string | number) => +el)

    const toValidate = (pop: number) => (cpf as string[])
      // Pegar Array de items para validar
      .filter((digit, index, array) => index < array.length - pop && digit)
      // Transformar digitos em números
      .map(el => +el)

    const rest = (count: number, pop: number) => (toValidate(pop)
        // Calcular Soma dos digitos e multiplicar por 10
        .reduce((soma, el, i) => soma + el * (count - i), 0) * 10)
      // Pegar o resto por 11
      % 11
      // transformar de 10 para 0
      % 10

    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]) ? null : {cpfInvalid: true}

    // return { cpfInvalid: true };
  }

}
