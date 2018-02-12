"use strict"

// release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._harvested = 0 //total yang dipetik
    this._harvest = [] //ini yang dipetik
    this._status = true
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
    return this._status
  }

  get harvested() {
    let good = 0
    let bad = 0
    for(let i=0; i<this._harvest.length; i++) {
      if(this._harvest[i]._quality == 'good') {
        good+=1
      } else {
        bad +=1
      }
    }
    return `${this._fruits} (${good}, ${bad})`
  }


  // Get current states here

  // Grow the tree
  grow() {
    //setiap tahun bertambah
    this._age += 1

    //setelah umur 3, baru berbuah
    if(this._age > 3) {
      this.produceMangoes()
    }

    //setelah berumur 15 tahun, sudah tidak bertambah tinggi dan tidak berbuah (mati)
    if(this._age < 15) {
      this._height += Math.floor(Math.random()*2)
    } else {
      this._status = false
    }

  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits = Math.floor(Math.random()*10)
  }

  // Get some fruits
  harvest() {
    let harvest = []
    for(let i=0; i<this._fruits; i++) {
      let quality = Math.floor(Math.random()*2)
      if(quality < 1) {
        harvest.push(new Mango('good'))
      } else {
        harvest.push(new Mango('bad'))
      }
    }
    this._harvest = harvest
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this._quality = quality
  }
}

// driver code untuk release 0
console.log(`The tree is alive :smile:`);

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healtyStatus != false)

console.log(`The tree has met its end. :sad:`);



// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
