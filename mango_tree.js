"use strict"

// release 0
class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._harvest = []; // ini yang udah dipetik 
    this._harvested = 0; // ini yang udah di keranjang
    this._healtyStatus = true;
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
    return this._healtyStatus;
  }

  get harvested() {

    var good = 0;
    var bad = 0;

    for (var i = 0; i < this._fruits; i++) {
      if (this._harvest[i]._quality == 'Bad') {
        bad += 1;
      } else {
        good += 1;
      }
    }

    return `${this._fruits} : (${good} Good, ${bad} Bad)`

  }


  // Get current states here

  // Grow the tree
  grow() {
    
    this._age += 1;
    
    if (this._age >= 2) {
      this.produceMangoes();
    }
    
    if (this._age <= 10) {
      this._height += Math.round(Math.random()*10);
    } else {
      this._healtyStatus = false;
    }

  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits = Math.round(Math.random()*50); 
  }

  // Get some fruits
  harvest() {

    var arrKeranjang = []

    for (var i = 0; i < this._fruits; i++) {
      var kualitas = Math.round(Math.random());
      if (kualitas <= 0) {
        arrKeranjang.push(new Mango('Bad'));
      } else {
        arrKeranjang.push(new Mango('Good'));
      }
    }

    this._harvest = arrKeranjang;
    
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this._quality = quality;
  }




}

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healtyStatus != false)



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

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
