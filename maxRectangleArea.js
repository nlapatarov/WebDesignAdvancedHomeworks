function Rectangle(id, width, height){
    this.id = id;
    this.width = width;
    this.height = height;
    this.sum = width * height;
}

let rectangle1 = new Rectangle("r1", 40, 20);
let rectangle2 = new Rectangle("r2", 30, 30);
let rectangle3 = new Rectangle("r3", 10, 80);
let rectangle4 = new Rectangle("r4", 90, 2);
let rectangle5 = new Rectangle("r5", 20, 20);

let rectangleAreas = [rectangle1, rectangle2, rectangle3, rectangle4, rectangle5];

for (let i = 0; i < rectangleAreas.length; i++) {
    
    
    console.log(rectangleAreas[i].sum);
}











