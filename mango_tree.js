"use strict"

// Release 3
class FruitTree {

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

  grow() {
    if(this._age <= this._maxAge){
      this._height += Math.floor(Math.random() * 5);
    }
    if(this._age >= this._maxAge){
      this._healty= false;
    }
    this._age++;
  }

  produceFruit() {
    let random = Math.floor(Math.random()*20);
    for(let i = 0; i<random; i++){
      let mango = new Fruit();
      this._fruits.push(mango);
    }
    return this._fruits;
  }

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

class Fruit {
  // Produce a fruit
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

class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor() {
    super();
    this._minAgeToHarvest = 5;
    this._maxAge = 19;
  }
}

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor() {
    super();
    this._minAgeToHarvest = 2;
    this._maxAge = 14;
  }
}


console.log('The mango tree is alive! :smile:');
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/10} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healtyStatus != false)
console.log('The tree has met its end :sad:')
console.log('\n')
console.log('The apple tree is alive! :smile:');
  let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/10} m | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healtyStatus != false)
  console.log('The tree has met its end :sad:')