// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
if(a > b && a > c) {
    return a;
    } else if (b > a && b > c){ 
    return b;
    } else if(c > a && c > b){
    return c;
    }
} let result = findLargest(1, 2, 3)
console.log(result)