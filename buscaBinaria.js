

function buscaBinaria(array, alvo){  
let inicio = 0;
let fim = Array.length -1;


while(inicio <= fim){

    let meio = Math.floor((inicio + fim) /2)

    if (array[meio] === alvo) {
return meio;
    } else if (array [meio] < alvo){
        inicio = meio +1;
    } else{
        fim = meio -1;

    }
    }

return -1;


}

const numeros =[2,5,8,12,16,23,38,56,72,91];
console.log(buscaBinaria(numeros,23));

