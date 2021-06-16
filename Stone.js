class Stone{
  //added height and width in declaration
	constructor(x,y,width,height)
	{

	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
    this.body = Bodies.rectangle(x, y,width, height,options);
   // this.x = x;
   // this.y = y;
    this.width = width;
    this.height = height;
	
    //this.width = 150;
   // this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;//added this code
    push();
    translate(pos.x, pos.y);
    strokeWeight(3);
    //stroke('white')
   //fill('orange')
    stroke("black");
    fill("Red");
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
