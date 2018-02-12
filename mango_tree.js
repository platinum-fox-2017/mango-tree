"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._max_fruits = 0
    this._fruits = []
    this._harvested = null
    this._healthyStatus = true
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


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= 25){ //pohon tumbuh sampai umur 25
      this._height += Math.floor(Math.random()*100)
    }
    if(this._age >= 30){ //pohon mati saat umur lebih dari 30
      this._healthyStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age >= 3){ //pohon berbuah saat umur 3
      this._max_fruits += Math.floor(Math.random()*30)
    }
    for(let i=0; i<this._max_fruits; i++){
      let mango = new Mango
      this._fruits.push(mango)
    }
    return this
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for(let i=0; i<this._max_fruits; i++){
      let random = Math.round(Math.random()*10)
      if(random > 3){
        good++
      }
      else if(random < 4){
        bad++
      }
    }
    this._max_fruits = 0
    this._harvested = `${good+bad} (${good} good, ${bad} bad)`
    return this
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = null
  }
}

// let mangoTree = new MangoTree
// mangoTree.grow()
// mangoTree.grow()
// mangoTree.grow()
// mangoTree.grow()
// mangoTree.produceMangoes()
// console.log(mangoTree.harvest());
// console.log(mangoTree);


// driver code untuk release 0
let mangoTree = new MangoTree()
console.log('Pohonnya hidup!');
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/100} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)
console.log('Pohonnya mati :(');


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
