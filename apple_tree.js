const {FruitTree,Fruit} = require('./fruit_tree')

class AppleTree extends FruitTree {
    constructor() {
      super()
      this.matureAge = Math.floor(Math.random()*(4-2)+2)
      this.maxAge = Math.floor(Math.random()*(15-this.matureAge)+this.matureAge)
      this.maxHeight = 500
    }
  
    grow() {
      this.ageTree++
      if(this.age > 1 && this.age < this.maxAge && this.heightTree < this.maxHeight){
        this.heightTree += Math.floor(Math.random()*80) //cm
      }
      if(this.ageTree >= this.matureAge && this.ageTree < this.maxAge && this.heightTree>80){
        // console.log(this.matureAge,'mature',this.maxAge,'max age')
        this.produceApples() 
      } else if(this.ageTree >= this.maxAge){
        this.healthy = false
      }
  
    }
  
    // Produce some apples
    produceApples() {
      let random = Math.ceil(Math.random()*this.maxAge*10)
      for(let i =0;i<random;i++){
        let apple = new Apple()
        this.totalFruit.push(apple)
      }
      // console.log(this.totalFruit)
      return this.totalFruit
    }
  
}

class Apple extends Fruit {
  constructor() {
  super()
  }
}

module.exports = AppleTree