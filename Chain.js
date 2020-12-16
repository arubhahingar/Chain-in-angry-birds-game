class Chain{
    constructor(object1, object2) {
        var options = {
            bodyA : object1,
            bodyB : object2,
            length : 100,
            stiffness : 0.04
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        push()
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        pop()
    }
}
 