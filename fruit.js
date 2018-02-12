class Fruit {
   // Produce a mango
   constructor() {
     this.quality = this.quality()
   }
   quality() {
     let random = Math.random() *10
     if (random < 3) {
       return 'good'
     }
     else {
       return 'bad'
     }
  }
 }

 module.exports = Fruit
