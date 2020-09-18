function fib(n) {
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 2;
    }
        console.log(n + " - console")
        return fib(n-1) + fib(n-2); // Formula de fibonacci
}
console.log("Resultado da função:" + fib(6))