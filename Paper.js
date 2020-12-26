class paper
{
	constructor(x,y,r)
	{
		var options={
			
			restitution:0.1,
			friction:1,
			density:1.2,
			
			

			
			}
		this.x=x;
		this.y=y;
		this.radius=r
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
		this.image=loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
      strokeWeight(3);
			fill(0,0,225)
			image(this.image,0,0,this.radius,this.radius);
			pop()
			
  }
}