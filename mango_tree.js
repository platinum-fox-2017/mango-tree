"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = null;
    this._healthy_status = true;
    this._harvested = null;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height + ' m';
  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this._healthy_status;
  }

  get harvested() {
    let goodFruits = 0;
    let badFruits = 0;
    for(var i = 0; i < this._harvested.length; i++){
      if(this._harvested[i].quality === 'good')  {
        goodFruits++ ;
      } else {
        badFruits++;  
      }
    }
    return `${this._harvested.length} (${goodFruits} good, ${badFruits} bad)`;
  }
  // Get current states here

  // Grow the tree
  grow() {
    if(this.age < 20){
      this._age = this.age + 1;
      this._height = Number(Number(this._height) + Math.random() * 0.9).toFixed(2) ;
    }
    if(this.age === 20) {
      this._healthy_status = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let maxManggo  = Math.floor(Math.random()  * Math.floor(8)); 
    let fruits = []
    for(var i = 0; i < maxManggo; i++){
      fruits.push(new Mango());
    }
    this._fruits = fruits;
  }

  // Get some fruits
  harvest() {
    this._harvested = this._fruits;
  }

}
class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.generateQuality();
  }
  generateQuality(){
     let randNum = Math.floor(Math.random() * Math.floor(2)); 
     if(randNum > 0){
       return 'good'  ;
     } else {
       return 'bad' ;
     }
  }
  
}


/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

let mangoTree = new MangoTree();
console.log('Mango')
console.log('The tree is alive! :smile:');
while(mangoTree.healtyStatus){
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
}
console.log('The tree has met its end! :sad:');
console.log('========================================')

// Release 1
class AppleTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = null;
    this._healthy_status = true;
    this._harvested = null;
    this._diameter = 10;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height + ' m';
  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this._healthy_status;
  }

  get harvested() {
    let goodFruits = 0;
    let badFruits = 0;
    for(var i = 0; i < this._harvested.length; i++){
      if(this._harvested[i].quality === 'good')  {
        goodFruits++ ;
      } else {
        badFruits++;  
      }
    }
    return `${this._harvested.length} (${goodFruits} good, ${badFruits} bad)`;
  }
  // Get current states here

  // Grow the tree
  grow() {
    if(this.age < 20){
      this._age = this.age + 1;
      this._height = Number(Number(this._height) + Math.random() * 0.9).toFixed(2) ;
    }
    if(this.age === 20) {
      this._healthy_status = false;
    }
  }

  // Produce some apples
  produceApples() {
    let maxApple  = Math.floor(Math.random()  * Math.floor(8)); 
    let fruits = []
    for(var i = 0; i < maxApple; i++){
      fruits.push(new Apple());
    }
    this._fruits = fruits;
  }

  // Get some fruits
  harvest() {
    this._harvested = this._fruits;
  }

}
class Apple{
  // Produce a mango
  constructor() {
    this.quality = this.generateQuality();
  }
  generateQuality(){
     let randNum = Math.floor(Math.random() * Math.floor(2)); 
     if(randNum > 0){
       return 'good'  ;
     } else {
       return 'bad' ;
     }
  }
  
}
let appleTree = new AppleTree();
console.log('Apple')
console.log('The tree is alive! :smile:');
while(appleTree.healtyStatus){
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
}
console.log('The tree has met its end! :sad:');
console.log('========================================')


// Release 2
class FruitTree {}
class Fruit {}
