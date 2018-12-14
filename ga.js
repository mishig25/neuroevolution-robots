class Generation {

    /**
     * Takes in a population value
     * @constructor
     * @param {number} population - The population Size
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
     * Initalize the Generation with creatures
     * @param {object}
     */

    initialize(Robot, sceneSize) {
        const y = (this.world.vtcl.max + this.world.vtcl.min) / 2;
        const hztl = this.world.hztl;
        for (let i = 0; i < this.population; i++) {
            const x = Math.round(Math.random() * (hztl.max - hztl.min)/7 + hztl.min);
            let robot = new Robot(this.world, sceneSize, x, y, i);
            this.species.push(robot);
        }
    }

    test(){
        this.species.forEach((robot) => {
            robot.start();
        });
    }

    evolve(){
        // increment generation score
        this.generation += 1;
        document.getElementById("generation").innerHTML = this.generation.toString();
        // let gen_highscore = Math.max.apply(Math, this.species.map(o => o.score));
        let gen_highind = 0;
        let gen_highscore = this.species[0].score;
        for(let i=1; i<this.species.length; i++){
            if (this.species[i].score > gen_highscore){
                gen_highscore = this.species[i].score;
                gen_highind = i;
            }
        }
        this.species[gen_highind].saveWeights();
        this.high_score = gen_highscore > this.high_score ? gen_highscore : this.high_score;
        
        // Calculate Total Score of this Generation
        let total_score = 0;
        this.species.forEach((creature) => { total_score += creature.score });

        // Assign Fitness to each creature
        this.progress = (total_score / this.population) - this.avg_score
        this.avg_score = total_score / this.population;
        for (let i = 0; i < this.population; i++) {
            this.species[i].fitness = this.species[i].score / total_score;
        };

        // choose fittest parents
        var parentA = { score: this.species[0].score, brain: this.species[0].brain.clone(), id: this.species[0].id};
        for(let i=1; i<this.species.length; i++){
            if (this.species[i].score > parentA.score){
                parentA.brain.input_weights.dispose();
                parentA.brain.output_weights.dispose();
                parentA = { score: this.species[i].score, brain: this.species[i].brain.clone(), id: this.species[i].id };
            }
        }
        var parentB;
        for(let i=0; i<this.species.length; i++){
            if (this.species[i].id != parentA.id){
                if (parentB == undefined || parentB.score < this.species[i].score){
                    if (parentB != undefined){
                        parentB.brain.input_weights.dispose();
                        parentB.brain.output_weights.dispose();
                    }
                    parentB = { score: this.species[i].score, brain: this.species[i].brain.clone(), id: this.species[i].id };
                }
            }
        }
        // update parents
        if (this.parents.length == 0 || this.parents[0].score < parentA.score){
            this.parents = [parentA, parentB];
            console.log('New score:',parentA.score)
            document.getElementById("highscore").innerHTML = parseInt(parentA.score).toString();
        }

        let new_generation = [];

        // Breeding
        let total_fitness = 0;
        let score_x = new Array(this.population);
        for (let j = 0; j < this.population; j++) {
            score_x[j] = new Array(2);
            score_x[j][0] = j;
            total_fitness += this.species[j].fitness;
            score_x[j][1] = total_fitness;
        }
        for (let i = 0; i < this.population; i++) {
            var parent1 = 0;
            var parent2 = 1;
            const randomParents = Math.random();
            if (randomParents > .33){
                parent2 = 0;
            } else if (randomParents > .66){
                parent1 = 1;
            }
            let child = Robot.crossover(this.world, this.parents[parent1], this.parents[parent2]);
            const mutationRate = 0.1 * Math.random();
            // const mutationRate = 0.02;
            document.getElementById("mrate").innerHTML = parseInt(mutationRate*100).toString()+'%';
            child.mutate(mutationRate);
            child.id = i;
            child.parents = [{ id: parentA.id, score: this.species[parentA.id].score }, { id: parentB.id, score: this.species[parentB.id].score }];
            new_generation.push(child);
            child.start();
        }

        // Kill Current Generation.
        for (let i = 0; i < this.population; i++) {
            this.species[i].kill();
        }
        // Add new children to the current generation
        this.species = new_generation;
    }
}