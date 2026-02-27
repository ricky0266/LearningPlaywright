//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.


let a = 10;
let b = 10;
let c = 30;

if
    (a === b && b === c) {
    console.log("equilateral ");

} else if ((a === b && a !== c) || (b === c && b !== a) || (c === a && a !== b)) {
    console.log("isosceles ");
}
else {
    console.log("scalene");
}




