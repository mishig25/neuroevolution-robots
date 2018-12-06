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

    initialize(Ragdoll, sceneSize) {
        const y = (this.world.vtcl.max + this.world.vtcl.min) / 2;
        const hztl = this.world.hztl;
        for (let i = 0; i < this.population; i++) {
            const x = Math.round(Math.random() * (hztl.max - hztl.min) + hztl.min);
            let robot = new Ragdoll(this.world, sceneSize, x, y);
            this.species.push(robot);
        }
    }
}