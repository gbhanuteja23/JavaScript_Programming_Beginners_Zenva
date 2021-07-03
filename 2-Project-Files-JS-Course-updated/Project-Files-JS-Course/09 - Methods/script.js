//let player = {
//  health: 100,
//  fun: 0,
//  eatApple: function() {
//    console.log('eat apple');
// 
//    //this.health = this.health + 10;
//    this.health += 10;
//    
//    console.log(this.health);
//  },
//  eatCandy: function() {
//    this.health -= 5;
//    this.fun += 5;
//  },
//  play: function() {
//    this.fun += 10;
//  }
//};
//
//console.log('player object BEFORE:', player);
//player.play();       // health is 100; fun is 10
//player.eatApple(); // health is 110; fun is 10
//player.eatCandy(); // health is 105; fun is 15
//console.log('player object AFTER:', player);


let player = {
    health: 100,
    fun: 0,    
    play: function() {
        this.fun += 10;
    },
    eat: function(food) {
        if(food == 'apple') {
            this.health += 10;
        }
        else if(food == 'candy') {
            this.health -= 5;
            this.fun += 5;
        }
    }
};

console.log(player);
player.eat('apple');
console.log(player);
