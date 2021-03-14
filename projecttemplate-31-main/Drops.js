class Drops {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.r=radius;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
    display(){
        push();
        translate();
        rotate(angle);
        rectMode(CENTER);
        rect(x,y,width,height)
        pop();
         


    }
    drops(){
        for(var i=0;i=400;i=i++){
            new Drops(random(0,400),random(0,400), 5,5)
        }
         

    }
    reposition(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})

        }
    

    }
}