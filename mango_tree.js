"use strict"

class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._healthyStatus = true
    this._mature = 7
    this._old = 10
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

  get healthyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._harvested
  }
  // Grow the tree
  grow() {
    this._age++
    if(this._height < 40) {
      this._height += Math.round(Math.random()*5)
    } else if(this._age >= this._mature && this._age <= this.old) {
      this.produceMangoes()
    } else if(this._age >= this._old) {
      this._healthyStatus = false
    }
  }

  produceFruits() {
    let total = Math.round(Math.random()*30)
    for(let i = 0; i < total; i++) {
      let fruits = new Fruit()
      this._fruits.push(fruits) // mango
    }
    return this._fruits
  }

  harvest() {
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality === 'good') {
        good++;
      } else {
        bad++
      }
    }
    this._harvested = `${good} good, ${bad} bad`
  }
}

class Fruit {
  constructor() {
    this.quality = this.quality_check()
  }

  quality_check() {
    let value = Math.round(Math.random()*5)
    if(value < 3) {
      return `bad`
    } else {
      return `good`
    }
  }
}


class MangoTree extends FruitTree {
  constructor() {
    super()
    this._mature = 7
    this._old = 17
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

class AppleTree extends FruitTree {
  constructor() {
    super()
    this._mature = 5
    this._old = 25
    this._color = ''
  }

  get color() {
    return this._color
  }

  produceFruits() {
    let total = Math.round(Math.random()*30)
    for(let i = 0; i < total; i++) {
      let fruits = new Apple()
      this._fruits.push(fruits) // mango
    }
    return this._fruits
  }

  produceColor() {
    let red = 0
    let green = 0
    debugger
    for(let i = 0; i < this._fruits.length; i++) {
      debugger
      if(this._fruits[i].color === 'red') {
        red++;
      } else {
        green++
      }
    }
    
    this._color = `${red} red, ${green} green`
  }
}

class Apple extends Fruit {
  constructor() {
    super()
    this.color = this.color()
  }

  color() {
    let value = Math.round(Math.random()*5)
    if(value < 3) {
      return `green`
    } else {
      return `red`
    }
  }
}


//--------------------------------------------
// driver code untuk release 0
let mango_tree = new MangoTree()
let mango = new Mango()
do {
  mango_tree.grow();
  mango_tree.produceFruits();
  mango_tree.harvest();
  console.log(`[Year ${mango_tree.age} Report] Height = ${mango_tree.height} | Fruits harvested = ${mango_tree.harvested}`)
} while (mango_tree.healthyStatus !== false)

let apple_tree = new AppleTree()
let apple = new Apple()
do {
  apple_tree.grow();
  apple_tree.produceFruits();
  apple_tree.harvest();
  apple_tree.produceColor();
  console.log(`[Year ${apple_tree.age} Report] Height = ${apple_tree.height} | Fruits harvested = ${apple_tree.harvested} | Colors = ${apple_tree.color}`)
} while (apple_tree.healthyStatus !== false)