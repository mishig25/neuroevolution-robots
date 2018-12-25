/** Robot class for creating a bot in Planck.js' environment */
class RobotNeat extends Robot{

    /**
    * Takes in brain, world, x, y
    * @constructor
    * @param {Neataptic.Network} brain
    * @param {Planck.World} world
    * @param {number} x
    * @param {number} y
    */
    constructor(brain, world, x, y) {
        super(world, x, y);
        this.brain = brain;
        this.brain.score = 0;
    };

    // METHODS THAT MAKE THE BOT MOVE AND INTERACT WITH THE NN AND GA ALGOS

    /**
     * Makes the bot move by getting an output fron neurla networks brain
     */
    think() {
        let input = this.createBrainInput();
        let result = this.brain.activate(input);
        super.think(result);
    };

    /**
     * Updates bot's fitness score by getting coordiantes of bot's head position
     */
    updateScore() {
        super.updateScore(this.brain);
    };
};