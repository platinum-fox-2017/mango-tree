"use strict"

// release 0

class MangoTree {

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

  produceMangoes() {
    if (this._age >= this._matureAge && this._healthyStatus == true) {
      this._maxFruit = Math.floor((Math.random() * 20) + 1);
    }
  }

  harvest() {
    if (this._maxFruit > 0) {
      for(let i = 0; i < this._maxFruit; i++) {
        let random = Math.floor((Math.random() * 10) + 1);
        if (random % 2 == 0) {
          var mangoes = new Mango('bad');
        } else {
          var mangoes = new Mango('good');
        }
        this._fruits.push(mangoes);
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

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality;
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
// console.log(mangoTree.harvest());
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._healthyStatus != false)


// Release 1
class AppleTree {

}

class Apple {

}

// Release 2
class FruitTree {

}
class Fruit {

}
