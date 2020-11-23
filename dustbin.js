class Dustbin{
  constructor(x,y,width,height){
            var options={ 
               isStatic:true
        }
       this.bodya=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.bodya);
        this.bodyb=Bodies.rectangle((x-(width/2)),(y-(height*2)),height,width,options)
        World.add(world,this.bodyb);
        this.bodyc=Bodies.rectangle((x+(width/2)),(y-(height*2)),height,width,options)
        World.add(world,this.bodyc);

        this.width=width
        this.height=height    
    }
    display(){
        fill("white")
    rect(this.bodya.position.x,this.bodya.position.y,215,this.height) 
    rect((this.bodyb.position.x-(this.width/2)),(this.bodyb.position.y-(this.height*2)),this.height,90)
    rect((this.bodyc.position.x+(this.width/2)),(this.bodyc.position.y-(this.height*2)),this.height,90)
}
}