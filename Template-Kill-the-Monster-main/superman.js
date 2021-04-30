class superman extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("images/5.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
  