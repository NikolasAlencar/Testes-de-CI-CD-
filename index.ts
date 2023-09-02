import { tipoTriangulo } from './funcoes/TipoTriangulo';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite os três lados do triângulo separados por espaços: ', (lados: string) => {
    const [ladoA, ladoB, ladoC] = lados.split(' ');
    tipoTriangulo(Number(ladoA), Number(ladoB), Number(ladoC))
    rl.close();
});
