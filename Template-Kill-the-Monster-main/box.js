class Box extends BaseClass {
    constructor(x,y, width , height ){
      super(x,y,width,height);
      this.image = loadImage("images/dg.png");
    }
  
    display() {
    //   this.body.position.x = mouseX;
    //   this.body.position.y = mouseY;
    
    
      super.display();
    }
  }