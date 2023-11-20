// new Promise((resolve, reject) => )
throw new Error('error')
new Date()
String
Object
Array
const newArr = [1, 2, 4] // new Array
newArr.forEach((el) => console.log(el))

// хранятся глобальные "объекты" которые мы вызываем
// инстанс - instance - сущность нашего объекта
const firstPromise = new Promise()
const secPromise = new Promise()

// объект
const user = {
  //ключ: значение
  name: 'Oleg', // свойство
  sayHay() {
    console.log('hello')
  }, // метод - функция внутри объекта
}
console.log(user.name)
user.sayHay()

// ООП - объектно ориентированное программирование
// мы делаем абстракции в качестве объектов
// сущность - которая наделена свойствами и функциями (методами)

// Массив - map, forEach, length,
// Объект или промисы

// создаем глобальный объект и мы храним все методы и свойства
// упорядоченность / все в одном месте / переиспользование / удобство

// JS - Java
// класс(фабрика) - это специальная конструкция котоаря позволяет
// создавать множество олбъектов с одними свойствами и методами

// Функциональные компоненты
// Классовые компоненты

// 1. кличка
// 2. порода
// 3. возраст
// 4. Окрас
// 5. вес
// 6. примета
// 7. пол
// 8. дрессированная или нет = boolean
// 9. команда голос
// 10. команда сидеть

// Создаем класс Собака

class Dog {
  // initialization = инициализация
  // указывает на КОНКРЕТНЫЙ объект
  // при вызове функции this принимает значение инстанса класса

  // конструктор автоматически вызывается при использовании new
  constructor(name) {
    this.name = name
  }
  bark() {
    console.log('I am ' + this.name)
  }
}
// this дает путь к указанному объекту
// ссылаемся на нужный нам объект
const fluffy = new Dog('Fluffy') // fluffy - инстанс класса / экземпляр
fluffy.bark() // this объект перед точкой this.name = fluffy.name

const floppy = new Dog()
floppy.init('Floppy')
floppy.bark() // this это объект floppy он ссылается floppy.name

class Dog {
  constructor(name, color, canBark, age) {
    this.name = name
    this.color = color
    this.canBark = canBark
    this.age = age
  }
  bark() {
    this.canBark ? console.log('I am ' + this.name) : console.log('sorry, cant bark')
  }
  happy_birthday() {
    // this.age = this.age + 1
    this.age += 1
  }
}
// соблюдаем порядок как параметры в конструкторе
const fluffy = new Dog('Fluffy', 'brown', false, 4)
console.log(fluffy.age) // 4
fluffy.happy_birthday()
console.log(fluffy.age) // 5
fluffy.bark()

// Создаем класс Product
// к конструкторе три параметра
// amout, price, title
class Product {
  constructor(amount, price, title) {
    this.amount = amount
    this.price = price
    this.title = title
  }
  sell() {
    if (this.amount <= 0) throw new Error('товара нет в наличии')
    this.amount -= 1
  }
  // изменить название товара
  // changeTitle принимает параметр newTitle
  changeTitle(newTitle) {
    this.title = newTitle
  }
  changePrice(newPrice) {
    // цена текущего объекта меньше 0 ? => выкинь ошибку
    // throw new Error('dsf')
    if (newPrice < 0) throw new Error('цена не может быть отрицательной')
    this.price = newPrice
    //newPrice > 0 ?  this.price = newPrice : throw new Error('цена не может быть отрицательной')
  }
  // изменяет цену changePrice
  // новое условие если цена отрицательная то выкидывает ошибку
  //"цена не может бытьотрицательной"
}
// emmet подсказка
const milk = new Product(2, 10, 'milk')
milk.sell()
console.log(milk.amount)
milk.sell()
console.log(milk.amount)
milk.sell()
console.log(milk.amount)

// врачи медсестры уборщики санитары  пациент
class HospitalEmployee {
  constructor(name) {
    this._name = name // свойство = ключ значение
    this._remainingVacationDays = 20
  }

  get name() {
    return this._name
  } // функция объекта - метод - действия

  get remainingVacationDays() {
    return this._remainingVacationDays
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff
  }
}

// создаем медсестру
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name)
    this.certifications = certifications
  }
}

// в след раз
// static методы и свойства
// get set классов геттеры/сеттеры
// extends / super
// prototype
