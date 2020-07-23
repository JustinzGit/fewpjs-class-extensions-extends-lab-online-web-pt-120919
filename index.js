class Polygon {
    constructor(intArray){
        this.sides = intArray
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let perimeter = this.sides.reduce(function(total, element){
            return total + element 
        }, 0)
        return perimeter
    }
}

class Triangle extends Polygon {
    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]

        if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side3 + side2) <= side1){
            return false
        }
        else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid(){
        return this.sides.every(value => value == this.sides[0])
    }

    get area(){
        return this.sides[0] ** 2
    }
}