const Fruit = require('./fruit')

 class Tree {

   // Initialize a new Tree
   constructor() {
     this._age = 0
     this._height = 0
     this._fruits = []
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
     return this._max_fruits
   }

   get healtyStatus() {
     return this._fruits
   }

   get harvested() {
     return this._harvested
   }


   // Grow the tree
   grow() {
     this._age++
     if (this._age < 10 ) {
       this._height += (Math.floor(Math.random() * 180))
     }
     if (this._age > 20) {
       this._healthyStatus = false
     }
     return this
   }

   // Produce some mangoes
   produceMangoes() {
     let buah = 0
     buah += Math.floor(Math.random() * 10)
     for (var i = 0; i < buah; i++) {
       let fruit = new Fruit
       this._fruits.push(fruit)
     }
   }

   // Get some fruits
   harvest() {
     let good = 0
     let bad = 0
     let panen = this._fruits
     for (var i = 0; i < panen.length; i++) {
       if (panen[i].quality === 'good') {
         good++
       }
       else {
         bad++
       }
     }
     this._harvested = `${good + bad} (${good} good ${bad} bad)`
     return this
   }
 }

 
 
 
 let tree = new Tree()
 do {
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  console.log(`[Year ${tree._age} Report] Height = ${tree._height/100} m| Fruits harvested = ${tree.harvested}`)
 } while (tree._healthyStatus != false)
 console.log('the tree has met its end. :sad:');
 
 module.exports = Tree
