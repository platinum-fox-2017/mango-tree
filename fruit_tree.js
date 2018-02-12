"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.fruits = []
    this.healthy = true;
    this.harvested = 0
  }


  get ageTree() {
    return this.age
  }

  get heightTree() {
    return this.height

  }

  get fruitsTree() {
    return this.fruits
  }

  get healthyStatusTree() {
    return this.healthyStatus
  }

  get harvestedTree() {
    return this.harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
      this.age++
      if (this.age < 50) {
        this.height += Math.floor(Math.random()*50);

      } else if (this.age > 50) {
        this.healthy = false;
      }
    }

  // Produce some mangoes
  produceFruits() {
    if(this.age>3){
      for(let i =0;i<(Math.round(Math.random()*30));i++){
        let buah = new Fruit
        this.fruits.push(buah)
      }
    }
    return this.fruits
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for(let i =0;i<this.fruits.length;i++){
      if(this.fruits[i].quality === 'good'){
        good++
      } else {
        bad++
      }
    }
    this.fruits = [];
    this.harvested = `${good + bad} (${good} good, ${bad} bad)`
    return this;

  }

}

class Fruit {
    constructor() {
      this.quality = this.selektorBuah();
    }
    selektorBuah () {
      let random = Math.random()
      if(random < 0.75){
        return 'good'
      } else {
        return 'bad'
      }
    }
}

module.exports = {FruitTree,Fruit}
