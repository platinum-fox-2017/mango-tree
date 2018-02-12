"use strict"

// release 2

class FruitTree {

  // Initialize a new Fruit Tree
  constructor(age,height,max_fruits,harvested, health) {
    this._age = age || 0;
    this._height =  0;
    this._max_fruits = max_fruits;
    this._harvested = harvested;
    this._health = true;
    this._harvest_fruits = [];
    this._mature_age = Math.floor((Math.random() * 8) + 2);
    this._max_health = Math.floor((Math.random() * 20) + 15);
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
  produceFruit() {
    let counter =0;
    if(this._age > this._mature_age){
      counter = Math.ceil(Math.random()*15);
    }
    for(let i=0; i<counter; i++){
      let fruit = new Fruit;
      this._harvest_fruits.push(fruit);
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

class Fruit {
  // Produce a Fruit
  constructor() {
    this._quality = this.generate_quality();
  }
  generate_quality(){
    let random = Math.random();
    return random < 0.75 ? 'GOOD' : 'BAD';
  }
}

module.exports = {FruitTree, Fruit};
