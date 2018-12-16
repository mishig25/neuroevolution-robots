planck.testbed('Neuroevolution-bots', function (testbed) {
    var pl = planck, Vec2 = pl.Vec2;
    var world = new pl.World(Vec2(0, -10));

    const sceneSize = 1;
    const generationPeriod = 5000;
    document.getElementById("gperiod").innerHTML = parseInt(generationPeriod/1000).toString()+' seconds';

    const pt1 = Vec2(-70.0, -15.0);
    const pt2 = Vec2(70.0, -15.0);
    const pt3 = Vec2(pt1.x, pt1.y+sceneSize*10);
    const pt4 = Vec2(pt2.x, pt2.y + sceneSize*10);
    world.createBody().createFixture(pl.Edge(pt1, pt2));
    world.createBody().createFixture(pl.Edge(pt1, pt3));
    world.createBody().createFixture(pl.Edge(pt2, pt4));
    world.vtcl = {min: pt1.y, max: pt3.y };
    world.hztl = { min: pt1.x+sceneSize*5, max: pt2.x-sceneSize*5 };
    

    let generation = new Generation(world, 20);
    generation.initialize(Robot, sceneSize);
    generation.startBotMovement();

    // Restart Generation every generationPeriod interval
    setInterval(() => {
        generation.evolve();
    }, generationPeriod);

    return world;
});