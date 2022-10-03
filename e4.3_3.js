//Написать функцию, которая создает пустой объект, но без прототипа.


function createObj () {
    return Object.create(null);
  }
  
  const object = createObj();
  console.log(object);
  console.log(Object.getPrototypeOf(object));