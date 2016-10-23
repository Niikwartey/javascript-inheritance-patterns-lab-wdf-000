class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class Side {
  constructor(length) {
    this.length = length
  }
}

class Shape {
  constructor() {}
  addToPlane(x, y) {
    this.position = new Point(x, y)
  }

  move(x, y) {
    this.addToPlane.call(this, x, y)
  }
}


class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  diameter() {
    return this.radius * 2
  }

  area() {
    return Math.PI * this.radius^2
  }

  circumference() {
    return 2 * Math.PI * this.radius
  }
}


class Polygon extends Shape {
  constructor(sides) {
    super()
    this.sides = sides
  }

  perimeter() {
    return this.sides.map(side => side.length).reduce((sum, side) => sum + side)
  }
  
  numberOfSides() { return this.sides.length }
}

class Quadrilateral extends Polygon {
  constructor(s1, s2, s3, s4) {
    let sides = [];
    for(var i in arguments) {
      sides.push(new Side(arguments[i]))
    }
    super(sides)
  }
}

class Triangle extends Polygon {
  constructor(s1, s2, s3, s4) {
    let sides = [];
    for(var i in arguments) {
      sides.push(new Side(arguments[i]))
    }
    super(sides)
  }
}

class Rectangle extends Quadrilateral {
  constructor(s1, s2) {
    super(s1, s2, s1, s2)
    this.width = s1;
    this.height = s2;
  }
  
  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(s1) {
  super(s1, s1, s1, s1)
  }
  
  listProperties() {
    var propList = "";
    for (var prop in this) {
      if(this.hasOwnProperty(prop)) {
        propList += ` ${prop} : ${this[prop]} `
      }
    }
    return propList;
  }
}
