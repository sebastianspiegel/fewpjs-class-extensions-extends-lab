// Your code here

class Polygon {

    constructor(sides){
        this.sides = sides 
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(accumulator, side){
            return accumulator + side 
        })
    }
}

class Triangle extends Polygon {

    get isValid(){
        if (this.countSides === 3){
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            if (a + b > c && a + c > b && b + c > a) {
                return true
            } else {
                return false 
            }
        } else {
            return false 
        }
    }

}

class Square extends Polygon {

    get isValid(){
        if (this.countSides === 4){
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
            if (a === b && b === c && c === d){
                return true
            } else {
                return false 
            }
        } else {
            return false 
        }
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
}