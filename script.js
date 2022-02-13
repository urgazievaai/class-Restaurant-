class Restaurant {
  constructor(name, cuisineType, served){
    this.name = name;
    this.cuisineType = cuisineType;
    this.served = served;
  }

  showInfo(){
    return `restaurant ${this.name}, ${this.cuisineType} meal.`
  }

  isOpen(){
    let currentHours = new Date().getHours();
    if(currentHours > 9 && currentHours < 22 ){
      return `${this.name} is opened.`
    } else {
      return `${this.name} is closed.`
    }
  }
  serve(){
   return this.served ++;
   }
  set setServed(value){
    return this.served += value;
  }
  showTotalServed(){
    return this.served;
  }
 }
  
  


const asman = new Restaurant ('Asman', 'asian', 0);

console.log(asman);
console.log(asman.showInfo());

console.log(asman.isOpen());
console.log(asman.serve());
console.log(asman.serve());
console.log(asman.setServed = 20);
console.log(asman.showTotalServed());



