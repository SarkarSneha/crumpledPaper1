class Paper{
    constructor(x,y,width,height){
        var options = {
            isStayic:false,
            restitution:0.3,
            friction:0.3,
            density:1.2
        }
        this.radius = 30;
        this.body = Bodies.circle(x, y, 30, options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
      
      
         ellipseMode(RADIUS);
         fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        
      }
    }
