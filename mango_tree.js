"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._height = 0
    this._age = 0
    this._fruitsCapacity = 5+Math.floor(Math.random()*5);
    this._fruits = []
    this._harvested = 0
    this._healtyStatus = true
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
      if(this.age<=10) this._height++;;
      if(this.age>=20) this._healtyStatus=false;
    }
  } 

  // Produce some mangoes
  produceMangoes() {
    if(this.age>2) {
      let mangoesCount=Math.floor(Math.random()*this._fruitsCapacity)
      for(let i=0; i<mangoesCount; i++) {
        let mango = new Mango(Math.floor(Math.random()*2));
        this._fruits.push(mango);
      }
    }
  }

  // Get some fruits
  harvest() {
    this._harvested=this.fruits.slice();
    this._fruits=[];
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this._quality = quality===0? 'Bad' : 'Good'
  }
}

let mangoTree = new MangoTree()
console.log(`The mango tree is alive! :smile:`)
do {
  mangoTree.grow();
  mangoTree.produceMangoes()
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
} while(mangoTree.healtyStatus != false)
console.log(`The tree has met its end. :sad:`);

// Release 1
class AppleTree {
  constructor() {
    this._height = 0
    this._age = 0
    this._fruitsCapacity = 5+Math.floor(Math.random()*5);
    this._fruits = []
    this._harvested = 0
    this._healtyStatus = true
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
      if(this.age<=10) this._height++;;
      if(this.age>=20) this._healtyStatus=false;
    }
  } 

  produceApples() {
    if(this.age>2) {
      let applesCount=Math.floor(Math.random()*this._fruitsCapacity)
      for(let i=0; i<applesCount; i++) {
        let apple = new Apple(Math.floor(Math.random()*2));
        this._fruits.push(apple);
      }
    }
  }

  // Get some fruits
  harvest() {
    this._harvested=this.fruits.slice();
    this._fruits=[];
  }
}
class Apple {
  constructor(quality) {
    this._quality = quality===0? 'Bad' : 'Good'
    this._diameter = this.diameterRandomizer(quality)
  }

  diameterRandomizer(quality) {
    if(quality == 1) {
      return 8+Math.floor(Math.random()*5)
    }
    return 1+Math.floor(Math.random()*8)
  }
}

let appleTree = new AppleTree()
console.log(`The tree is alive! :smile:`)
do {
  appleTree.grow();
  appleTree.produceApples()
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`);
} while(appleTree.healtyStatus != false)
console.log(`The tree has met its end. :sad:`);

// Release 2
// class FruitTree {
//   constructor() {
//     this._height = 0
//     this._age = 0
//     this._fruitsCapacity = 5+Math.floor(Math.random()*5);
//     this._fruits = []
//     this._harvested = 0
//     this._healtyStatus = true
//   }

//   get age() {
//     return this._age;
//   }

//   get height() {
//     return this._height;
//   }

//   get fruits() {
//     return this._fruits;
//   }

//   get healtyStatus() {
//     return this._healtyStatus
//   }

//   get harvested() {
//     let bad=0;
//     let good=0;
//     for(let i=0; i<this._harvested.length; i++) {
//       if(this._harvested[i]._quality==='Good') good++;
//       else bad++;
//     }
//     return `${this._harvested.length} (${good} good,  ${bad} bad)`
//   }


//   // Get current states here

//   // Grow the tree
//   grow() {
//     if(this.healtyStatus) {
//       this._age++;
//       if(this.age<=10) this._height++;;
//       if(this.age>=20) this._healtyStatus=false;
//     }
//   } 

//   produceFruits() {
//     if(this.age>2) {
//       let fruitsCount=Math.floor(Math.random()*this._fruitsCapacity)
//       for(let i=0; i<fruitsCount; i++) {
//         let fruit = new fruit(Math.floor(Math.random()*2));
//         this._fruits.push(fruit);
//       }
//     }
//   }

//   // Get some fruits
//   harvest() {
//     this._harvested=this.fruits.slice();
//     this._fruits=[];
//   }

// }
// class Fruit {
//   constructor(quality) {
//     this._quality = quality===0? 'Bad' : 'Good';
//   }
// }
