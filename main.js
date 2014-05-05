var game = new Phaser.Game(500, 600, Phaser.AUTO, 'game_div');

var main_state = {

    preload: function() {},

    create: function() {},

    update: function() {},

}

game.state.add('main', main_state);
game.state.start('main');
