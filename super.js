class FruitTree {
    constructor(maxHeight,maxAge,maxFruits) {
      this._age = 0
      this._height = 0
      this._harvest = 0
      this._healthyStatus = true
      this._maxHeight = maxHeight
      this._maxAge = maxAge
      this._maxFruits = maxFruits
      this._fruits = []
      this._totalFruits = 0
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
  
    get healthyStatus() {
      return this._healthyStatus
    }
  
    get harvested() {
      return this._harvest
    }
  
    get maxFruits(){
      return this._maxFruits
    }

    get goodFruit(){
      return this._goodfruit
    }
  
    // Grow the tree
    grow() {
      this._age++
      if(this.age < this._maxAge){
        let growHeight = Math.random()*2
        this._height += growHeight
        
      }else if(this.age > this._maxAge || this.height > this._maxHeight){
        this._healthyStatus = false
      }
    }
  
    // Produce some mangoes
    produceMangoes() {
      let produce = Math.ceil(Math.random() * this.maxFruits)
      
      for(let i = 0; i < produce; i++){
        this.fruits.push(new Fruit())
      }
      return this
    }
  
    // Get some fruits
    harverst() {
      let badFruit = 0
      let goodFruit = 0
      for(let [index,value] of this.fruits.entries()){
        if(value.status === 2){
          badFruit++
          this._badfruit++
        }else{
          goodFruit++
          this._goodfruit++
        }
      }
      let total = badFruit + goodFruit

      this._harvest = `${total} (${goodFruit} good, ${badFruit} bad)`
    }
  }

  class Fruit {
    // Produce a mango
    constructor() {
      this.status = Math.ceil(Math.random()*2)
    }
  }

  module.exports = {FruitTree, Fruit}