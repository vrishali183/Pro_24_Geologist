class Iron{
	//constructor(x,y,r)
	constructor(x,y)
	{

	var options={
		restitution:0.8,
		friction:3,
		density:30
	}
		//this.x=x;
		//this.y=y;
	//	this.r=r
		//this.body=Bodies.rectangle(x, y, 20,height, options)
		//this.height = 20;
        //this.width = height;
		this.body = Bodies.rectangle(x, y, 50, 50, options);
		this.width = 80;
		this.height = 50;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            rect(0, 0, this.width, this.height);
			pop()
	}

}