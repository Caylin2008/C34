class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'density':1,
          frictionAir:0.005
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("turquoise");
      fill("turquoise");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };