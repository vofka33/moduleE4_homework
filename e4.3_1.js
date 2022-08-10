/*Задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в
консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

function outputs(obj) {
  for (let key in obj) {
    if (screw.hasOwnProperty(key)) {
        console.log(key + ' : ' +  obj[key]); 
    }   
  }
} 

// Собственно функция выше. А для проверки:

const product = {
  material: "iron"
};

const screw = Object.create(product);
screw.color = 'black';
screw.size = 5;

outputs(screw)




