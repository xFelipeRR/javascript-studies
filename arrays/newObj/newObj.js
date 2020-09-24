// A propriedade new cria um novo objeto por meio de uma função construtora
 // A qual será usada os seus parametros para criar os novos objetos

 function Car(make, model, year) { // parametros da funcao construtora
    this.make = make;
    this.model = model;   
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993); // nova criação de objeto
  
  console.log(car1.make);
  // -> 'Eagle'
