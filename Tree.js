class Tree{
    constructor(x,y,height){
        
    
        
       this.x=x;
       this.y=y;
        this.height = height;
        this.image = loadImage("Plucking Mangoes/tree.png");
        
    }
    display(){
       
        push();
       
        
        imageMode(CENTER);
        image(this.image, this.x,this.y,500, this.height);
        pop();
      }
}