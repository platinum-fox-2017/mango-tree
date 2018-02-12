"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.ageTree = 0
    this.heightTree = 0
    this.totalFruit = []
    this.harvestFruit = 0
    this.healthy = true
    // return Math.random() * (max - min) + min
    this.matureAge = Math.floor(Math.random()*(5-3)+3)
    this.maxAge = Math.floor(Math.random()*(20-this.matureAge)+this.matureAge)
    this.maxHeight = 500
  }

  get age() {
    return this.ageTree
  }

  get height() {
    return this.heightTree

  }

  get fruits() {
    return this.totalFruit
  }

  get healthyStatus() {
    return this.healthy
  }

  get harvested() {
    return this.harvestFruit

  }

  grow() {
    this.ageTree++
    if(this.age > 1 && this.age < this.maxAge && this.heightTree < this.maxHeight){
      this.heightTree+= Math.floor(Math.random()*80) //cm
    }
    if(this.ageTree >= this.matureAge && this.ageTree < this.maxAge && this.heightTree>80){
      // console.log(this.matureAge,'mature',this.maxAge,'max age')
        this.produceMangoes() 
    } else if(this.ageTree >= this.maxAge){
      this.healthy = false
    }

  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.ceil(Math.random()*this.maxAge*10)
    for(let i =0;i<random;i++){
      let prodMango = new Mango()
      this.totalFruit.push(prodMango)
    }
    // console.log(this.totalFruit)
    return this.totalFruit
  }

  // Get some fruits
  harvest() {
    let countRipe = 0
    let countRotten = 0
    for(let i=0;i<this.totalFruit.length;i++){
      // console.log(this.totalFruit[i].qualityFruit,'total')
      if(this.totalFruit[i].qualityFruit ==='Ripe'){
        countRipe++
      }else{
        countRotten++
      }
    }
    this.totalFruit.length = 0
    this.harvestFruit = `${countRipe+countRotten} fruits (${countRipe} ripe, ${countRotten} rotten)`
    return this.harvestFruit
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.qualityFruit = this.quality_check()
  }
  quality_check(){
    let random = Math.round(Math.random()*1)
    // console.log(random,'ini random')
    if(random === 0){
      this.qualityFruit = 'Ripe'
    }else{
      this.qualityFruit = 'Rotten'
    }
    return this.qualityFruit
  }
}


// driver code untuk release 0
console.log(`The tree is alive! :smile:`)
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  // mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthyStatus != false)
console.log(`The tree has met its end! :sad:`)
  
// Release 1
class AppleTree {
  constructor() {
    this.ageTree = 0
    this.heightTree = 0
    this.totalFruit = []
    this.harvestFruit = 0
    this.healthy = true
    // return Math.random() * (max - min) + min
    this.matureAge = Math.floor(Math.random()*(4-2)+2)
    this.maxAge = Math.floor(Math.random()*(10-this.matureAge)+this.matureAge)
    this.maxHeight = 400
  }

  get age() {
    return this.ageTree
  }

  get height() {
    return this.heightTree

  }

  get fruits() {
    return this.totalFruit
  }

  get healthyStatus() {
    return this.healthy
  }

  get harvested() {
    return this.harvestFruit

  }

  grow() {
    this.ageTree++
    if(this.age > 1 && this.age < this.maxAge && this.heightTree < this.maxHeight){
      this.heightTree += Math.floor(Math.random()*80) //cm
    }
    if(this.ageTree >= this.matureAge && this.ageTree < this.maxAge && this.heightTree>50){
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

  // Get some fruits
  harvest() {
    let countRipe = 0
    let countRotten = 0
    for(let i=0;i<this.totalFruit.length;i++){
      // console.log(this.totalFruit[i].qualityFruit,'total')
      if(this.totalFruit[i].qualityFruit ==='Ripe'){
        countRipe++
      }else{
        countRotten++
      }
    }
    this.totalFruit.length = 0
    this.harvestFruit = `${countRipe+countRotten} fruits (${countRipe} ripe, ${countRotten} rotten)`
    return this.harvestFruit
  }
}
class Apple {

constructor() {
  this.qualityFruit = this.quality_check()
}
quality_check(){
  let random = Math.round(Math.random()*1)

  if(random === 0){
    this.qualityFruit = 'Ripe'
  }else{
    this.qualityFruit = 'Rotten'
  }
  return this.qualityFruit
}
}
// driver code untuk release 0
console.log(`The Apple tree is alive! :smile:`)
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} cm | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthyStatus != false)
console.log(`The Apple tree has met its end! :sad:`)
// Release 2
class FruitTree {}
class Fruit {}
