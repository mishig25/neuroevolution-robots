const pl = planck, Vec2 = pl.Vec2;

function degToRad(deg) {
    return deg * (Math.PI / 180);
}

/** Robot class for creating a bot in Planck.js' environment */
class Robot {

    /**
    * Takes in world, size, x, y
    * @constructor
    * @param {Planck.World} world
    * @param {number} size
    * @param {number} x
    * @param {number} y
    */
    constructor(brain, world, size, x, y) {
        this.init = false;
        this.world = world;
        this.size = size;
        this.x = x;
        this.canUpdateScore = true;
        this.y = y;
        this.bodyParts = {};
        this.joints = {};
        this.createBody(size, x, y);
        this.jointsKeys = Object.keys(this.joints);
        this.jointsLegKeys = [];
        this.jointsKeys.forEach((part) => {
            if (part.includes('Leg')) this.jointsLegKeys.push(part);
        });
        this.bodyPartsKeys = Object.keys(this.bodyParts);
        this.legPartsKeys = [];
        this.bodyPartsKeys.forEach((part) => {
            if (part.includes('Leg')) this.legPartsKeys.push(part);
        });
        this.brain = brain;
        this.brain.score = 0;
        this.init = true;
    };

    // METHODS FOR CREATING PLACNK.JS PHYSICS BODIES AND JOINTS

    /**
    * Creates robot bodies by constructing necessary shapes and joints
    * @param {number} size - scene size
    * @param {number} x - birth x position
    * @param {number} y - birth y position
    */
    createBody(size, x, y) {
        this.coreBody(size, x, y);
        this.limb('leftLeg', size / 3, x - size / 1.5, y - size / 0.285);
        this.limb('rightLeg', size / 3, x + size / 1.5, y - size / 0.285);
        this.limb('leftArm', size / 3.5, x - size * 3.6, y + size * 2.5, true);
        this.limb('rightArm', size / 3.5, x + size * 1.9, y + size * 2.5, true, false);
        const rotAngle = degToRad(20);
        this.createJoint('leftLegUp', this.bodyParts.lower, this.bodyParts.leftLegUp, pl.Vec2(x - size / 1.3333, y - size / 2), rotAngle, rotAngle);
        this.createJoint('rightLegUp', this.bodyParts.lower, this.bodyParts.rightLegUp, pl.Vec2(x + size / 1.3333, y - size / 2), rotAngle, rotAngle);
        this.createJoint('leftArmUp', this.bodyParts.upper, this.bodyParts.leftArmUp, { x: x - size / 1.3333, y: y + size / 0.4 }, Math.PI / 3);
        this.createJoint('rightArmUp', this.bodyParts.upper, this.bodyParts.rightArmUp, { x: x + size / 1.3333, y: y + size / 0.4 }, Math.PI / 3);
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
    limb(name, size, x, y, rotate = false, left = true) {
        var w = size, h = 3 * size;
        if (rotate) w = 3 * size, h = size;
        const boxshp = pl.Box(w, h);
        const jointName = name + 'Low';
        const rotAngle = degToRad(20);
        if (rotate) {
            const upper = this.body_fixture(x + w * 2, y, boxshp);
            const lower = this.body_fixture(x, y, boxshp);
            this.createJoint(jointName, upper, lower, { x: x + w, y: y }, rotAngle);
            if (left) {
                this.bodyParts[name + 'Up'] = upper;
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
    createJoint(name, bodyA, bodyB, anchor, lowerAngle, upperAngle = lowerAngle) {
        const limits = {
            lowerAngle: -lowerAngle,
            upperAngle: upperAngle,
            maxMotorTorque: 100.0,
            enableLimit: true,
            motorSpeed: 0,
            enableMotor: true
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
    think() {
        let input = this.createBrainInput();
        let result = this.brain.activate(input);
        const MOTOR_SPEED = 100;
        for (let i = 0; i < result.length; i++) {
            const jt = this.joints[this.jointsLegKeys[i]];
            if (result[i] > .5) {
                jt.setMotorSpeed(MOTOR_SPEED);
            } else {
                jt.setMotorSpeed(-MOTOR_SPEED);
            }
        }
    };

    /**
     * Creates input for the neural networks brain
     * @returns {array} - the created input for the brain
     */
    createBrainInput() {
        let input = [];
        this.jointsKeys.forEach((jointKey) => {
            if (jointKey.includes('Leg')) {
                const jt = this.joints[jointKey];
                const value = this.mapRange(jt.getJointAngle(), jt.getLowerLimit(), jt.getUpperLimit());
                input.push(value);
            }
        });
        // head vertical position
        const vtcl = this.world.vtcl;
        const hztl = this.world.hztl;
        const head_y = this.mapRange(this.bodyParts.head.c_position.c.y, vtcl.min, vtcl.max);
        input.push(head_y);
        const head_x = this.mapRange(this.bodyParts.head.c_position.c.x, hztl.min, hztl.max);
        input.push(head_x);
        return input;
    };

    /**
     * Updates bot's fitness score by getting coordiantes of bot's head position
     */
    updateScore() {
        const vtcl = this.world.vtcl;
        var head_y = this.mapRange(this.bodyParts.head.c_position.c.y, vtcl.min, vtcl.max);
        if (this.canUpdateScore) {
            this.brain.score = this.bodyParts.head.c_position.c.x - this.x;
        }
        if (head_y < .6) {
            this.canUpdateScore = false;
            this.brain.score = -1000;
        };
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
};