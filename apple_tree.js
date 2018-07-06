const FruitTree = require('./fruit_tree.js')
const  Apple = require('./apple.js')

class AppleTree extends FruitTree {
  constructor(age,height,fruits,harvest,healtyStatus) {
    super(age,height,fruits,harvest,healtyStatus)
  }

  grow() {
    this._age ++
    this._height += Math.floor(Math.random()*4)
    if(this._age > 10){
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceApples() {
    let fruits = Math.round(Math.random()*10)
    if(this._age > 2){
      for(let i = 0 ; i < fruits ; i++){
        let apple = new Apple()
        this._fruits.push(apple)
      }
    }
    return this._fruits
  }

  // Get some fruits
  harvest(){
    let bad = 0
    let good = 0
    for(let i = 0 ; i < this._fruits.length ; i++){
      if(this._fruits[i].quality === 'good'){
        good++
      }else{
        bad++
      }
    }
    this._harvest = `(${good} good , ${bad} bad)`
    return this._harvest
  }
}

module.exports = AppleTree
