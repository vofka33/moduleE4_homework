/*Написать, функцию, которая принимает в качестве аргумента объект и выводит
в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

const detail = {
    material : 'metal',
    nameOfMetal : 'iron'
}

const nutBolt = Object.create(detail);
nutBolt.size = 14;
nutBolt.form = 'hexagon';
nutBolt.weight = 24;
nutBolt.purpose = 'bracing';

function findOwnProperties (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
        console.log(`${key} - ${obj[key]}`);
        }
    }
}

findOwnProperties(nutBolt);




