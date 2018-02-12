"use strict"

// // release 0
// class MangoTree {
//   // Initialize a new MangoTree
//   constructor() {
//     this._age = 0
//     this._height = 0
//     this._fruits = 0
//     this._harvest = [] //ini yang dipetik
//     this._status = true //true sehat, false mati
//   }
//
//   get age() {
//     return this._age
//   }
//
//   get height() {
//     return this._height
//   }
//
//   get fruits() {
//     return this._fruits
//   }
//
//   get healtyStatus() {
//     return this._status
//   }
//
//   get harvested() {
//     let good = 0
//     let bad = 0
//     for(let i=0; i<this._harvest.length; i++) {
//       if(this._harvest[i]._quality == 'good') {
//         good+=1
//       } else {
//         bad +=1
//       }
//     }
//     return `${this._fruits} (${good}, ${bad})`
//   }
//
//   // Grow the tree
//   grow() {
//     //setiap tahun bertambah
//     this._age += 1
//
//     //setelah umur 3, baru berbuah
//     if(this._age > 3) {
//       this.produceMangoes()
//     }
//
//     //setelah berumur 15 tahun, sudah tidak bertambah tinggi dan tidak berbuah (mati)
//     if(this._age < 15) {
//       this._height += Math.floor(Math.random()*10)
//     } else {
//       this._status = false
//     }
//   }
//
//   // Produce some mangoes
//   produceMangoes() {
//     this._fruits = Math.floor(Math.random()*10)
//   }
//
//   // Get some fruits
//   harvest() {
//     let harvest = []
//     for(let i=0; i<this._fruits; i++) {
//       let quality = Math.floor(Math.random()*2)
//       if(quality < 1) {
//         harvest.push(new Mango('good'))
//       } else {
//         harvest.push(new Mango('bad'))
//       }
//     }
//     this._harvest = harvest
//   }
//
// }
//
// class Mango {
//   // Produce a mango
//   constructor(quality) {
//     this._quality = quality
//   }
// }
//
// // driver code untuk release 0
// console.log(`The Mango tree is alive :smile:`);
//
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healtyStatus != false)
//
// console.log(`The Mango tree has met its end. :sad:`);
//
//
//
// // Release 1
// class AppleTree {
//   // Initialize a new AppleTree
//   constructor() {
//     this._age = 0
//     this._height = 0
//     this._fruits = 0
//     this._harvest = [] //ini yang dipetik
//     this._status = true //true sehat, false mati
//   }
//
//   get age() {
//     return this._age
//   }
//
//   get height() {
//     return this._height
//   }
//
//   get fruits() {
//     return this._fruits
//   }
//
//   get healtyStatus() {
//     return this._status
//   }
//
//   get harvested() {
//     let good = 0
//     let bad = 0
//     for(let i=0; i<this._harvest.length; i++) {
//       if(this._harvest[i]._quality == 'good') {
//         good+=1
//       } else {
//         bad +=1
//       }
//     }
//     return `${this._fruits} (${good}, ${bad})`
//   }
//
//   // Grow the tree
//   grow() {
//     //setiap tahun bertambah
//     this._age += 1
//
//     //setelah umur 5, baru berbuah
//     if(this._age > 5) {
//       this.produceApple()
//     }
//
//     //setelah berumur 20 tahun, sudah tidak bertambah tinggi dan tidak berbuah (mati)
//     if(this._age < 20) {
//       this._height += Math.floor(Math.random()*15)
//     } else {
//       this._status = false
//     }
//   }
//
//   // Produce some mangoes
//   produceApple() {
//     this._fruits = Math.floor(Math.random()*10)
//   }
//
//   // Get some fruits
//   harvest() {
//     let harvest = []
//     for(let i=0; i<this._fruits; i++) {
//       let quality = Math.floor(Math.random()*2)
//       if(quality < 1) {
//         harvest.push(new Apple('good'))
//       } else {
//         harvest.push(new Apple('bad'))
//       }
//     }
//     this._harvest = harvest
//   }
//
// }
//
// class Apple {
//   // Produce a mango
//   constructor(quality) {
//     this._quality = quality
//   }
// }
//
// // driver code untuk release 0
// console.log(`The Apple tree is alive :smile:`);
//
// let appleTree = new AppleTree()
// do {
//   appleTree.grow();
//   appleTree.produceApple();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healtyStatus != false)
//
// console.log(`The Apple tree has met its end. :sad:`);

// Release 2
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._harvest = [] //ini yang dipetik
    this._status = true //true sehat, false mati
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

  // Produce some mangoes
  produceFruits() {
    this._fruits = Math.floor(Math.random()*10)
  }

  // Get some fruits
  harvest() {
    let harvest = []
    for(let i=0; i<this._fruits; i++) {
      let quality = Math.floor(Math.random()*2)
      if(quality < 1) {
        harvest.push(new Fruit('good'))
      } else {
        harvest.push(new Fruit('bad'))
      }
    }
    this._harvest = harvest
  }


}
class Fruit {
  // Produce a mango
  constructor(quality) {
    this._quality = quality
  }
}

class MangoTree extends FruitTree{
  grow() {
    //setiap tahun bertambah
    this._age += 1

    //setelah umur 3, baru berbuah
    if(this._age > 3) {
      this.produceFruits()
    }

    //setelah berumur 15 tahun, sudah tidak bertambah tinggi dan tidak berbuah (mati)
    if(this._age < 15) {
      this._height += Math.floor(Math.random()*10)
    } else {
      this._status = false
    }
  }
}

class Mango extends Fruit{}

console.log(`The Mango tree is alive :smile:`);

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healtyStatus != false)

console.log(`The Mango tree has met its end. :sad:`);

class AppleTree extends FruitTree{
  grow() {
    //setiap tahun bertambah
    this._age += 1

    //setelah umur 5, baru berbuah
    if(this._age > 5) {
      this.produceFruits()
    }

    //setelah berumur 20 tahun, sudah tidak bertambah tinggi dan tidak berbuah (mati)
    if(this._age < 20) {
      this._height += Math.floor(Math.random()*15)
    } else {
      this._status = false
    }
  }
}

class Apple extends Fruit{}

let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healtyStatus != false)

console.log(`The Apple tree has met its end. :sad:`);
