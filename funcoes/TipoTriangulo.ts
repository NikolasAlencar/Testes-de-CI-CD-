import { ehTriangulo } from "./EhTriangulo"

export const tipoTriangulo = (A: number, B: number, C: number) => {
    if(ehTriangulo(A, B, C)){
        if(A === B && A === C){
            console.log('Triângulo equilatero!');
            return
        }
        if(A === B || A === C || B === C ){
            console.log('Triângulo isosceles!');
            return
        }
        console.log('Triângulo escaleno!');
    }else{
        console.log('Não é um triângulo!');
    }
}