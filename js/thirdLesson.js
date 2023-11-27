const arr = [1] // Prototype --> Array --> Object
// Все в JS это объекты
// Object - это самый главный(первый) класс в JS

// Прототипированное наследие
console.log(arr)
console.log(arr.length)
arr.forEach()
Object.values()
arr.length //  экзхемпляр Array
// Мы думаем каким образом нам создать класс родительский
// Каким образом нам потмо расширять другие классы

class Employee {
  constructor(name, profession) {
    this.name = name
    this.profession = profession
  }
  sayHi() {
    console.log('hi')
  }
}

class EmployeOfCinema extends Employee {
  constructor(object) {
    // чтобы использовать здесь объект в super
    // у конструктора род класса тоже должен быть объект парпаметром
    super(object.name, object.profession) // наследуем от родительского класса свойства
    // super вызывает конструктор род класса
    this.films = object.films
  }
}
const dirObj = { films: ['1917'], profession: 'director', name: 'Peter Jackson' }

// принимается объект в конструктор и тогда мы при создании экземпляра используем объект
const emp = new EmployeOfCinema(dirObj)
console.log(emp)

class Director extends EmployeOfCinema {
  constructor(data) {
    super(data)
    this.assistants = data.assistants
  }
}

class Actress extends EmployeOfCinema {
  constructor(data) {
    super(data)
    this.roles = data.roles
  }
}
class Janitor extends Employee {
  constructor(data) {
    super(data)
    this.rooms = data.rooms
  }
}

const jan = new Janitor({ name: 'Klass', profession: 'janitor', rooms: ['100a', '200b'] })
console.log(jan)
// Создаем класс School
// свойства name, numberOfStudents, level

function sum(obj) {
  console.log(obj.c)
  return obj.a + obj.b - obj.c
}

// до 2015 года - функция конструкто
function User(userName) {
  this.name = userName.name
  this.profession = userName.profession
}
// чтобы создавать несколько объектов одного типа
// функции конструкторы пишутся с большой буквы
// вызываются с помощью слова new

// после 2015 - класс

// есть две переменные
const userName = 'Peter'
const userProfession = 'actor'
const newObj = { name: userName, profession: userProfession }

class User {
  constructor(name, profession) {
    this.name = name
    this.profession = profession
  }
}

const newUser = new User(userName, userProfession)
const userObj = {
  name: 'Oleg',
  profession: 'analytic',
}

class User {
  constructor(userName) {
    this.name = userName.name
    this.profession = userName.profession
  }
}

const anotherUser = new User(userObj)
