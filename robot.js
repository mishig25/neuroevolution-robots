const pl = planck, Vec2 = pl.Vec2;

function degToRad(deg) {
    return deg * (Math.PI / 180);
}


/** Robot class for creating a bot in Planck.js' environment */
class Robot{

    /**
    * Takes in world, size, x, y, id
    * @constructor
    * @param {Planck.World} world
    * @param {number} size
    * @param {number} x
    * @param {number} y
    * @param {number} id
    */
    constructor(world,size,x,y,id){
        this.init = false;
        this.world = world;
        this.size = size;
        this.x = x;
        this.xx = x;
        this.y = y;
        this.id = id;
        this.score = 0;
        this.fitness = 0;
        this.bodyParts = {};
        this.joints = {};
        this.createBody(size,x,y);
        this.jointsKeys = Object.keys(this.joints);
        this.bodyPartsKeys = Object.keys(this.bodyParts);
        this.brain = new NeuralNetwork(this.jointsKeys.length+2, 30, this.bodyPartsKeys.length);
        this.init = true;
    };

    // METHODS FOR CREATING PLACNK.JS PHYSICS BODIES AND JOINTS

    /**
    * Creates robot bodies by constructing necessary shapes and joints
    * @param {number} size - scene size
    * @param {number} x - birth x position
    * @param {number} y - birth y position
    */
    createBody(size,x,y){
        this.coreBody(size, x, y);
        this.limb('leftLeg',size / 3, x-size / 1.5, y-size / 0.285);
        this.limb('rightLeg',size / 3, x+size / 1.5, y-size / 0.285);
        this.limb('leftArm',size / 3.5, x-size*3.6, y+size*2.5, true);
        this.limb('rightArm',size / 3.5, x+size * 1.9, y+size * 2.5, true, false);
        const rotAngle = degToRad(10);
        this.createJoint('leftLegUp', this.bodyParts.lower, this.bodyParts.leftLegUp, pl.Vec2(x-size/1.3333,y-size/2), rotAngle, rotAngle);
        this.createJoint('rightLegUp', this.bodyParts.lower, this.bodyParts.rightLegUp, pl.Vec2(x+size/1.3333,y-size/2), rotAngle, rotAngle);
        this.createJoint('leftArmUp', this.bodyParts.upper, this.bodyParts.leftArmUp, {x:x-size/1.3333,y:y+size/0.4}, Math.PI / 3);
        this.createJoint('rightArmUp', this.bodyParts.upper, this.bodyParts.rightArmUp, { x: x+size / 1.3333, y: y+size / 0.4 }, Math.PI / 3);
    };

    /**
    * Creates robot chest and stomach by constructing necessary shapes and joints
    * @param {number} size - scene size
    * @param {number} x - birth x position
    * @param {number} y - birth y position
    */
    coreBody(size, x, y) {
        const w = size, h = size;
        const boxshpUp = pl.Box(w, h);
        const boxshpLow = pl.Box(w, h / 2);
        const headshp = pl.Circle(w / 1.5);

        this.bodyParts.lower = this.body_fixture(x, y, boxshpLow);
        this.bodyParts.head = this.body_fixture(x, y + h * 3.4, headshp);
        this.bodyParts.upper = this.body_fixture(x, y + h * 1.5, boxshpUp);
        this.createJoint('spine', this.bodyParts.upper, this.bodyParts.lower, { x: x, y: y + h / 2 }, Math.PI / 8);
        this.createJoint('neck', this.bodyParts.upper, this.bodyParts.head, { x: x, y: y + h * 3 }, Math.PI / 6);
    };

    /**
    * Creates robot arm/leg by constructing necessary shapes and joints
    * @param {number} size - scene size
    * @param {number} x - birth x position
    * @param {number} y - birth y position
    * @param {boolean} rotate - upper or lower limb
    * @param {boolean} left - left or right limb
    * @returns {Planck.DynamicBody} - limb
    */
    limb(name,size, x, y, rotate=false, left=true) {
        var w = size, h = 3 * size;
        if (rotate) w = 3 * size, h = size;
        const boxshp = pl.Box(w, h);
        const jointName = name + 'Low';
        const rotAngle = degToRad(10);
        if(rotate){
            const upper = this.body_fixture(x + w * 2, y, boxshp);
            const lower = this.body_fixture(x, y, boxshp);
            this.createJoint(jointName, upper, lower, { x: x + w, y: y }, rotAngle);
            if (left){
                this.bodyParts[name+'Up'] = upper;
                this.bodyParts[name + 'Low'] = lower;
                return upper;
            }
            this.bodyParts[name + 'Up'] = lower;
            this.bodyParts[name + 'Low'] = upper;
            return lower;
        }
        const lower = this.body_fixture(x, y, boxshp);
        const upper = this.body_fixture(x, y + h * 2, boxshp);
        this.createJoint(jointName, upper, lower, { x: x, y: y + h }, rotAngle);
        this.bodyParts[name + 'Up'] = upper;
        this.bodyParts[name + 'Low'] = lower;
        return upper;
    };

    /**
     * Creates Planck body fixture and adds it to the world
     * @param {number} x 
     * @param {number} y 
     * @param {Planck.Shape} shp 
     * @param {number} density 
     * @returns {Planck.DynamicBody}
     */
    body_fixture(x, y, shp, density = 1.0) {
        const body_part = this.world.createDynamicBody(Vec2(x, y));
        body_part.createFixture(shp, density);
        body_part.m_fixtureList.m_filterGroupIndex = -1;
        return body_part;
    };

    /**
    * Creates RevoluteJoint
    * @param {string} name - label of joint
    * @param {Planck.DynamicBody} bodyA - connecting bodyA
    * @param {Planck.DynamicBody} bodyB - connecting bodyB
    * @param {Planck.Vec2} anchor - anchor of joint
    * @param {number} lowerAngle - min angle joint can reach
    * @param {number} upperAngle - max angle joint can reach
    */
    createJoint(name, bodyA, bodyB, anchor, lowerAngle, upperAngle = lowerAngle){
        const limits = {
            lowerAngle: -lowerAngle,
            upperAngle: upperAngle,
            enableLimit: true
        }
        const joint = this.world.createJoint(pl.RevoluteJoint(limits, bodyA, bodyB, anchor));
        this.joints[name] = joint;
    };

    // METHODS THAT MAKE THE BOT MOVE AND INTERACT WITH THE NN AND GA ALGOS

    /**
     * Makes the bot move every 50 ms
     */
    start() {
        this.interval = setInterval(() => {
            this.think();
            this.updateScore();
        }, 50);
    };

    /**
     * Makes the bot move by getting an output fron neurla networks brain
     */
    think(){
        let input = this.createBrainInput();
        let result = this.brain.predict(input);
        for (let i = 0; i < result.length; i++) {
            let impulse = -1.5;
            if (result[i] > .5) impulse *= -1;
            // let impulse = this.mapRange(result[i],0.0,1.0,-.5,.5);
            const bodyPart = this.bodyPartsKeys[i];
            if (bodyPart.includes('Leg')) impulse *= 2;
            this.bodyParts[bodyPart].applyAngularImpulse(impulse);
        }
    };

    /**
     * Creates input for the neural networks brain
     * @returns {array} - the created input for the brain
     */
    createBrainInput() {
        let input = [];
        this.jointsKeys.forEach((jointKey) => {
            const jt = this.joints[jointKey];
            const value = this.mapRange(jt.getJointAngle(), jt.getLowerLimit(), jt.getUpperLimit());
            input.push(value);
        });
        // head vertical position
        const vtcl = this.world.vtcl;
        const head_y = this.mapRange(this.bodyParts.head.c_position.c.y, vtcl.min, vtcl.max);
        input.push(head_y);
        const hztl = this.world.hztl;
        const head_x = this.mapRange(this.bodyParts.head.c_position.c.x, hztl.min, hztl.max);
        input.push(head_x);
        return input;
    };

    /**
     * Updates bot's fitness score by getting coordiantes of bot's head position
     */
    updateScore() {
        // const vtcl = this.world.vtcl;
        // var head_y = this.mapRange(this.bodyParts.head.c_position.c.y, vtcl.min, vtcl.max);
        // if (head_y < .5) {
        //     head_y -= 2;
        // };
        var right_movement = this.bodyParts.head.c_position.c.x - this.x;
        // dividing by 20 to give more emphases on standing up
        // const right_movement_weight = 1/4;
        // right_movement *= right_movement_weight;

        const new_score = right_movement - this.xx;
        this.xx = right_movement;
        this.score += Math.pow(new_score, 2);
    };

    /**
     * Clones the bot
     * @returns {Robot} - cloned bot
     */
    clone() {
        let new_robot = new Robot(this.world, this.size, this.x, this.y, this.id);
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
        let child = new Robot(world, 1, x, y, 0);
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
        // remove from world
        Object.values(this.joints).forEach((jointsPart) => {
            this.world.destroyJoint(jointsPart);
        });
        Object.values(this.bodyParts).forEach((bodyPart) => {
            this.world.destroyBody(bodyPart);
        });
        this.score = null;
        this.brain.dispose();
        this.brain = null;
        clearInterval(this.interval);
        this.bodyParts = null;
        this.bodyPartsKeys = null;
        this.joints = null;
        this.jointsKeys = null;
    };

    /**
     * Maps a number from input range to output range
     * @param {number} num 
     * @param {number} in_min 
     * @param {number} in_max 
     * @param {number} out_min 
     * @param {number} out_max 
     */
    mapRange(num, in_min, in_max, out_min = 0.0, out_max = 1.0) {
        var result = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        if (result > out_max) {
            return out_max;
        } else if (result < out_min) {
            return out_min;
        }
        return result;
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