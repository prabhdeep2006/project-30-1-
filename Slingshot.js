class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        
        World.add(world,this.sling);
    }
    
    
        fly() {
        this.sling.bodyA = null;


    }
        attach(body) {
            this.sling.bodyA=body;
        }
    display(){
        if(this.sling.bodyA){
            var c=this.sling.bodyA.position;
            var d=this.pointB;
            push();
            strokeWeight(4);
            stroke("brown");
            line(c.x,c.y,d.x,d.y);
            pop();
        }
    }
}