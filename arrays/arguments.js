function ola(){
    for(var i = 0; i < arguments.length; i++){
        var params = i + " - " + arguments[i]
        console.log(params)
    }
}

ola("Felipe", "José", "Lucas")