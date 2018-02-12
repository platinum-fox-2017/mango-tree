"use strict"

// release 1

class AppleTree {

  // Initialize a new AppleTree
  constructor(age,height,max_fruits,harvested, health) {
    this._age = age || 0;
    this._height =  0;
    this._max_fruits = max_fruits;
    this._harvested = harvested;
    this._health = true;
    this._harvest_fruits = [];
    this._mature_age = Math.floor((Math.random() * 7) + 3);
    this._max_health = Math.floor((Math.random() * 22) + 14);
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._max_fruits;
  }

  get healtyStatus() {
    return this._health;
  }

  get harvested() {
    return this._harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if(this._age === this._max_health){
      this._health = false;
    }
    if(this._age > 17){
      this._height += 1;
    } else if(this._age >= this._mature_age){
      this._height += Math.floor((Math.random() * 5) + 1);
    } else {
      this._height += 1;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let counter =0;
    if(this._age > this._mature_age){
      counter = Math.ceil(Math.random()*15);
    }
    for(let i=0; i<counter; i++){
      let manga = new Mango;
      this._harvest_fruits.push(manga);
    }
    return this;
  }

  // Get some fruits
  harvest() {
    let good =0; 
    let bad =0;
    for(let i=0; i<this._harvest_fruits.length; i++){
       this._harvest_fruits[i]._quality === 'GOOD'? good += 1 : bad += 1;
    }
    this._harvest_fruits =[];
    this._harvested = `${good + bad} (${good} GOOD, ${bad} BAD)`
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = this.generate_quality();
  }
  generate_quality(){
    let random = Math.random();
    return random < 0.75 ? 'GOOD' : 'BAD';
  }
}


// driver code untuk release 0
let appleTree = new AppleTree()
console.log(`The Apple Tree is Alive ! SMILE :D`)
console.log('Maturity age: '+ appleTree._mature_age);
console.log('Maximum age : '+ appleTree._max_health);
  do {
        appleTree.grow();
        appleTree.produceMangoes();
        appleTree.harvest();
      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree.harvested}`)
    } while (appleTree._health != false)
console.log(`The Apple Tree has met its end. :C`)
