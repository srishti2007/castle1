class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, 10 , options);
    this.body.x=x;
    this.body.y=y;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill(255);
    ellipse(0, 0, 50, 50);
    pop();
  }
};

class Pillars {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 100, 300, options);
    this.body.x=x;
    this.body.y=y;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, 100, 300);
    pop();
  }
};
class main {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 250, 250, options);
    this.body.x=x;
    this.body.y=y;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, 250, 250);
    pop();
  }
};

