class Dustbinwall{

constructor(x,y,width,height){

        this.body = Bodies.rectangle(x, y, width, height, {isStatic:true})
        this.width = width;
        this.height = height;
        this.image = loadImage("images.jpg");
        World.add(world, this.body);
    }
    display(){
      push()
         // translate(pos.x, pos.y);
         // rotate(angle);
          imageMode(CENTER);
         // strokeWeight(4);
         // stroke("red");
         // fill("white");
          image(this.image,875, 410, this.width,this.height);
          pop();
    }
  
  }


    








