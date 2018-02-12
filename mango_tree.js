"use strict"
const FruitTree = require('./fruit_tree')

// release 0

class MangoTree extends FruitTree {

  constructor() {
    super()
    this.matureAge = Math.floor(Math.random()*(5-3)+3)
    this.maxAge = Math.floor(Math.random()*(20-this.matureAge)+this.matureAge)
    this.maxHeight = 700
  }

  grow() {
    this.ageTree++
    if(this.age > 1 && this.age < this.maxAge && this.heightTree < this.maxHeight){
      this.heightTree+= Math.floor(Math.random()*100) //cm
    }
    if(this.ageTree >= this.matureAge && this.ageTree < this.maxAge && this.heightTree>100){
      this.produceFruits() 
    } else if(this.ageTree >= this.maxAge){
      this.healthy = false
    }

  }
 


}


module.exports = MangoTree

