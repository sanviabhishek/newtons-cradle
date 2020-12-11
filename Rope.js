class Rope {
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
       var options={
         bodyA: body1,
         bodyB: body2,
         pointB:{x:this.offsetX, y:this.offsetY}
       }
       this.rope=Constraint.create(options);
       World.add(world, this.rope);
    }
    display(){
      var pointA=this.rope.bodyA.position;
      var pointB=this.pointB;
      push();
      strokeWeight(4);
      stroke(48,28,8);
      line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();
    }
  }