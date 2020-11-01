class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.5
       }
      var radius = 25;
      this.body = Bodies.circle(x,y,radius);
      this.x = x;
      this.y = y;
      this.image = loadImage("images/walking_1.png");
      World.add(world, this.body);  
    }

    display(){
      var pos = this.body.position;
      image(this.image, pos.x-90, pos.y-20,this.radius,this.radius);
    }   
}