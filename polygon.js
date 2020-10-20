class Polygon {
    constructor(x, y, width, height){
        var options={
          isStatic:false,
          restitution:0.4,
          density:1,
          friction:1
        }
            
            this.body=Bodies.rectangle(x,y,width,height,options);
            this.width=width;
            this.height=height;
            this.image=loadImage("polygon.png");
          
            World.add(world,this.body);
    }
        display(){
          var x=this.body.position;
          push();
          imageMode(CENTER);
          image(this.image,x.x,x.y,this.width,this.height);
          pop();
        }
        } 
        
        
