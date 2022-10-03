/*Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
План:
        Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
        Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
        У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
        Создать экземпляры каждого прибора.
        Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

Общие требования:

        Имена функций, свойств и методов должны быть информативными.
        Соблюдать best practices:

            использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
            информативные имена (а не a, b);
            четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
            использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.*/


function AllEllectricalDevices(name){
  this.name = name,
  this.voltage = 220,
  this.isOn = false
  }

AllEllectricalDevices.prototype.turnOn = function(){
  this.isOn = true;
  console.log(`${this.name} - устройство включено`)
  console.log('\n')
}

AllEllectricalDevices.prototype.turnOff = function(){
  this.isOn = false;
    console.log(`${this.name} - устройство выключено.`)
    if (this.name == 'lamp'){
      console.log(`Свет погас, больше ничего не видно`)
    }
}

function Lighting (name, purpose, amperage, colorTemperature){
  this.name = name,
  this.amperage = amperage,
  this.colorTemperature = colorTemperature,
  this.power = this.voltage * amperage,
  this.purpose = purpose
}

Lighting.prototype = new AllEllectricalDevices()
Lighting.prototype.getDeviceSummary = function(){
  console.log(`Краткое описание: \n Устройство : ${this.name} (лампа) \n Предназничение : ${this.purpose}\n Цветовая температура : ${this.colorTemperature} К (холодный белый)\
  \n Напряжение ${this.voltage} В \n Сила тока ${this.amperage} А \n Мощьность ${this.power} Вт` )
  console.log('\n')
}

function WaterHeating (name, purpose, amperage, internalVolume){
  this.name = name,
  this.amperage = amperage,
  this.internalVolume = internalVolume,
  this.power = this.voltage * amperage,
  this.purpose = purpose
}

WaterHeating.prototype = new AllEllectricalDevices()
WaterHeating.prototype.getDeviceSummary = function(){
  console.log(`Краткое описание: \n Устройство : ${this.name} (чайник) \n Предназничение : ${this.purpose}\n Объем воды : ${this.internalVolume} Л \
  \n Напряжение ${this.voltage} В \n Сила тока ${this.amperage} А \n Мощьность ${this.power} Вт`)
  console.log('\n')
}

const lamp = new Lighting('lamp', 'освещение', 0.08, 6500);
const kettle = new WaterHeating('kettle', 'нагрев воды', 10, 3000);

lamp.turnOn()
lamp.getDeviceSummary()
kettle.getDeviceSummary()
lamp.turnOff()