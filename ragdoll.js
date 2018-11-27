const pl = planck, Vec2 = pl.Vec2;
class Ragdoll{
    constructor(world,size,x,y){
        this.world = world;
        this.bodyParts = {};
        this.createBody(size,x,y);
    }
    createBody(size,x,y){
        this.coreBody(size, x, y);
        const leftLeg = this.limb(size / 3, x-size / 1.5, y-size / 0.285);
        const rightLeg = this.limb(size / 3, x+size / 1.5, y-size / 0.285);
        const leftArm = this.limb(size / 3.5, x-size*3.6, y+size*2.5, true);
        const rightArm = this.limb(size / 3.5, x+size * 1.9, y+size * 2.5, true, false);
        this.createJoint(this.bodyParts.lower, leftLeg, pl.Vec2(x-size/1.3333,y-size/2), Math.PI / 2, Math.PI / 8);
        this.createJoint(this.bodyParts.lower, rightLeg, pl.Vec2(x+size/1.3333,y-size/2), Math.PI / 8, Math.PI / 2);
        this.createJoint(this.bodyParts.upper, leftArm, {x:x-size/1.3333,y:y+size/0.4}, Math.PI / 3);
        this.createJoint(this.bodyParts.upper, rightArm, { x: x+size / 1.3333, y: y+size / 0.4 }, Math.PI / 3);
    }
    rot(){
        // this.bodyParts.lower.applyAngularImpulse(-1);
    }
    coreBody(size, x, y) {
        const w = size, h = size;
        const boxshpUp = pl.Box(w, h);
        const boxshpLow = pl.Box(w, h / 2);
        const headshp = pl.Circle(w / 1.5);

        this.bodyParts.lower = this.body_fixture(x, y, boxshpLow);
        this.bodyParts.head = this.body_fixture(x, y + h * 3.4, headshp);
        this.bodyParts.upper = this.body_fixture(x, y + h * 1.5, boxshpUp);
        this.createJoint(this.bodyParts.upper, this.bodyParts.lower, { x: x, y: y + h / 2 }, Math.PI / 8);
        this.createJoint(this.bodyParts.upper, this.bodyParts.head, { x: x, y: y + h * 3 }, Math.PI / 6);
    }
    limb(size, x, y, rotate=false, left=true) {
        var w = size, h = 3 * size;
        if (rotate) w = 3 * size, h = size;
        const boxshp = pl.Box(w, h);
        if(rotate){
            const upper = this.body_fixture(x + w * 2, y, boxshp);
            const lower = this.body_fixture(x, y, boxshp);
            this.createJoint(upper, lower, { x: x + w, y: y }, Math.PI / 2);
            if (left) return upper;
            return lower;
        }
        const lower = this.body_fixture(x, y, boxshp);
        const upper = this.body_fixture(x, y + h * 2, boxshp);
        this.createJoint(upper, lower, { x: x, y: y + h }, Math.PI / 2);
        return upper;
    }
    body_fixture(x, y, shp, density = 1.0) {
        const body_part = this.world.createDynamicBody(Vec2(x, y));
        body_part.createFixture(shp, density);
        return body_part;
    }
    createJoint(bodyA, bodyB, anchor, lowerAngle, upperAngle = lowerAngle){
        const limits = {
            lowerAngle: -lowerAngle,
            upperAngle: upperAngle,
            enableLimit: true
        }
        this.world.createJoint(pl.RevoluteJoint(limits, bodyA, bodyB, anchor));
    }
}