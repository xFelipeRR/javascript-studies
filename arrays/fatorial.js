function fatorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n *= fatorial(n-1)
    }
}
console.log("Resultado da função de fatorial é: " + fatorial(5))
