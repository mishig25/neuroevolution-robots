/** Robot class for creating a bot in Planck.js' environment */
class RobotSne extends Robot{

    /**
    * Takes in world, size, x, y, id
    * @constructor
    * @param {Planck.World} world
    * @param {number} size
    * @param {number} x
    * @param {number} y
    * @param {number} id
    */
    constructor(world, x, y, id){
        super(world, x, y);
        this.brain = new NeuralNetwork(6, 30, 4);
        this.score = 0;
        this.fitness = 0;
        this.id = id;
    };

    // METHODS THAT MAKE THE BOT MOVE AND INTERACT WITH THE NN AND GA ALGOS

    /**
     * Makes the bot move by getting an output fron neurla networks brain
     */
    think(){
        let input = this.createBrainInput();
        let result = this.brain.predict(input);
        super.think(result);
    };

    /**
     * Updates bot's fitness score by getting coordiantes of bot's head position
     */
    updateScore() {
        super.updateScore(this);
    };

    /**
     * Clones the bot
     * @returns {Robot} - cloned bot
     */
    clone() {
        let new_robot = new RobotSne(this.world, this.size, this.x, this.y, this.id);
        new_robot.brain.dispose();
        new_robot.brain = this.brain.clone();
        return new_robot;
    };

    /**
     * Mutates the bot (i.e. mutates weights of the brain nn)
     * @param {number} rate - mutation rate [0,1]
     */
    mutate(rate = 0.05) {
        const self = this;
        function fn(x) {
            if (self.random(1) < rate) {
                let offset = self.randomGaussian() * 0.5;
                let newx = x + offset;
                return newx;
            }
            return x;
        }

        let ih = this.brain.input_weights.dataSync().map(fn);
        let ih_shape = this.brain.input_weights.shape;
        this.brain.input_weights.dispose();
        this.brain.input_weights = tf.tensor(ih, ih_shape);

        let ho = this.brain.output_weights.dataSync().map(fn);
        let ho_shape = this.brain.output_weights.shape;
        this.brain.output_weights.dispose();
        this.brain.output_weights = tf.tensor(ho, ho_shape);
    };

    /**
     * Creates an offspring, given two parents
     * @param {Planck.World} world - current world where simulation is happening
     * @param {Robot} parentA - first parent
     * @param {Robot} parentB - second parent
     * @returns {Robot} - offspring
     */
    static crossover(world, parentA, parentB) {
        const parentABrain = parentA.brain.clone();
        const parentBBrain = parentB.brain.clone();

        let parentA_in_dna = parentABrain.input_weights.dataSync();
        let parentA_out_dna = parentABrain.output_weights.dataSync();
        let parentB_in_dna = parentBBrain.input_weights.dataSync();
        let parentB_out_dna = parentBBrain.output_weights.dataSync();

        let mid = parentA.score / parentB.score;

        //let mid = Math.floor(Math.random() * parentA_in_dna.length);
        let child_in_dna = [...parentA_in_dna.slice(0, mid), ...parentB_in_dna.slice(mid, parentB_in_dna.length)];
        let child_out_dna = [...parentA_out_dna.slice(0, mid), ...parentB_out_dna.slice(mid, parentB_out_dna.length)];

        // create new child here
        const y = (world.vtcl.max + world.vtcl.min) / 2;
        const hztl = world.hztl;
        const x = Math.round(Math.random() * (hztl.max - hztl.min)/7 + hztl.min);
        let child = new RobotSne(world, 1, x, y, 0);
        let input_shape = parentABrain.input_weights.shape;
        let output_shape = parentABrain.output_weights.shape;

        child.brain.dispose();

        child.brain.input_weights = tf.tensor(child_in_dna, input_shape);
        child.brain.output_weights = tf.tensor(child_out_dna, output_shape);

        return child;
    };

    // METHODS MISCELLAENOUS

    /**
     * Kills the bot and deallocs all memory the bot used
     */
    kill() {
        super.kill();
        this.score = null;
        this.brain.dispose();
        this.brain = null;
    };

    /** generates a random number */
    random(min, max) {
        var rand = Math.random();
        if (typeof min === 'undefined') {
            return rand;
        } else if (typeof max === 'undefined') {
            if (min instanceof Array) {
                return min[Math.floor(rand * min.length)];
            } else {
                return rand * min;
            }
        } else {
            if (min > max) {
                var tmp = min;
                min = max;
                max = tmp;
            }

            return rand * (max - min) + min;
        }
    };

    /** generates gaussian random number */
    randomGaussian() {
        var x1, x2, rad, y1;
        do {
            x1 = 2 * this.random() - 1;
            x2 = 2 * this.random() - 1;
            rad = x1 * x1 + x2 * x2;
        } while (rad >= 1 || rad == 0);
        var c = Math.sqrt(-2 * Math.log(rad) / rad);
        return x1 * c;
    };

    /** save brain nn weights */
    saveWeights(){
        this.brain.saveWeights();
    };
    
};