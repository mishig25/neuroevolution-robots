/** Rename vars */
var Neat = neataptic.Neat;
var Methods = neataptic.Methods;
var Config = neataptic.Config;
var Architect = neataptic.Architect;

/** Turn off warnings */
Config.warnings = false;

// GA settings
var PLAYER_AMOUNT = 30;
var ITERATIONS = 1000;
var START_HIDDEN_SIZE = 0;
var MUTATION_RATE = 0.3;
var ELITISM_PERCENT = 0.1;
var generationPeriod = 10000;

// Trained population
var USE_TRAINED_POP = false;

// Global vars
var neat;

/* Global vars */
var players = [];
var foods = [];
var iteration = 0;
var highestScore = 0;

/** Construct the genetic algorithm */
function initNeat() {
    const len_input = 6;
    const len_output = 4;
        neat = new Neat(len_input, len_output,
        null,
        {
            mutation: [
                Methods.Mutation.ADD_NODE,
                Methods.Mutation.SUB_NODE,
                Methods.Mutation.ADD_CONN,
                Methods.Mutation.SUB_CONN,
                Methods.Mutation.MOD_WEIGHT,
                Methods.Mutation.MOD_BIAS,
                Methods.Mutation.MOD_ACTIVATION,
                Methods.Mutation.ADD_GATE,
                Methods.Mutation.SUB_GATE,
                Methods.Mutation.ADD_SELF_CONN,
                Methods.Mutation.SUB_SELF_CONN,
                Methods.Mutation.ADD_BACK_CONN,
                Methods.Mutation.SUB_BACK_CONN
            ],
            popsize: PLAYER_AMOUNT,
            mutationRate: MUTATION_RATE,
            elitism: Math.round(ELITISM_PERCENT * PLAYER_AMOUNT),
            network: new Architect.Random(
                len_input,
                START_HIDDEN_SIZE,
                len_output
            )
        }
    );

    // if (USE_TRAINED_POP) {
    //     neat.population = population;
    // }
}

/** Start the evaluation of the current generation */
function startEvaluation(world) {
    // destroy all players
    players.forEach((player) => {
        player.kill();
    });

    players = [];
    highestScore = 0;

    const y = (world.vtcl.max + world.vtcl.min) / 2;
    const hztl = world.hztl;
    for (var genome in neat.population) {
        genome = neat.population[genome];
        const x = Math.round(Math.random() * (hztl.max - hztl.min) / 7 + hztl.min);
        var player = new Robot(genome,world,1,x,y);
        players.push(player);
    }

    // TODO: start bot movement
    players.forEach((player) => {
        player.start();
    });
}

/** End the evaluation of the current generation */
function endEvaluation(world) {
    console.log('Generation:', neat.generation, '- average score:', neat.getAverage());

    neat.sort();
    var newPopulation = [];

    // Elitism
    for (var i = 0; i < neat.elitism; i++) {
        newPopulation.push(neat.population[i]);
    }

    // Breed the next individuals
    for (var i = 0; i < neat.popsize - neat.elitism; i++) {
        newPopulation.push(neat.getOffspring());
    }

    // Replace the old population with the new population
    neat.population = newPopulation;
    neat.mutate();

    neat.generation++;
    startEvaluation(world);
}


planck.testbed('Neuroevolution-bots', function (testbed) {
    var pl = planck, Vec2 = pl.Vec2;
    var world = new pl.World(Vec2(0, -10));

    const sceneSize = 1;
    document.getElementById("gperiod").innerHTML = parseInt(generationPeriod / 1000).toString() + ' seconds';

    const pt1 = Vec2(-70.0, -15.0);
    const pt2 = Vec2(70.0, -15.0);
    const pt3 = Vec2(pt1.x, pt1.y + sceneSize * 10);
    const pt4 = Vec2(pt2.x, pt2.y + sceneSize * 10);
    world.createBody().createFixture(pl.Edge(pt1, pt2));
    world.createBody().createFixture(pl.Edge(pt1, pt3));
    world.createBody().createFixture(pl.Edge(pt2, pt4));
    world.vtcl = { min: pt1.y, max: pt3.y };
    world.hztl = { min: pt1.x + sceneSize * 5, max: pt2.x - sceneSize * 5 };

    initNeat();
    for (var i = 0; i < 100; i++) neat.mutate();
    startEvaluation(world);
    // Restart Generation every generationPeriod interval
    setInterval(() => {
        endEvaluation(world);
    }, generationPeriod);

    return world;
});

// let generation = new Generation(world, 20);
// generation.initialize(Robot, sceneSize);
// generation.startBotMovement();