/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true
const isVerifiedUser = false
const hasSpecialPermission = false
const hasTemporaryPass = false

let isAccess 


isAccess === true
if((isAdmin === true || isVerifiedUser === true) && (hasSpecialPermission === true || hasTemporaryPass === true)) {le.log('Доступ разрешен')
} else {
    console.log('Доступ Запрещен')
}// your code
