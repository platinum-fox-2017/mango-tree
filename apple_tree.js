"use strict"

// release 1

class AppleTree {

  constructor() {
    this._age = 0
    this._mature = 4
    this._maxAge = 15    
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

  grow() {
    this._age++
    if(this._age < 15){
      this._height+=Math.round(Math.random()*30)
    }
    if(this._age>=this._mature && this._age<=this._maxAge){
      this.produceApple()
    }else if(this._age>this._maxAge){
      this._healtyStatus = false     
    }
  }

  produceApple() {
    let random = Math.floor(Math.random()*20)
    for(let i = 0; i<random; i++){
      let apple = new Apple()
      this._fruits.push(apple)
    }
    return this._fruits
  }

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

class Apple {
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

  // driver code untuk release 1
   let appleTree = new AppleTree()
   do {
    appleTree.grow();
    appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/100} M | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healtyStatus != false)


// Release 2
class FruitTree {}
class Fruit {}
