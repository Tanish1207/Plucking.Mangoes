class Mango{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:0.5,
            friction:0.3,
            density:1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        //rect(0,0,35);
        rectMode(CENTER);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2)
        pop();
        
    }
}