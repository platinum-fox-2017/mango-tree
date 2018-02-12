"use strict"

class FruitTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healtyStatus = true
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
    return this._healtyStatus;
  }

  get harvested() {
    let good = 0;
    let bad = 0;

    for (var i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality == 'good') good++;
      else bad++;
    }

    return `${this._fruits.length} (${good} good, ${bad} bad)`
  }


  // Get current states here

  // Grow the tree
  grow() {}

  // Produce some fruits
  produceFruits() {
    this._fruits = Math.floor((Math.random() * 10)) + 1;
  }

  // Get some fruits
  harvest() {
    let fruits = [];
    for (let i = 0; i < this._fruits; i++) {
      if (Math.floor((Math.random() * 2)) + 1 == 1) fruits.push(new Fruit('good'));
      else fruits.push(new Fruit('bad'));
    }
    this._fruits = fruits;
  }
}

class Fruit {
  constructor(quality) {
    this._quality = quality;
  }
}

// release 0

class MangoTree extends FruitTree {
  grow() {
    this._age++;

    if (this._age < 25) {
      if (this._age > 5) this.produceFruits();
      this._height += (Math.floor((Math.random() * 10)) + 1 ) / 10;
    } else this._healtyStatus = false;
  }
}
class Mango extends Fruit {}

class AppleTree extends FruitTree {
  grow() {
    this._age++;

    if (this._age < 20) {
      if (this._age > 2) this.produceFruits();
      this._height += (Math.floor((Math.random() * 10)) + 1 ) / 10;
    } else this._healtyStatus = false;
  }

  produceFruits() {
    this._fruits = Math.floor((Math.random() * 20)) + 1;
  }
}
class Apple extends Fruit {}

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

let mangoTree = new MangoTree()

console.log('The Mango tree is alive! :smile:');
do {
  mangoTree.grow();
  // mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healtyStatus != false)
console.log('The Mango tree has met its end. :sad:');

let appleTree = new AppleTree()

console.log('The Apple tree is alive! :smile:');
do {
  appleTree.grow();
  // appleTree.produceapplees();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healtyStatus != false)
console.log('The Apple tree has met its end. :sad:');
