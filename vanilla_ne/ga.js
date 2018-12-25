/** Genetic Algorithm class */
class Generation {

    /**
     * Takes in a population value
     * @constructor
     * @param {Planck.World} world - current world where simulation is happening
     * @param {number} population - the population size
     */

    constructor(world, population) {
        this.world = world;
        this.population = population;
        this.species = [];
        this.generation = 1;
        this.high_score = 0;
        this.avg_score = 0;
        this.total_score = 0;
        this.fitness = 0;
        this.progress = 0;
        this.parents = [];
    }

    /**
     * initalizes the generation with robots
     * @param {Class} Robot - class that is used for creating population
     * @param {number} sceneSize - current environment scale
     */

    initialize(args) {
        const y = (this.world.vtcl.max + this.world.vtcl.min) / 2;
        const hztl = this.world.hztl;
        for (let i = 0; i < this.population; i++) {
            const x = Math.round(Math.random() * (hztl.max - hztl.min)/7 + hztl.min);
            let robot = new RobotVNE(this.world, x, y, i);
            this.species.push(robot);
        }
        this.startBotMovement();
    }

    /**
     * Evolves the population by choosing fittest parents and generating mutated offsprings
     */
    evolve(){
        // increment generation score
        this.generation += 1;
        updateUI("generation", this.generation.toString());

        this.chooseFittestParents();

        let new_generation = [];

        // breeding
        for (let i = 0; i < this.population; i++) {
            var parent1 = 0;
            var parent2 = 1;
            const randomParents = Math.random();
            if (randomParents > .33){
                parent2 = 0;
            } else if (randomParents > .66){
                parent1 = 1;
            };
            let child = RobotVNE.crossover(this.world, this.parents[parent1], this.parents[parent2]);
            const mutationRate = 0.1 * Math.random();
            // const mutationRate = 0.02;
            updateUI("mrate", parseInt(mutationRate * 100).toString() + '%');
            child.mutate(mutationRate);
            child.id = i;
            new_generation.push(child);
            child.start();
        };

        // Kill Current Generation.
        for (let i = 0; i < this.population; i++) {
            this.species[i].kill();
        };
        // Add new children to the current generation
        this.species = new_generation;
    };

    /**
     * Choose fittest parents
     */
    chooseFittestParents(){
        var parentA = { score: this.species[0].score, brain: this.species[0].brain.clone(), id: this.species[0].id };
        for (let i = 1; i < this.species.length; i++) {
            if (this.species[i].score > parentA.score) {
                parentA.brain.input_weights.dispose();
                parentA.brain.output_weights.dispose();
                parentA = { score: this.species[i].score, brain: this.species[i].brain.clone(), id: this.species[i].id };
            };
        };
        var parentB;
        for (let i = 0; i < this.species.length; i++) {
            if (this.species[i].id != parentA.id) {
                if (parentB == undefined || parentB.score < this.species[i].score) {
                    if (parentB != undefined) {
                        parentB.brain.input_weights.dispose();
                        parentB.brain.output_weights.dispose();
                    };
                    parentB = { score: this.species[i].score, brain: this.species[i].brain.clone(), id: this.species[i].id };
                };
            };
        };
        // update parents
        if (this.parents.length == 0 || this.parents[0].score < parentA.score) {
            this.parents = [parentA, parentB];
            // console.log('New score:', parentA.score);
            // parentA.brain.saveWeights();
            var sum = 0;
            this.species.forEach((specie) => {sum += specie.score});

            updateUI("score", (sum / this.species.length).toFixed(2).toString());
            updateUI("maxscore", parentA.score.toFixed(2).toString());
        };
    };

    /**
     * Starts bot movements
     */
    startBotMovement(){
        this.species.forEach((robot) => {
            robot.start();
        });
    };
};