"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree

  constructor(kapasitas,maksUmur,stopTumbuh) {
    this.umur=0
    this.tinggi=0
    this.kapasitas=kapasitas
    this.kumpulan=[]
    this.jumlah=0
    this.status=true
    this.maksUmur=maksUmur
    this.stopTumbuh=stopTumbuh
    this.panen
  }

  get age() {
    return this.umur;
  }

  get height() {
    return this.tinggi;
  }

  get fruits() {
    return this.kumpulan
  }

  get healtyStatus() {
    return status
  }

  get harvested() {
    return panen
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this.umur < this.maksUmur){
      this.umur++
      if(this.umur <= this.stopTumbuh){
        this.tinggi++
      }
    }
    else {
      this.status=false
    }
    return this.umur
  }

  // Produce some mangoes

  produceFruits() {
    this.kumpulan=[]
    let hasil = Math.ceil(Math.random() * this.kapasitas)
    for(let i=0;i<hasil;i++){
    let getQuality=Math.floor(Math.random() * 2)
    this.kumpulan.push(new Fruit(getQuality))
    }

    return this
  }
  // Get some fruits
  harvest() {
    let good=0
    let bad=0
    for(let i=0;i<this.kumpulan.length;i++){
      if(this.kumpulan[i].quality===0){
        bad++
      }
      else{
        good++
      }

    }
    this.jumlah=good+bad
    this.panen=this.jumlah+' ('+good+' good, '+bad+' bad)'
  }

}

class Fruit {
  // Produce a mango
  constructor(quality) {
    this.quality=quality
  }
}
class MangoTree extends FruitTree{
  constructor(kapasitas,maksUmur,stopTumbuh){
    super(kapasitas,maksUmur,stopTumbuh)
  }
}
class Mango extends Fruit{
  constructor(quality){
    super(quality)
  }
}

class AppleTree extends FruitTree{
  constructor(kapasitas,maksUmur,stopTumbuh){
    super(kapasitas,maksUmur,stopTumbuh)

  }
}
class Apple extends Fruit{
  constructor(quality){
    super(quality)
    this.color='red'
  }
}

class PeachTree extends FruitTree{
  constructor(kapasitas,maksUmur,stopTumbuh){
    super(kapasitas,maksUmur,stopTumbuh)

  }
}
class Peach extends Fruit{
  constructor(quality){
    super(quality)
    this.color='pink'
  }
}

   //driver code untuk release 0
   let mangoTree = new MangoTree(10,20,10)
   do {
     mangoTree.grow();
     mangoTree.produceFruits();
     mangoTree.harvest();
     //console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
     console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} | Mango harvested = ${mangoTree.panen}`)
   } while (mangoTree.status != false)
   console.log('The Mango Tree Has Met Its End\n')

   let appleTree = new AppleTree(8,15,8)
   do {
     appleTree.grow();
     appleTree.produceFruits();
     appleTree.harvest();
     //console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
     console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.tinggi} | Apple harvested = ${appleTree.panen}`)
   } while (appleTree.status != false)
   console.log('The Apple Tree Has Met Its End\n')

   let peachTree = new PeachTree(5,10,5)
   do {
     peachTree.grow();
     peachTree.produceFruits();
     peachTree.harvest();
     //console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
     console.log(`[Year ${peachTree.umur} Report] Height = ${peachTree.tinggi} | peachTree harvested = ${peachTree.panen}`)
   } while (peachTree.status != false)
   console.log('The Peach Tree Has Met Its End\n')
//let mangoTree = new MangoTree()
//console.log(mangoTree.produceMangoes())
//console.log(mangoTree.harvest())
//console.log(mangoTree.grow())
