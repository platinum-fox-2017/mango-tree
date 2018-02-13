"use strict"

class MangoTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._harvested = 0;
    this._harvest = [];
    this._status = true;
    this.maxAge = 19;
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
    return this._status;
  }

  get harvested() {
    //pengelompokan hasil panen
    let good = 0;
    let bad = 0;
    for(let i=0; i<this._harvest.length; i++){
      if(this._harvest[i]==='good'){
        good++;
      } else {
        bad++;
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`
  }

  grow() {
    //kalo udah sampe umur maksimal, berhenti looping
    if(this._age===this.maxAge){
      this._status = false;
    }
    this._age++;
    //masih tumbuh kalo umurnya dibawah 15 tahun
    if(this._age<15) {
      this._height += Math.round((Math.random()*15)/10);
    }
    // berbuah setelah 3 tahun
    if(this._age>3){
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
    } else {
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = 0 (0 good, 0 bad)`);
    }
  }

  produceMangoes() {
    //hasil panen total
    this._fruits = Math.floor(Math.random()*10)+1;
  }

  harvest() {
    //menilai kualitas hasil panen
    let array = [];
    for(let i=0; i<this._fruits; i++) {
      let quality = Math.floor(Math.random()*2)
      if(quality<1) {
        array.push('good')
      } else {
        array.push('bad')
      }
    }
    this._harvest = array;
  }

}

class Mango {

}

// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
} while (mangoTree.healtyStatus !== false)
  console.log('The tree has met its end. :sad:');




// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
