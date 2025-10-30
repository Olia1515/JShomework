// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
if(a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c){ 
    console.log(b)
    } else if(c > a && c > b){
        console.log(c)
    }
}findLargest(2, 5, -8)