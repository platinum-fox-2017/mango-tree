"use strict"
const {FruitTree,Fruit} = require('./fruit_tree')

// release 0

class PearTree extends FruitTree {

  constructor() {
    super()
    this.matureAge = Math.floor(Math.random()*(6-4)+4)
    this.maxAge = Math.floor(Math.random()*(30-this.matureAge)+this.matureAge)
    this.maxHeight = 400
  }

  grow() {
    this.ageTree++
    if(this.age > 1 && this.age < this.maxAge && this.heightTree < this.maxHeight){
      this.heightTree+= Math.floor(Math.random()*60) //cm
    }
    if(this.ageTree >= this.matureAge && this.ageTree < this.maxAge && this.heightTree>60){
      this.producePears() 
    } else if(this.ageTree >= this.maxAge){
      this.healthy = false
    }

  }

  producePears() {
    let random = Math.ceil(Math.random()*this.maxAge*5)
    for(let i =0;i<random;i++){
      let pear = new Pear()
      this.totalFruit.push(pear)
    }
    return this.totalFruit
  }


}

class Pear extends Fruit {
  // Produce a mango
  constructor() {
    super()
  
  }
}

module.exports = PearTree

