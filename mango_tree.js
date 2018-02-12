"use strict"

// Release 2
class FruitTree {
  // Initialize a new MangoTree
  constructor() {
    this._age    = 0;
    this._height = 0;
    this._maxFruit = 0;
    this._fruits = [];
    this._harvested = '';
    this._healthyStatus = true;
    this._matureAge = 2;
    this._dieAge = 30;
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
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  grow() {
    let stopGrow  = 10;

    if (this._age < this._matureAge) {
      this._age = this._age + 1;
      this._height   = this._height + Math.floor((Math.random() * 4) + 1);
    } else if (this._age >= this._matureAge && this._age < stopGrow) {
      this._age      = this._age + 1;
      this._height   = this._height + Math.floor((Math.random() * 4) + 1);
    } else if (this._age >= stopGrow && this._age < this._dieAge) {
      this._age      = this._age + 1;
    } else {
      this._healthyStatus = false;
    }
  }

  produceFruit() {
    if (this._age >= this._matureAge && this._healthyStatus == true) {
      this._maxFruit = Math.floor((Math.random() * 20) + 1);
    }
  }

  harvest() {
    if (this._maxFruit > 0) {
      for(let i = 0; i < this._maxFruit; i++) {
        let random = Math.floor((Math.random() * 10) + 1);
        if (random % 2 == 0) {
          var newFruits = new Fruit('bad');
        } else {
          var newFruits = new Fruit('good');
        }
        this._fruits.push(newFruits);
      }
    }

    var ctrGood = 0;
    var ctrBad  = 0;

    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality == 'good') {
        ctrGood = ctrGood + 1;
      } else {
        ctrBad = ctrBad + 1;
      }
    }

    this._harvested = 'Fruits harvested = ' + this._fruits.length + "(" + ctrGood + " good, " + ctrBad + " bad)";
    this._fruits    = [];
  }
}

class Fruit {
  // Produce a mango
  constructor(quality) {
    this.quality = quality;
  }
}

// release 0

class MangoTree extends FruitTree{
  constructor() {
    super();
    this._dieAge = 50;
  }
}

class Mango extends Fruit {
  constructor() {

  }
}

class AppleTree extends FruitTree{
  constructor() {
    super();
    this._dieAge = 30;
  }
}

class Apple extends Fruit {
  constructor() {
  
  }
}


let mangoTree = new MangoTree()

do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)

console.log(" ");

let appleTree = new AppleTree()

do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)