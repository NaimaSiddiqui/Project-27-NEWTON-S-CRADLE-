class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:400
          
        }
       // this.xOffset= xOffset;
        //this.yOffset= yOffset;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        push();
        stroke("white")
        strokeWeight(4);
        line(this.rope.bodyA.position.x , this.rope.bodyA.position.y-25 , this.rope.pointB.x,this.rope.pointB.y);
        pop();
    }
}