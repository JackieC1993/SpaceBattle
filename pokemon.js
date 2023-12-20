class Pokemon {
    constructor (name,types, species, moves, hp){
        this.name = name;
        this.types= types;
        this.species = species;
        this.moves = moves;
        this.hp = hp
    }
    attack1(target){
        console.log(`${this.name} used ${this.moves[0]}`)
        target.hp -= 100
    }
    
}

const newPokemon = new Pokemon ("Quarsire", ["water","ground"], "tadpole", ["water gun"], 100)
const targetPokemon = new Pokemon ("Charmander", ["Fire"], "lizard", ["ember", "scratch", "leer", "defense curl"], 80)
// console.log(newPokemon.name)
newPokemon.attack1(targetPokemon);
console.log(targetPokemon)
