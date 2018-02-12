'use strict'

class Fruit {
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

module.exports = Fruit
