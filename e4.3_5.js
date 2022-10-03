//Переписать консольное приложение из предыдущего юнита на классы.



class AllEllectricalDevices{
  constructor(name){
    this.name = name;
    this.voltage = 220;
    this.isOn = false
  }
  turnOn = function(){
    this.isOn = true;
    console.log(`${this.name} - устройство включено`)
    console.log('\n')
  }
  turnOff = function(){
    this.isOn = false;
      console.log(`${this.name} - устройство выключено.`)
      if (this.name == 'lamp'){
        console.log(`Свет погас, больше ничего не видно`)
      }
  }
}

class Lighting extends AllEllectricalDevices{
  constructor(name, purpose, amperage, colorTemperature, voltage){
    super(voltage);
    this.name = name;
    this.amperage = amperage;
    this.colorTemperature = colorTemperature;
    this.power = this.voltage * amperage
    this.purpose = purpose
  }
  getDeviceSummary = function(){
    console.log(`Краткое описание: \n Устройство : ${this.name} (лампа) \n Предназничение : ${this.purpose}\n Цветовая температура : ${this.colorTemperature} К (холодный белый)\
    \n Напряжение ${this.voltage} В \n Сила тока ${this.amperage} А \n Мощьность ${this.power} Вт` )
    console.log('\n')
  }
}

class WaterHeating extends AllEllectricalDevices{
  constructor(name, purpose, amperage, internalVolume, voltage){
    super(voltage);
    this.name = name;
    this.amperage = amperage;
    this.internalVolume = internalVolume;
    this.power = this.voltage * amperage;
    this.purpose = purpose
  }
  getDeviceSummary = function(){
    console.log(`Краткое описание: \n Устройство : ${this.name} (чайник) \n Предназничение : ${this.purpose}\n Объем воды : ${this.internalVolume} Л \
    \n Напряжение ${this.voltage} В \n Сила тока ${this.amperage} А \n Мощьность ${this.power} Вт`)
    console.log('\n')
  }
}

const lamp = new Lighting('lamp', 'освещение', 0.08, 6500);
const kettle = new WaterHeating('kettle', 'нагрев воды', 10, 3000);

lamp.turnOn()
lamp.getDeviceSummary()
kettle.getDeviceSummary()
lamp.turnOff()