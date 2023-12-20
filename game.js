// Space Battle Game:
// 1 player
// Alien Ships
// Idea of the game is to defeat the alien ships, before they defeat you, AND SAVE EARTH!
// 2 Classes: 1 player ship class, and 1 alien ship class
// - HP / hit points / health for both classes
// - Damage / Power for each class: how much damage each ship will do when they attack
// - Player Name
// - Power Ups for each class
// - Armor for each class 

class Player {
    constructor(name){
        this.name = name;
        this.hp = 1000;
        this.power = Math.ceil(Math.random() * 50) + 50
        this.armor = Math.ceil(Math.random() * 20) + 20
    }
    attack(target){
        target.hp -= this.power - target.armor
        console.log(`HIT! You've struck an alien ship! Their current HP is now ${target.hp}`)
    }
}


class AlienShip {
    constructor(){
        this.hp = 100;
        this.armor = Math.ceil(Math.random() * 20)
        this.power = Math.ceil(Math.random() * 30) + 30
    }
    attack(player){
        player.hp -= this.power - player.armor
        console.log(`You've been struck! ${player.name}'s health is now ${player.hp}`)
    }
}

// Testing purposes -- not part of our game!
// const player1 = new Player("Callister")
// const alien = new AlienShip()

// console.log(player1)
// console.log(alien)

// console.log('--------------')
// player1.attack(alien)
// alien.attack(player1)
// console.log('alien stats after attack')
// console.log(alien)
// console.log(player1)


// Game Loop so player/enemy can take a turn attacking each other
const startGame = (name) => {
    // Create an alien ships
    const alienShips = []
    for(let i = 0; i < 6; i++){
        alienShips.push(new AlienShip())
    }
    // Create an instance of the player class and give it a name
    const player = new Player(name)
    // Create a boolean to determine whose turn it is
    let playersTurn = true
    // Create the game loop (while loop) that will iterate while both the player and enemy ships have HP
    while(player.hp > 0 && alienShips.length > 0){
        // Initialize current target
        const currentTarget = alienShips[0]
        // Take turns attacking one another
        if(playersTurn){
            // Player attacks the alien, then we flip playersTurn so the alien can attack next
            player.attack(currentTarget)
            playersTurn = false
        } else {
            // Alien attacks the player, then we flip playersTurn so the player can attack the alien next
            currentTarget.attack(player)
            playersTurn = true
        }

        // If the alien ship has been defeated, take it out of the alienShips array
        if(currentTarget.hp <= 0){
            alienShips.shift()
            console.log('You defeated an alien ship! NICE!')
            console.log(`${alienShips.length} alien ships remain!`)
        }
    }
    
    // Trigger an End Game message: either we won or we lost
    if(alienShips.length === 0){
        console.log(`WINNER! You have saved the Earth again. Thank you ${player.name}!`)
    } else if(player.hp <= 0){
        console.log('Better luck next time..')
    }

}

startGame("Callister");