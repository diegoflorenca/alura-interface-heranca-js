import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';

const clienteRicardo = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, clienteRicardo);
const contaPoupancaRicardo = new ContaPoupanca(50, clienteRicardo, 1001);
const contaSalario = new ContaSalario(clienteRicardo);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
