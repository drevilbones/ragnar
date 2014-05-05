var game = new Phaser.Game(600, 600, Phaser.AUTO, 'game_div');

var main_state = {

    preload: function() {},

    create: function() {

        var text = "traditional hello world";
        var style = {font: "24px Arial", fill: "#ff0044", align: "center" };

        var t = game.add.text(150, game.world.centerY, text, style);

    },

    update: function() {},

}

game.state.add('main', main_state);
game.state.start('main');
