class Generation {

    /**
     * Takes in a population value
     * @constructor
     * @param {number} population - The population Size
     */

    constructor(population) {
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

    initialize(Creature) {
        for (let i = 0; i < this.population; i++) {
            let new_creature = new Creature({
                upper_length: 30,
                upper_width: 8,
                lower_length: 30,
                lower_width: 6,
                x: width * 0.15,
                y: height * 0.85,
                id: i
            });
            this.species.push(new_creature);
        }
    }

    /**
     * Picks one creature from the population
     * @returns A creature
     */

    pickOne() {
        let index = 0;
        let r = Math.random();
        while (r > 0) {
            r -= this.species[index].fitness;
            index += 1;
        }

        index -= 1;

        let selected = this.species[index].clone();
        return selected;
    }

    evolve() {

        // Store High Score
        this.generation += 1;
        let gen_highscore = Math.max.apply(Math, this.species.map(o => o.score));
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
        for (let j = 0; j < this.population; j++){
                score_x[j] = new Array(2);
                score_x[j][0] = j;
                total_fitness += this.species[j].fitness;

                // score_x[j][1] = this.species[j].fitness;
                score_x[j][1] =total_fitness;
                // if(this.species[j].fitness < 0.2){
                //     score_x[j,1] = 0;
                // }
                //console.log(score_x[j,0], this.species[j].fitness, score_x[j,1]);
                
        }
        // score_x.sort(function(a,b){
        //     return b[1] - a[1];
        // });

        // for (let j1 = 0; j1 < this.population; j1++){
        //         console.log("score",j1,score_x[j1][0], score_x[j1][1]);
        //         }

        
        

        for (let i = 0; i < this.population; i++) {

            let r1 = Math.random();
            let r2 = Math.random();

            // console.log("r" , r);
            let parentA_id = 0;
            let parentB_id = 0;
            for (let j = 0; j < this.population; j++){
               
                if(score_x[j][1] >= r1){
                    parentA_id = score_x[j][0];
                    // console.log("selected", score_x[j][1]);
                    break;
                }
            }

            for (let j = 0; j < this.population; j++){
               
                if(score_x[j][1] >= r2){
                    parentB_id = score_x[j][0];
                    break;
                }
            }
            // console.log("best", score_x[0][0]);
            // let parentA = this.species[score_x[0][0]].clone();
            // let parentB = this.species[score_x[1][0]].clone();

            let parentA = this.species[parentA_id].clone();
            let parentB = this.species[parentB_id].clone();

            let child = parentA.crossover(parentB);
            child.mutate();
            child.id = i;
            child.params.id = i;
            child.colors = [parentA.colors[0], parentB.colors[1]];
            child.parents = [{ id: parentA.id, score: this.species[parentA.id].score }, { id: parentB.id, score: this.species[parentB.id].score }];
            new_generation.push(child);
        }

        // Kill Current Generation.
        // i.e. Remove their bodies from MatterJS World and dispose their brain
        for (let i = 0; i < this.population; i++) {
            this.species[i].kill(world);
        }
        
        // Add new children to the current generation
        this.species = new_generation;
        for (let i = 0; i < this.population; i++) {
            this.species[i].add_to_world(world);
        }
    }
}