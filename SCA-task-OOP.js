const shape = {
   type:"bla",
   getType: function(){
    return "triangle";
   }
}

function Triangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}

Object.setPrototypeOf(Triangle.prototype, shape);

Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}

let t = new Triangle(1,2,3);