"use strict"

// release 0

class Tree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._healthy = true;
    this._harvested = [];
    this.maxAge = 20;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthy;
  }

  get harvested() {
    return this._harvested;
  }

  grow() {
    this._age++;
    if(this._age<15){
      this._height += this.randomGrowth();
    }
    if(this._age<=3){
      console.log(`[Year ${this._age} Report] Height = ${this._height.toFixed(2)} m | Fruits harvested = 0 (0 good, 0 bad)`);
    } else if(this._age>3 && this._age<20){
      console.log(`[Year ${this._age} Report] Height = ${this._height.toFixed(2)} m | Fruits harvested = ${this.harvest()}`);
    } else if(this._age===this.maxAge){
      console.log(`[Year ${this._age} Report] Height = ${this._height.toFixed(2)} m | Fruits harvested = ${this.harvest()}`);
      this._healthy = false;
      console.log(`The tree has met its end. :sad:`);
    }
  }

  randomGrowth(){
    return (Math.random()*2)/1.5;
  }

  randomFruits(){
    return (Math.round(Math.random()*15))+1;
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits = this.randomFruits();
    let array = [];
    for(let i=0; i<this._fruits; i++) {
      let quality = Math.floor(Math.random()*2);
      if(quality<1) {
        array.push('good');
      } else {
        array.push('bad');
      }
    }
    this._harvested = array;
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    for(let i=0; i<this._harvested.length; i++){
      if(this._harvested[i]==='good'){
        good++;
      } else {
        bad++;
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`
  }

}

class Mango extends Tree {
  constructor() {
    super();
  }
}

class Apple extends Tree {
  constructor() {
    super();
  }
  randomGrowth(){
    return (Math.random()*2)/1.75;
  }

  randomFruits(){
    return (Math.round(Math.random()*25))+1;
  }
}

class Peer extends Tree {
  constructor() {
    super();
  }
  randomGrowth(){
    return (Math.random()*2)/1.75;
  }

  randomFruits(){
    return (Math.round(Math.random()*25))+1;
  }
}


// let mangoTree = new Mango();
// console.log('Mango Tree~');
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
// } while (mangoTree.healthyStatus !== false);

let appleTree = new Apple();
console.log('Apple Tree~');
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
} while (appleTree.healthyStatus !== false);

// let peerTree = new Peer();
// console.log('Peer Tree~');
// do {
//   peerTree.grow();
//   peerTree.produceMangoes();
//   peerTree.harvest();
// } while (peerTree.healthyStatus !== false);
