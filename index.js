import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const clienteRicardo = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, clienteRicardo);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const ContaPoupancaRicardo = new ContaPoupanca(50, clienteRicardo, 1001);

console.log(ContaPoupancaRicardo);
console.log(contaCorrenteRicardo);
