"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._minAgeToHarvest = 5;
    this._maxAge = 19;
    this._height = 0;
    this._fruits = [];
    this._healty = true;
    this._harvested = [];
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

  get healtyStatus() {
    return this._healty;
  }

  get harvested() {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow() {
    if(this._age <= this._maxAge){
      this._height += Math.floor(Math.random() * 5);
    }
    if(this._age >= this._maxAge){
      this._healty= false;
    }
    this._age++;
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random()*20);
    for(let i = 0; i<random; i++){
      let mango = new Mango();
      this._fruits.push(mango);
    }
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    let goodQuality = 0;
    let badQuality = 0;
    for(let i=0; i<this._fruits.length; i++){
      if(this._fruits[i].quality === 'good'){
        goodQuality += 1;
      }else{
        badQuality += 1;
      }
    }
    this._fruits.length = 0;
    this._harvested = `${goodQuality+badQuality} (${goodQuality} good, ${badQuality} bad)`
    return this._harvested
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.checkQuality()
  }

  checkQuality(){
    let num = Math.floor(Math.random()*100)
    if(num>25){
      this.quality = 'good';
    }else{
      this.quality = 'bad';
    }
    return this.quality;
  }

}


  //driver code untuk release 0
  console.log('The tree is alive! :smile:');
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/10} m | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healtyStatus != false)
  console.log('The tree has met its end :sad:')

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
