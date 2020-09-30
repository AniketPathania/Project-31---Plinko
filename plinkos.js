class Plinko{
    constructor(x,y){
        this.x = x;
        this.y = y;

        var options ={
            isStatic:true,
            restitution:1.1,
            friction:0.5,
            density:1.0
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
  display(){

      var pos = this.body.position;
      fill("white");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,10,10);
  }

    
}