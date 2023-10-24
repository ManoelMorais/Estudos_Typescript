let pedido: string = 'pizza';
pedido = 'arroz';

let numero: number = 123;
numero = 321;

let deBom: boolean = false;
deBom = true;



/*
const fun = (value: string) => {
    return value;
 }
 
 console.log(fun('manoel'))
*/
const fun = (value: string): string => {
   return value;
}

console.log(fun('manoel'))