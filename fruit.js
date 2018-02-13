class Fruit {
    constructor(name) {
        this.name = ''
        this._quality = this.check_quality()
    }

    check_quality() {
        let randomQuality = Math.round(Math.random() * 1)
        if (randomQuality === 1) {
            return this._quality = 'bad'
        } else {
            return this._quality = 'good'
        }
    }
}

module.exports = Fruit