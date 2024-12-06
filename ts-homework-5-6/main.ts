import { getStatusMessage } from './Status.ts';
import { calcularPrecoFinal, Produto } from './Produto.ts';


// Testando a função com diferentes status
console.log('============== TS - Homework 5 e 6 ==================')
console.log('Parte 1: Criando Tipos e usando Tipos Literais')
console.log(getStatusMessage('ativo')); // O usuário está ativo.
console.log(getStatusMessage('inativo')); // O usuário está inativo.
console.log(getStatusMessage('pendente')); // O status do usuário é pendente.
console.log(getStatusMessage('bloqueado')); // O status do usuário é bloqueado.


// Criando alguns produtos
const produto1: Produto = { id: 1, nome: 'Camiseta', preco: 50, desconto: 10, categoria: 'roupa', quantidadeEmEstoque: 10 };
const produto2: Produto = { id: 2, nome: 'Tênis', preco: 150, categoria: 'calçado', quantidadeEmEstoque: 10 };
const produto3: Produto = { id: 3, nome: 'Sapatênis', preco: 100, categoria: 'calcado', quantidadeEmEstoque: 3 };
const produto4: Produto = { id: 4, nome: 'Vestido', preco: 250, desconto: 20, categoria: 'roupa', quantidadeEmEstoque: 12 };

// Calculando o preço final dos produtos
console.log("\n====================================================================\n");
console.log('Parte 2: Criando Interfaces e definindo objetos com tipos de dados')
console.log(`O preço do(a) ${produto1.nome} é R$ ${calcularPrecoFinal(produto1)}, desconto: R$ ${produto1.desconto}`); // Preço com desconto: 45
console.log(`O preço do(a) ${produto2.nome} é R$ ${calcularPrecoFinal(produto2)}`); // Preço sem desconto: 150
console.log(`O preço do(a) ${produto3.nome} é R$ ${calcularPrecoFinal(produto3)}`); // Preço sem desconto: 120
console.log(`O preço do(a) ${produto4.nome} é R$ ${calcularPrecoFinal(produto4)}, desconto: R$ ${produto4.desconto}`); // Preço com desconto: 200