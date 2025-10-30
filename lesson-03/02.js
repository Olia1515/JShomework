// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let cost; 
 if (num % 2 === 0){
     cost = true 
    } else { cost = false }
    return cost
} let result = isEven(7);
console.log(result)