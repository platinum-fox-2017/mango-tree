"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = this.harvest()
    this._healtyStatus = true
    this._matureAge = Math.floor(Math.random() * 10) + 1
    this._maxMatureAge = Math.floor(Math.random() * 10) + this._matureAge
    this._maxAge = Math.floor(Math.random() * 10) + this._maxMatureAge
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healtyStatus
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1
    let newHeight = Math.floor(Math.random() * 2) + 1
    if (this._age < this._matureAge) {
      this._height += newHeight
    } else if (this._age >= this._matureAge && this._age <= this._maxMatureAge) {
      this.produceMangoes()
      this._height += newHeight
    } else if (this._age >= this._maxAge) {
      this._healtyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits = []
    let produce = Math.floor(Math.random() * 10) + 1
    for (let i = 0; i < produce; i++) {
      let mango = new Mango()
      // console.log(mango)
      this._fruits.push(mango)
    }

  }

  // Get some fruits
  harvest() {
    // console.log(this._fruits)
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality == 'good') {
        good += 1
      } else {
        bad += 1
      }
    }
    this._harvested = good + bad + ` (good: ${good} bad: ${bad})`
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = this.check_quality()
  }

  check_quality() {
    let randomQuality = Math.round(Math.random() * 1)
    if (randomQuality === 1) {
      return this._quality = 'bad'
    } else {
      return this._quality = 'good'
    }
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
class AppleTree {

  // Initialize a new AppleTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = this.harvest()
    this._healtyStatus = true
    this._matureAge = Math.floor(Math.random() * 10) + 1
    this._maxMatureAge = Math.floor(Math.random() * 10) + this._matureAge
    this._maxAge = Math.floor(Math.random() * 10) + this._maxMatureAge
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healtyStatus
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1
    let newHeight = Math.floor(Math.random() * 2) + 1
    if (this._age < this._matureAge) {
      this._height += newHeight
    } else if (this._age >= this._matureAge && this._age <= this._maxMatureAge) {
      this.produceApples()
      this._height += newHeight
    } else if (this._age >= this._maxAge) {
      this._healtyStatus = false
    }
  }

  // Produce some mangoes
  produceApples() {
    this._fruits = []
    let produce = Math.floor(Math.random() * 10) + 1
    for (let i = 0; i < produce; i++) {
      let apple = new Apple()
      // console.log(mango)
      this._fruits.push(apple)
    }

  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality == 'good') {
        good += 1
      } else {
        bad += 1
      }
    }
    this._harvested = good + bad + ` (good: ${good} bad: ${bad})`
  }
}

class Apple {
  constructor() {
    this._quality = this.check_quality()
  }

  check_quality() {
    let randomQuality = Math.round(Math.random() * 1)
    if (randomQuality === 1) {
      return this._quality = 'bad'
    } else {
      return this._quality = 'good'
    }
  }
}

// Release 2
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = this.harvest()
    this._healtyStatus = true
    this._matureAge = Math.floor(Math.random() * 10) + 1
    this._maxMatureAge = Math.floor(Math.random() * 10) + this._matureAge
    this._maxAge = Math.floor(Math.random() * 10) + this._maxMatureAge
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healtyStatus
  }

  get harvested() {
    return this._harvested
  }

  // Grow the tree
  grow() {
    this._age += 1
    let newHeight = Math.floor(Math.random() * 2) + 1
    if (this._age < this._matureAge) {
      this._height += newHeight
    } else if (this._age >= this._matureAge && this._age <= this._maxMatureAge) {
      this.produceApples()
      this._height += newHeight
    } else if (this._age >= this._maxAge) {
      this._healtyStatus = false
    }
  }

  produceApples() {
    this._fruits = []
    let produce = Math.floor(Math.random() * 10) + 1
    for (let i = 0; i < produce; i++) {
      let apple = new Fruit()
      // console.log(mango)
      this._fruits.push(apple)
    }

  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality == 'good') {
        good += 1
      } else {
        bad += 1
      }
    }
    this._harvested = good + bad + ` (good: ${good} bad: ${bad})`
  }
}
class Fruit {
  constructor() {
    this._quality = this.check_quality()
  }

  check_quality() {
    let randomQuality = Math.round(Math.random() * 1)
    if (randomQuality === 1) {
      return this._quality = 'bad'
    } else {
      return this._quality = 'good'
    }
  }
}

let mangotree = new MangoTree()
// mangotree.grow()
// console.log(mangotree)

do {
  mangotree.grow()
  mangotree.harvest()
  console.log(`[Year ${mangotree.age} Report] Height = ${mangotree.height} m| Fruits harvested = ${mangotree.harvested}`)
} while (mangotree.healtyStatus != false);


