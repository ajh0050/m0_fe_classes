// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(sex, color = "silver") {
    this.gender = sex;
    this.color = color;
  }
  say(statement) {
    console.log(`*~* ${statement} *~*`);
  }
}
var unicorn1 = new Unicorn("sex", "blue" )
console.log(unicorn1);
unicorn1.say("Hi friends")


// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name, pet = "bat", thirsty = true){
    this.name = name;
    this.pet = pet;
    this.thirsty = thirsty;
  }
  drink(){
    this.thirsty = false;
  }
}

var vampire1 = new Vampire("vlad")
console.log(vampire1);

vampire1.drink()
console.log(vampire1);


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have an eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
 class Dragon {
   constructor(name,rider,color,isHungry = true, timesEaten = 0){
     this.name = name;
     this.rider = rider;
     this.color = color;
     this.isHungry = isHungry;
     this.timesEaten = timesEaten;
   }

   eat(){
     this.timesEaten++
     if (this.timesEaten >= 4) {
       this.isHungry = false;
     }
   }
 }
 var dragon1 = new Dragon("saphira","eragon","blue")

console.log(dragon1);

dragon1.eat()
dragon1.eat()
dragon1.eat()
dragon1.eat()

console.log(dragon1)

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name,disposition,age = 0, isAdult = false, isOld = false, hasRing){
    this.name = name;
    this.disposition = disposition;
    this.age = age;
    this.age >= 33 ? this.isAdult = true : this.isAdult = false;
    this.age >= 101 ? this.isOld = true : this.isOld = false;
    this.name === "Frodo" ? this.hasRing = true : this.hasRing = false;
  }

  celebratesBirthday(){
    this.age++
    if (this.age>= 33){
      this.isAdult = true;
    }
    if (this.age >= 101) {
      this.isOld = true;
    }
  }
}

var hobbit1 = new Hobbit("Frodo","caring",32)
console.log(hobbit1);
hobbit1.celebratesBirthday()
console.log(hobbit1);
