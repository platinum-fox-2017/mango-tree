"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age    = 0;
    this.height = 0;
    this.maxFruit = 0;
    this.fruits = [];
    this.harvested = fruits.length;
    this.healtyStatus = true;
  }

  get age() {
    return this.age;
  }

  get height() {
    return this.height;
  }

  get fruits() {
    return this.fruits;
  }

  get healtyStatus() {
    return this.healtyStatus;
  }

  get harvested() {
    return this.harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality;
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

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
