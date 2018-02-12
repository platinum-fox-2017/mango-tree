"use strict"

// release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor(age,height,fruits,harvest,healtyStatus) {
    this._height = 0
    this._age = 0
    this._fruits = []
    this._healthStatus = true
    this._harvest = 0
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
    return this._healthStatus
  }


  get harvested() {
    return this._harvest

  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age ++
    this._height += Math.floor(Math.random()*4)
    if(this._age > 19){
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let fruits = Math.round(Math.random()*15)
    for(let i = 0 ; i < fruits ; i++){
      let mango = new Mango()
      this._fruits.push(mango)
    }
    return this._fruits
  }

  // Get some fruits
  harvest(){
    let bad = 0
    let good = 0
    for(let i = 0 ; i < this._fruits.length ; i++){
      if(this._fruits[i].quality === 'good'){
        good++
      }else{
        bad++
      }
    }
    this._harvest = `(${good} good , ${bad} bad)`
    return this._harvest
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.quality_fruits()
  }

  quality_fruits(){
    let random = Math.random()*10
    if(random > 3){
      return 'good'
    }else{
      return 'bad'
    }
  }
}



let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/10} M | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)


// Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
