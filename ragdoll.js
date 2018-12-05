const pl = planck, Vec2 = pl.Vec2;
class Ragdoll{
    constructor(world,size,x,y){
        this.init = false;
        this.world = world;
        this.bodyParts = {};
        this.joints = {};
        this.createBody(size,x,y);
        this.jointsKeys = Object.keys(this.joints);
        this.bodyPartsKeys = Object.keys(this.bodyParts);
        this.brain = new NeuralNetwork(this.jointsKeys.length, 30, this.bodyPartsKeys.length);
        this.init = true;
    }
    createBody(size,x,y){
        this.coreBody(size, x, y);
        this.limb('leftLeg',size / 3, x-size / 1.5, y-size / 0.285);
        this.limb('rightLeg',size / 3, x+size / 1.5, y-size / 0.285);
        this.limb('leftArm',size / 3.5, x-size*3.6, y+size*2.5, true);
        this.limb('rightArm',size / 3.5, x+size * 1.9, y+size * 2.5, true, false);
        this.createJoint('leftLegUp', this.bodyParts.lower, this.bodyParts.leftLegUp, pl.Vec2(x-size/1.3333,y-size/2), Math.PI / 2, Math.PI / 8);
        this.createJoint('rightLegUp', this.bodyParts.lower, this.bodyParts.rightLegUp, pl.Vec2(x+size/1.3333,y-size/2), Math.PI / 8, Math.PI / 2);
        this.createJoint('leftArmUp', this.bodyParts.upper, this.bodyParts.leftArmUp, {x:x-size/1.3333,y:y+size/0.4}, Math.PI / 3);
        this.createJoint('rightArmUp', this.bodyParts.upper, this.bodyParts.rightArmUp, { x: x+size / 1.3333, y: y+size / 0.4 }, Math.PI / 3);
    }
    rot(){
        // this.createBrainInput();
        // this.bodyParts.lower.applyAngularImpulse(-1);
        // const l = this.bodyParts.leftLegLow
        // console.log(l.m_angularVelocity);
        // const l = this.joints.rightArmLow;
        // console.log(l.getLowerLimit(),l.getJointAngle(),l.getUpperLimit());
    }
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
    }
    limb(name,size, x, y, rotate=false, left=true) {
        var w = size, h = 3 * size;
        if (rotate) w = 3 * size, h = size;
        const boxshp = pl.Box(w, h);
        const jointName = name + 'Low';
        if(rotate){
            const upper = this.body_fixture(x + w * 2, y, boxshp);
            const lower = this.body_fixture(x, y, boxshp);
            this.createJoint(jointName, upper, lower, { x: x + w, y: y }, Math.PI / 2);
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
        this.createJoint(jointName, upper, lower, { x: x, y: y + h }, Math.PI / 2);
        this.bodyParts[name + 'Up'] = upper;
        this.bodyParts[name + 'Low'] = lower;
        return upper;
    }
    body_fixture(x, y, shp, density = 1.0) {
        const body_part = this.world.createDynamicBody(Vec2(x, y));
        body_part.createFixture(shp, density);
        return body_part;
    }
    createJoint(name, bodyA, bodyB, anchor, lowerAngle, upperAngle = lowerAngle){
        const limits = {
            lowerAngle: -lowerAngle,
            upperAngle: upperAngle,
            enableLimit: true
        }
        const joint = this.world.createJoint(pl.RevoluteJoint(limits, bodyA, bodyB, anchor));
        this.joints[name] = joint;
    }
    mapRange(num, in_min, in_max, out_min=0.0, out_max=1.0){
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    createBrainInput(){
        let input = [];
        this.jointsKeys.forEach((jointKey) => {
            const jt = this.joints[jointKey];
            const value = this.mapRange(jt.getJointAngle(), jt.getLowerLimit(), jt.getUpperLimit());
            input.push(value);
        });
        return input;
    }
    think(){
        let input = this.createBrainInput();
        let result = this.brain.predict(input);
        for (let i = 0; i < result.length; i++) {
            let impulse = -2;
            if (result[i] > .5) impulse *= -1;
            const bodyPart = this.bodyPartsKeys[i];
            this.bodyParts[bodyPart].applyAngularImpulse(impulse);
        }
    }
    start() {
        setInterval(() => {
            this.think()
        }, 100)
    }
}