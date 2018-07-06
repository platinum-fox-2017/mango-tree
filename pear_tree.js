const FruitTree = require('./fruit_tree.js')
const Pear = require('./pear.js')

class PearTree extends FruitTree {
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
  producePears() {
    let fruits = Math.round(Math.random()*10)
    if(this._age > 2){
      for(let i = 0 ; i < fruits ; i++){
        let pear = new Pear()
        this._fruits.push(pear)
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

module.exports = PearTree
