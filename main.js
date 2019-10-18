//Main: game starts and loops here

var app = new PIXI.Application({width:940, height:900});
document.getElementById("game_div").appendChild(app.view);

var zones = []; //TODO: make a zones class

//maybe move the zone creation into the loader function?
function setup() { //let's draw the map!
    let totalZones = randomInt(1,3) //choose how many zones (states, territories, etc)

    let z;
    for (z = 0; z < totalZones; z++) { //draw a random polygon for each zone
        let totalPoints = randomInt(6,15);
        let points = [];

        //start the polygon
        points.push(0);
        points.push(0);
        
        let i; //make an array of all the points
        for (i = 1; i <= (totalPoints * 2); i++) {
            points.push(points[i-1] + randomInt(-150,150)); //not quite there yet
        }

        let polygon = new PIXI.Graphics();
        let color = randomColor();

        polygon.beginFill(color);
        polygon.drawPolygon(points);
        polygon.endFill();

        polygon.x = randomInt(0, 940);
        polygon.y = randomInt(0, 900);
        app.stage.addChild(polygon);

        console.log(points);
        zones.push(polygon); //put the zone in the array
    }
}

app.ticker.add(delta => gameLoop(delta));

function gameLoop(delta) {

}