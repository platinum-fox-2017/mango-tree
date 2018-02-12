"use strict"
// Release 2
class FruitTree {
  constructor(name) {
    this._name = name
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
      let fruit = new Fruit()
      // console.log(mango)
      this._fruits.push(fruit)
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

// release 0

class MangoTree extends FruitTree {
  constructor() {
    super('MangoTree')
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super()
  }
}

// Release 1
class AppleTree extends FruitTree {

  // Initialize a new AppleTree
  constructor() {
    super('AppleTree')
  }
}

class Apple extends Fruit {
  constructor() {
    super()
  }

}

let mangotree = new MangoTree()


let appletree = new AppleTree()
do {
  appletree.grow()
  appletree.harvest()
  console.log(`[Year ${appletree._name} ${appletree.age} Report of ] Height = ${appletree.height} m| Fruits harvested = ${appletree.harvested}`)
} while (appletree.healtyStatus != false)


