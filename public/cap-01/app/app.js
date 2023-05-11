import { calculaImc } from "./oms.js";
import { Conta } from "./models/conta.js";

const imc = calculaImc({peso: 60, altura: 1.60})
console.log(imc)

const conta = new Conta({
    titular: 'Misael',
    banco: 'Inter',
    agencia: '3563',
    numero: '2348'   
})

console.log(conta)

