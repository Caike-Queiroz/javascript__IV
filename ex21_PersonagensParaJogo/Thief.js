const Character = require("./Character");

class Thief extends Character {
    attack(targetCharacter) {
        targetCharacter.lifepoints -= (this.attackPts - targetCharacter.defensePts) * 2
    }
}

module.exports = Thief