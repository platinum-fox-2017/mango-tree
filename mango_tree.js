"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this.fruitCap = []
    this._harvested = 0
    this._healthyStatus = true
  }

  get age() {
    return this.age
  }

  get height() {
    return this.height
  }

  get fruits() {
    return this.fruit
  }

  get healthyStatus() {
    return this.healthyStatus
  }

  get harvested() {
    return this.harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if(this._age > 1) {
      this._height += Math.floor(Math.random() * 5)
    }
    if(this._age >= 30) {
      this._healthyStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    let randomProduced = Math.floor(Math.random() * 20)
    for(let i = 0; i < randomProduced; i++) {
      let mango = new Mango
      this.fruitCap.push(mango)
    }
    // console.log(this.fruitCap);
    return this.fruitCap
  }

  // Get some fruits
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

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.quality()
  }
  quality() {
    let quality = Math.floor(Math.random() * 6)
    if(quality > 3) {
      return 'good'
    } else {
      return 'bad'
    }
  }
}


// driver code untuk release 0
  let mangoTree = new MangoTree()
  // console.log(mangoTree.produceMangoes());
  console.log(`The Tree is Alive!! :)`);
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
   } while (mangoTree._healthyStatus != false)
   console.log(`Good Bye Tree, thank you for your fruits... :sad:`);
   console.log(`====================================================`);


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
