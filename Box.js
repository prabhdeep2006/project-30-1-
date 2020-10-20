class Box  {
  constructor(x, y, width, height){
var options={
  isStatic:false,
  restitution:0.2,
  friction:0.5,
  density:1
}
    this.Visibility=255;
    this.image=loadImage("wood1.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
display(){
  var x=this.body.position;
  console.log(this.body.speed);
if(this.body.speed<3){
  imageMode(CENTER);
  image(this.image,x.x,x.y,this.width,this.height);
}
else {
  World.remove(world,this.body);

  
  push();
  this.Visibility=this.Visibility-5;
tint(255,this.Visibility);
image(this.image,x.x,x.y,this.width,this.height);
  pop();
}
} 
score(){
  if(this.Visibility<0 && this.Visibility>-1005){
    score=score+5;
  }
}
}

