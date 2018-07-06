'use strict'
const Fruit = require('./fruit');

class Tree {
  constructor(maxHeight, matureAge, prodAge, maxAge) {
    this._age = 0
    this._height = 0
    this.prodAge = prodAge
    this.maxHeight = maxHeight
    this.matureAge = matureAge
    this.maxAge = maxAge
    this.fruitCap = []
    this._harvested = 0
    this._healthyStatus = true
  }
  get age() {
       return this._age
   }

   get height() {
       return this._height

   }

   get fruits() {
       return this._fruitcap
   }

   get healtyStatus() {
       return this._healthyStatus
   }

   get harvested() {
       return this._harvested
   }
   grow() {
     this._age++
     if(this._age > 1 && this._height <= this.maxHeight) {
       this._height += Math.floor(Math.random() * 5)
     }
     if(this._age >= this.maxAge) {
       this._healthyStatus = false
     }
     return this
   }
   produceFruits() {
     if(this._age >= this.prodAge && this._height <= this.maxHeight && this._age <= this.matureAge) {
       let randomProduced = Math.floor(Math.random() * 50)
       for(let i = 0; i < randomProduced; i++) {
         let fruit = new Fruit
         this.fruitCap.push(fruit)
       }
     }
     // console.log(this.fruitCap);
     return this.fruitCap
   }
   harvest() {
     let good = 0
     let bad = 0
     for (let i = 0; i < this.fruitCap.length; i++) {
       if(this.fruitCap[i].quality === 'good') {
         good++
       } else {
         bad++
       }
     }
     this.fruitCap = []
     this._harvested = `${good + bad} mangoes, (${good} good, ${bad} bad)`
     return this
   }
}

module.exports = Tree
