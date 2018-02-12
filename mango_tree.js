"use strict"

class FruitTree {
  constructor(heightGain,stopGain,firstFruit,fruitEachYear,fruitKind) {
    this._height = 0
    this._age = 0
    this._fruitsCapacity = 5+Math.floor(Math.random()*5);
    this._fruits = []
    this._harvested = 0
    this._healtyStatus = true
    this.gain = heightGain || 1
    this.stopGain = stopGain || 15
    this.firstFruit = firstFruit
    this.fruitEachYear = fruitEachYear || 10
    this.fruitsKind = fruitKind
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this._healtyStatus
  }

  get harvested() {
    let bad=0;
    let good=0;
    for(let i=0; i<this._harvested.length; i++) {
      if(this._harvested[i]._quality==='Good') good++;
      else bad++;
    }
    return `${this._harvested.length} (${good} good,  ${bad} bad)`
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this.healtyStatus) {
      this._age++;
      if(this.age<=this.stopGain) {this._height+=this.gain;}
      if(this.age>=20) this._healtyStatus=false;
    }
  } 

  produceFruits() {
    if(this.age>=this.firstFruit) {
      let fruitsCount=this.fruitEachYear
      for(let i=0; i<fruitsCount; i++) {
        let randomQuality=Math.floor(Math.random()*2);
        let fruit = new this.fruitsKind(randomQuality);
        this._fruits.push(fruit);
      }
    }
  }

  // Get some fruits
  harvest() {
    this._harvested=this.fruits.slice();
    this._fruits=[];
  }

}
class Fruit {
  constructor(quality) {
    this._quality = quality===0? 'Bad' : 'Good';
  }
}

class MangoTree extends FruitTree{
  constructor(heightGain,stopGain,firstFruit,fruitEachYear,fruitKind) {
    super(heightGain,stopGain,firstFruit,fruitEachYear,fruitKind)
  }
}

class Mango extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

class AppleTree extends FruitTree{
  constructor(heightGain,stopGain,firstFruit,fruitEachYear,fruitKind) {
    super(heightGain,stopGain,firstFruit,fruitEachYear,fruitKind)
  }
}

class Apple extends Fruit{
  constructor(quality) {
    super(quality)
    this._diameter = this.diameterRandomizer(quality)
  }

  diameterRandomizer(quality) {
    if(this.quality == 0) {
      return 8+Math.floor(Math.random()*5)
    }
    return 1+Math.floor(Math.random()*8)
  }
}

class PeachTree extends FruitTree {
}

class Peach extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

let mangoTree = new MangoTree(0.5,12,3,10,Mango)
console.log(`The mango tree is alive! :smile:`)
do {
  mangoTree.grow();
  mangoTree.produceFruits()
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
} while(mangoTree.healtyStatus != false)
console.log(`The tree has met its end. :sad:`);


console.log('\n\n\n')
let appleTree = new AppleTree(0.7,8,1,15,Apple)
console.log(`The apple tree is alive! :smile:`)
do {
  appleTree.grow();
  appleTree.produceFruits()
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`);
} while(appleTree.healtyStatus != false)
console.log(`The tree has met its end. :sad:`);


console.log('\n\n\n')
let peachTree = new PeachTree(0.2,15,1,5,Peach)
console.log(`The peach tree is alive! :smile:`)
do {
  peachTree.grow();
  peachTree.produceFruits()
  peachTree.harvest();
  console.log(`[Year ${peachTree.age} Report] Height = ${peachTree.height} m | Fruits harvested = ${peachTree.harvested}`);
} while(peachTree.healtyStatus != false)
console.log(`The peach tree has met its end. :sad:`);
