"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.tree_age = 0
    this.tree_height = 0
    this.fruits_bloomed = 0
    this.fruits_harvested = []
    this.healthy = true
    this.goodFruit = 0
    this.badFruit = 0
  }

  get age() {
    return this.tree_age
  }

  get height() {
    return this.tree_height
  }

  get fruits() {
    return this.fruits_bloomed
  }

  get healthyStatus() {
    return this.healthy
  }

  get harvested() {
    return this.fruits_harvested
  }
  // Get current states here

  rng(input){
    if (!input) {
      input = 1
    }
    let rng = Math.round(Math.random()*input)
    return rng
  }
  // Grow the tree
  grow() {
    if (this.tree_age === 0) {
      console.log('The Tree is alive! :smile:');
    }
    // if age above 5 start bearing fruits
    if (this.tree_age >= 21) {
      this.healthy = false
      return console.log('Mango tree has withered!')
    }
    if (this.tree_age <= 10) {
      this.tree_height += this.rng(30)
    }
    this.tree_age += 1
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.tree_age >= 5) {
      if (this.healthy) {
        this.fruits_bloomed = 1 + this.rng(4)
      } else {
        this.fruits_bloomed = 3 + this.rng(7)
      }
    }
  }

  // Get some fruits
  harvest() {
    let basket = []
    this.goodFruit = 0
    this.badFruit = 0
    for (let i = 0; i < this.fruits_bloomed; i++) {
      let newMango = new Mango(this.healthy)
      if (newMango.quality === 'bad') {
        this.badFruit += 1
      } else {
        this.goodFruit += 1
      }
      basket.push(newMango)
    }
    let harvestAmount = basket.length
    this.fruits_harvested = basket
    this.fruits_bloomed = 0
  }

}

class Mango {
  // Produce a mango
  constructor(healthy) {
    this.quality = this.quality_of_mango(healthy)
  }

  quality_of_mango(healthy){
    let rng = Math.round(Math.random()*100)
    let threshold = 0
    if (this.healthy === true) {
      threshold = 25
    } else {
      threshold = 45
    }
    if (rng < threshold) {
      return 'bad'
    } else {
      return 'good'
    }
  }
}


 // driver code untuk release 0
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
  console.log(`[Year ${mangoTree.tree_age} Report] Height = ${mangoTree.tree_height/10}m | Fruits harvested = ${mangoTree.fruits_harvested.length} (${mangoTree.goodFruit} good, ${mangoTree.badFruit} bad)`)
 } while (mangoTree.healthyStatus != false)


// Release 1
class AppleTree {
  // Initialize a new AppleTree
  constructor() {
    this.tree_age = 0
    this.tree_height = 0
    this.fruits_bloomed = 0
    this.fruits_harvested = []
    this.healthy = true
    this.goodFruit = 0
    this.badFruit = 0
  }

  get age() {
    return this.tree_age
  }

  get height() {
    return this.tree_height
  }

  get fruits() {
    return this.fruits_bloomed
  }

  get healthyStatus() {
    return this.healthy
  }

  get harvested() {
    return this.fruits_harvested
  }
  // Get current states here

  rng(input){
    if (!input) {
      input = 1
    }
    let rng = Math.round(Math.random()*input)
    return rng
  }
  // Grow the tree
  grow() {
    if (this.tree_age === 0) {
      console.log('The Tree is alive! :smile:');
    }
    // if age above 5 start bearing fruits
    if (this.tree_age >= 30) {
      this.healthy = false
      return console.log('Apple tree has withered!')
    }
    if (this.tree_age <= 10) {
      this.tree_height += this.rng(60)
    }
    this.tree_age += 1
  }

  // Produce some mangoes
  produceApples() {
    if (this.tree_age >= 5) {
      if (this.healthy) {
        this.fruits_bloomed = 9 + this.rng(4)
      } else {
        this.fruits_bloomed = 18 + this.rng(7)
      }
    }
  }

  // Get some fruits
  harvest() {
    let basket = []
    this.goodFruit = 0
    this.badFruit = 0
    for (let i = 0; i < this.fruits_bloomed; i++) {
      let newApple = new Apple(this.healthy)
      if (newApple.quality === 'bad') {
        this.badFruit += 1
      } else {
        this.goodFruit += 1
      }
      basket.push(newApple)
    }
    let harvestAmount = basket.length
    this.fruits_harvested = basket
    this.fruits_bloomed = 0
  }
}
class Apple {
  // Produce an apple
  constructor(healthy) {
    this.quality = this.quality_of_apple(healthy)
  }

  quality_of_apple(healthy){
    let rng = Math.round(Math.random()*100)
    let threshold = 0
    if (this.healthy === true) {
      threshold = 25
    } else {
      threshold = 45
    }
    if (rng < threshold) {
      return 'bad'
    } else {
      return 'good'
    }
  }
}


let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
 console.log(`[Year ${appleTree.tree_age} Report] Height = ${appleTree.tree_height/10}m | Fruits harvested = ${appleTree.fruits_harvested.length} (${appleTree.goodFruit} good, ${appleTree.badFruit} bad)`)
} while (appleTree.healthyStatus != false)

// Release 2
class FruitTree {
  // Initialize a new Tree
  constructor(treeName, deathAge, growAge) {
    this.tree_age = 0
    this.tree_height = 0
    this.fruits_bloomed = 0
    this.fruits_harvested = []
    this.healthy = true
    this.goodFruit = 0
    this.badFruit = 0
    this.death_age = deathAge || 20
    this.tree_name = treeName
    this.alive = true
    this.growing_age = growAge || 5
  }

  get aliveStatus(){
    return this.alive
  }

  get age() {
    return this.tree_age
  }

  get height() {
    return this.tree_height
  }

  get fruits() {
    return this.fruits_bloomed
  }

  get healthyStatus() {
    return this.healthy
  }

  get harvested() {
    return this.fruits_harvested
  }

  rng(input){
    if (!input) {
      input = 1
    }
    let rng = Math.round(Math.random()*input)
    return rng
  }

  grow() {
    if (this.tree_age === 0) {
      console.log(`The ${this.tree_name} Tree is alive! :smile:`);
    }
    // if age above 5 start bearing fruits
    if (this.tree_age >= this.death_age) {
      this.healthy = false
      this.alive = false
      return console.log(`The ${this.tree_name} tree has withered!`)
    }
    if (this.tree_age <= 10) {
      this.tree_height += this.rng(60)
    }
    let healthCheck = 100 - this.tree_age
    let healthNow = this.rng(100)
    if (healthNow > healthCheck) {
      this.healthy = false
    } else {
      this.healthy = true
    }
    this.tree_age += 1
  }

  produceFruit() {
    if (this.tree_age >= this.growing_age) {
      if (this.healthy) {
        this.fruits_bloomed = 9 + this.rng(4)
      } else {
        this.fruits_bloomed = 18 + this.rng(7)
      }
    }
  }

  harvest() {
    let basket = []
    this.goodFruit = 0
    this.badFruit = 0
    for (let i = 0; i < this.fruits_bloomed; i++) {
      let newfruit = new Fruit(this.healthy, this.tree_name)
      if (newfruit.quality === 'bad') {
        this.badFruit += 1
      } else {
        this.goodFruit += 1
      }
      basket.push(newfruit)
    }
    let harvestAmount = basket.length
    this.fruits_harvested = basket
    this.fruits_bloomed = 0
  }
}
class Fruit {
  // Produce a fruit
  constructor(healthy, treeName) {
    this.quality = this.quality_of_fruit(healthy)
    this.name = treeName
  }

  quality_of_fruit(healthy){
    let rng = Math.round(Math.random()*100)
    let threshold = 0
    if (this.healthy === true) {
      threshold = 25
    } else {
      threshold = 45
    }
    if (rng < threshold) {
      return 'bad'
    } else {
      return 'good'
    }
  }
}


class PearTree extends FruitTree {
  constructor(treeName, deathAge, growAge) {
    super(treeName, deathAge, growAge)
  }
}
class Pear extends Fruit {
  constructor() {
    super()
  }
}
// driver code untuk release 0
let pearTree = new PearTree('Pear', 19, 4)
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
 console.log(`[Year ${pearTree.tree_age} Report] Height = ${pearTree.tree_height/10}m | Fruits harvested = ${pearTree.fruits_harvested.length} (${pearTree.goodFruit} good, ${pearTree.badFruit} bad)`)
} while (pearTree.aliveStatus != false)
