"use strict"

const Fruit = require('./tree')

class FruitTree {
  constructor() {
    this._age = 0
    this._mature = 5
    this._maxAge = 20
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
      this.produceFruits()
    }else if(this._age>this._maxAge){
      this._healtyStatus = false     
    }
  }

  produceFruits() {
    let random = Math.floor(Math.random()*20)
    for(let i = 0; i<random; i++){
      let fruit = new Fruit()
      this._fruits.push(fruit)
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

module.exports = FruitTree