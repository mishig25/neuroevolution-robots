var pl = planck, Vec2 = pl.Vec2;
class Ragdoll{
    constructor(world,size){
        this.world = world;
        this.createBody(size);
    }
    createBody(size){
        const lower = this.coreBody(size, 0, 0);
        const leftLeg = this.limb(size / 3, -size / 1.5, -size / 0.285);
        const rightLeg = this.limb(size / 3, size / 1.5, -size / 0.285);

        const verts = lower.m_fixtureList.m_shape.m_vertices;
        const jointLeftLeg = pl.Vec2(verts[0].x, verts[0].y);
        jointLeftLeg.x += size / 4;
        const jointRightLeg = pl.Vec2(verts[1].x, verts[1].y);
        jointRightLeg.x -= size / 4;
        this.createJoint(lower, leftLeg, jointLeftLeg, Math.PI / 8);
        this.createJoint(lower, rightLeg, jointRightLeg, Math.PI / 8);
    }
    coreBody(size, x, y) {
        const w = size, h = size;
        const boxshpUp = pl.Box(w, h);
        const boxshpLow = pl.Box(w, h / 2);
        const headshp = pl.Circle(w / 1.5);

        const lower = this.body_fixture(x, y, boxshpLow);
        const head = this.body_fixture(x, y + h * 3.4, headshp);
        const upper = this.body_fixture(x, y + h * 1.5, boxshpUp);
        this.createJoint(upper, lower, { x: x, y: y + h / 2 }, Math.PI / 8);
        this.createJoint(upper, head, { x: x, y: y + h * 3 }, Math.PI / 6);
        return lower;
    }
    limb(size, x, y) {
        const w = size, h = 3 * size;
        const boxshp = pl.Box(w, h);

        const lower = this.body_fixture(x, y, boxshp);
        const upper = this.body_fixture(x, y + h * 2, boxshp);
        this.createJoint(upper, lower, { x: x, y: y + h }, Math.PI / 2);
        return upper;
    }
    body_fixture(x, y, shp, density = 1.0) {
        var body_part = this.world.createDynamicBody(Vec2(x, y));
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