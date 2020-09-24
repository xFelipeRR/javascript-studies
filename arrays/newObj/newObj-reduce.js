function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);

  car1Array = [car1.make, car1.model, car1.year] // como a variavel vem como objeto, não é possivel
  var all = car1Array.reduce((total, item) => {  // usar metodos de arrat, e por isso é preciso
      return total +=item+','+' ' ;              // transforma-la em um
  })
  
  console.log(all)