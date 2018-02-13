const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')

let mangotree = new MangoTree()
console.log(mangotree)

do {
    mangotree.grow()
    mangotree.harvest()
    console.log(`[Year ${mangotree._name} ${mangotree.age} Report of ] Height = ${mangotree.height} m| Fruits harvested = ${mangotree.harvested}`)
} while (mangotree.healtyStatus != false)