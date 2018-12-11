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
    }

    /**
     * Initalize the Generation with creatures
     * @param {object}
     */

    initialize(Robot, sceneSize) {
        const y = (this.world.vtcl.max + this.world.vtcl.min) / 2;
        const hztl = this.world.hztl;
        for (let i = 0; i < this.population; i++) {
            const x = Math.round(Math.random() * (hztl.max - hztl.min) + hztl.min);
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
        // Store High Score
        this.generation += 1;
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

        // Store new generation temporarily in this array
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

            let r1 = Math.random();
            let r2 = Math.random();

            // console.log("r" , r);
            let parentA_id = 0;
            let parentB_id = 0;
            for (let j = 0; j < this.population; j++) {

                if (score_x[j][1] >= r1) {
                    parentA_id = score_x[j][0];
                    // console.log("selected", score_x[j][1]);
                    break;
                }
            }

            for (let j = 0; j < this.population; j++) {

                if (score_x[j][1] >= r2) {
                    parentB_id = score_x[j][0];
                    break;
                }
            }
            // console.log("best", score_x[0][0]);
            // let parentA = this.species[score_x[0][0]].clone();
            // let parentB = this.species[score_x[1][0]].clone();

            // let parentA = this.species[parentA_id].clone();
            // let parentB = this.species[parentB_id].clone();

            // let child = parentA.crossover(parentB);
            let parentA = this.species[parentA_id];
            let parentB = this.species[parentB_id];
            let child = Robot.crossoverUpdated(this.world, parentA, parentB);
            child.mutate(0.05);
            child.id = i;
            child.parents = [{ id: parentA.id, score: this.species[parentA.id].score }, { id: parentB.id, score: this.species[parentB.id].score }];
            new_generation.push(child);
            child.start();
        }

        // Kill Current Generation.
        // i.e. Remove their bodies from MatterJS World and dispose their brain
        for (let i = 0; i < this.population; i++) {
            this.species[i].kill();
        }

        // Add new children to the current generation
        this.species = new_generation;
        // for (let i = 0; i < this.population; i++) {
        //     this.species[i].add_to_world(this.world);
        // }
    }
}