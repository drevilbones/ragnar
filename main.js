//Main: game starts and loops here

var app = new PIXI.Application({width:1024, height:768});
document.body.appendChild(app.view);

app.ticker.add(delta => gameLoop(delta));

function gameLoop(delta) {
    var totalPoints = randomInt(1,30);
    var points = [];

    var i;
    for (i = 0; i < (totalPoints * 2); i++) {
        points.push(randomInt(1, 512));
    }

    var polygon = new PIXI.Graphics();
    var color = randomColor(); //random hex color

    polygon.beginFill(color);
    polygon.drawPolygon(points);
    polygon.endFill();

    polygon.x = randomInt(0, 512);
    polygon.y = randomInt(0, 512);
    app.stage.addChild(polygon);

    //polygon.destroy();
}