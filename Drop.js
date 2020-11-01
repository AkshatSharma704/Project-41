class Drop{
    constructor(x,y){
        var options= {
            restitution: 0.1,
            friction: 0.001
         }
        var radius = 10;
        this.body = Bodies.circle(x,y,radius,options);       
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
    }

    update(){
        if(this.body.position.y>displayHeight){
          Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
        }
    }
}