class Tree{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2,
        }
        
        this.x=x;
        this.y=y;
        this.dustbinWidth=450;
		this.dustbinHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);   
  
           

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);

    }
    display(){
		var pos= this.bottomBody.position

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,650,650)
        //rect(0,0,700,20)
        //rectMode(CENTER);
        fill("yellow");
        pop()
    }
}
/*class Tree{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=450;
		this.dustbinHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);   

	}
	display()
	{
			var pos= this.bottomBody.position
			push()
			translate(pos.x,pos.y);
			fill(255)
			imageMode(CENTER);
			image(this.image,0,0,650,650)
			pop()
			
	}

}*/