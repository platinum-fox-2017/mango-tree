"use strict"


class FruitTree {

    // Initialize a new MangoTree
    constructor() {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._matureAge = 0;
        this._healthyStatus = true;
        this._stopProduceAge = 0;
        this._stopGrowAge = 0;
        this._dieAge = 0;
        this._fruitProduced = 0;
        this._harvested = {
            'good': 0,
            'bad': 0
        };
    }

    get age() {
        return this._age;
    }

    get height() {
        return this._height + ' m';
    }

    get fruits() {
        return this._fruits;
    }

    get healthyStatus() {
        return this._healthyStatus;
    }

    get harvested() {
        return `${this._fruits.length} (${this._harvested.good} good, ${this._harvested.bad} bad)`
    }

    harvest() {
        for (let i = 0; i < this._fruitProduced; i++) {
            this._fruits.push(new Fruit());
            if(this._fruits[i].quality == 'good'){
                this._harvested.good++;
            }
            else{
                this._harvested.bad++;
            }
        }
    }

    produceFruits() {
        if (this._age >= this._matureAge && this._age <= this._stopProduceAge) {
            this._fruitProduced = 1 + Math.floor(Math.random() * 10);
        }
    }

    // Grow the tree
    grow() {
        this._age++;
        if (this._age < this._stopGrowAge) {
            this._height = this._height + (1 + Math.floor(Math.random() * 9));
        }
        if (this._age > this._dieAge) {
            this._healthyStatus = false;
        }

    }

}

class Fruit {
    // Produce a mango
    constructor(quality) {
        this._quality = this.random_quality();
    }

    random_quality(){
        if (Math.floor(Math.random() * 2)) {
            return 'good'
        } else {
            return 'bad'
        }
    }

    get quality() {
        return this._quality;
    }
}


class Mango extends Fruit {}
class Apple extends Fruit {}


class MangoTree extends FruitTree {
    // Initialize a new MangoTree
    constructor() {
        super();
        this._stopProduceAge = 23;
        this._stopGrowAge = 19;
        this._dieAge = 25;
        this._matureAge = 4;

    }

}


class AppleTree extends FruitTree {
    constructor() {
        super();
        this._stopProduceAge = 20;
        this._stopGrowAge = 15;
        this._dieAge = 22;
        this._matureAge = 2;
    }
}

let mangoTree = new MangoTree();
console.log("Mango Tree: ");
do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`);
} while (mangoTree.healthyStatus != false);


let appleTree = new AppleTree();
console.log("\nApple Tree: ");
do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`);
} while (appleTree.healthyStatus != false);
