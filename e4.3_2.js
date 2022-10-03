/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство
с данным именем. Функция должна возвращать true или false.*/

const detail = {
    material : 'metal',
    nameOfMetal : 'iron',
    size : 14,
    form : 'hexagon',
}

const str = prompt('Введите строку', 'строка')

function checkKey (obj, prop) {
    res = prop in obj;
    return res;
}

checkKey(detail, str);
console.log(res);