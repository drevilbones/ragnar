//Main: game starts and loops here

var game = new Phaser.Game(1000, 940, Phaser.AUTO, 'game_div', 'main_state', true);

var text = "hello world";

var main_state = {

    preload: function() {},

    create: function() {},

    update: function() {

        var tx = game.rnd.integerInRange(0, 1300);
        var ty = game.rnd.integerInRange(0, 940);

        var rndColor = Phaser.Color.getColor(game.rnd.integerInRange(0, 255),
                            game.rnd.integerInRange(0, 255),
                            game.rnd.integerInRange(0, 255));
        var rndColorHex = "#" + Phaser.Color.componentToHex(rndColor);

        text = rndColorHex;

        game.add.text(tx, ty, text, {font: "24px Arial", fill: rndColorHex});

    },

}

game.state.add('main', main_state);
game.state.start('main');
