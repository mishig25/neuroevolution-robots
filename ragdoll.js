var pl = planck, Vec2 = pl.Vec2;
class Ragdoll{
    constructor(world,size){
        this.world = world;
        this.createBody(size);
    }
    createBody(size){
        var lower = this.coreBody(size, 0, 0);
        var leftLeg = this.limb(size / 3, -size / 1.5, -size / 0.285);
        var rightLeg = this.limb(size / 3, size / 1.5, -size / 0.285);

        // const limits = {
        //     lowerAngle: -angle,
        //     upperAngle: angle,
        //     enableLimit: true,
        // };

        var verts = lower.m_fixtureList.m_shape.m_vertices;
        var jointPosition = pl.Vec2(verts[0].x, verts[0].y);
        jointPosition.x += size / 4;
        var jointPosition2 = pl.Vec2(verts[1].x, verts[1].y);
        jointPosition2.x -= size / 4;

        var joint = this.world.createJoint(pl.RevoluteJoint({}, lower, leftLeg, jointPosition));
        var jointA = this.world.createJoint(pl.RevoluteJoint({}, lower, rightLeg, jointPosition2));
    }
    coreBody(size, x, y) {
        var w = size, h = size;
        var boxshpUp = pl.Box(w, h);
        var boxshpLow = pl.Box(w, h / 2);
        var headshp = pl.Circle(w / 1.5);

        var lower = this.body_fixture(x, y, boxshpLow);
        var head = this.body_fixture(x, y + h * 3.4, headshp);
        var upper = this.body_fixture(x, y + h * 1.5, boxshpUp);

        var jointPosition = { x: x, y: y + h / 2 };
        const coreAngle = Math.PI / 8;
        const coreLimits = {
            lowerAngle: -coreAngle,
            upperAngle: coreAngle,
            enableLimit: true,
        };
        var jointLowerUpper = this.world.createJoint(pl.RevoluteJoint(coreLimits, upper, lower, jointPosition));
        const neckAngle = Math.PI / 6;
        const neckLimits = {
            lowerAngle: -neckAngle,
            upperAngle: neckAngle,
            enableLimit: true,
        };
        var jointHeadUpper = this.world.createJoint(pl.RevoluteJoint(neckLimits, upper, head, { x: x, y: y + h * 3 }));
        return lower;
    }
    limb(size, x, y) {
        var w = size, h = 3 * size;
        var boxshp = pl.Box(w, h);

        var lower = this.body_fixture(x, y, boxshp);
        var upper = this.body_fixture(x, y + h * 2, boxshp);

        const angle = Math.PI / 2;
        const limits = {
            lowerAngle: -angle,
            upperAngle: angle,
            enableLimit: true,
        };
        var jointPosition = { x: x, y: y + h };
        var joint = this.world.createJoint(pl.RevoluteJoint(limits, upper, lower, jointPosition));
        return upper;
    }
    body_fixture(x, y, shp, density = 1.0) {
        var body_part = this.world.createDynamicBody(Vec2(x, y));
        body_part.createFixture(shp, density);
        return body_part;
    }
}