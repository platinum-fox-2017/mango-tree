"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._mature = 5
    this._height = 0
    this._fruits = []
    this._harvested = []
    this._healtyStatus = true
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
    this._age++
    if(this._age < 15){
      this._height+=Math.round(Math.random()*30)
    }
    if(this._age>=this._mature && this._age<22){
      this.produceMangoes()
    }else if(this._age>20){
      this._healtyStatus = false     
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random()*20)
    for(let i = 0; i<random; i++){
      let mango = new Mango()
      this._fruits.push(mango)
    }
    return this._fruits
  }

  // Get some fruits
  harvest() {
    let countGood = 0
    let countBad = 0
    for(let i = 0; i<this._fruits.length; i++){
      if(this._fruits[i].quality === 'good'){
        countGood++
      }else{
        countBad++
      }
    }
    this._fruits.length=0
    this._harvested = `${countGood+countBad} (${countGood} good, ${countBad} bad)`
    return this._harvested
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.checkQuality()
  }
  checkQuality(){
    let random = Math.floor(Math.random()*10)
    if(random>3){
      this.quality = 'good'
    }else{
      this.quality = 'bad'
    }
    return this.quality
  }
}


  // driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/100} M | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healtyStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
