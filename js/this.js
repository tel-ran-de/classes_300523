// THIS указывает на определенный контекст

// ГЛОБАЛЬНЫЙ ПРИМЕР
console.log(this) // контекст выполнения кода = это глобальный объект WINDOW
const button = document.createElement('button')
button.innerText = 'click'
document.body.append(button)

// ПРИМЕР ДОМ ЭЛЕМЕНТА
// когда у нас отрабатывает событие то в this элемент на котором происходит событие
// button.addEventListener('click', function () {
//   console.log(this) // локальный контекст это кнопка
// })

// для объектов и классов this это объект/класс перед точкой

// ПРИМЕР КЛАССА - функция которая произорвдит объекты
class Primary {
  constructor(props) {
    this.name = props.name
  }
}
const prim = new Primary({ name: 'first' })
console.log(prim.name)
const second = new Primary({ name: 'second' })
console.log(second.name)

// ПРИМЕР РАБОТЫ ОБЪЕКТА
const user = {
  email: 'vlad@mail.com',
  // Функция внутри объекта - МЕТОД
  showEmail: function () {
    console.log(this.email)
  },
  sayHi: function () {
    console.log('hi')
  },
}

user.showEmail()
user.sayHi()

function User(name) {
  this.name = name
}

const newUSer = new User('vasya')
console.log(newUSer.name)

// 1. у стрелочной функции нет своего контекста this
// берут контекст из внешнего окружения
button.addEventListener('click', () => console.log(this))
button.addEventListener('click', function () {
  console.log(this)
})
// 2. Она не может быть функцией конструктором
const Post = (post) => (this.post = post)
const newPost = new Post('hi')
console.log(newPost)

// 3. У обычнйо функции должен быть всегда return
// Когда в одну строчку можно не писать return у стрелочной функции (нет фигурных скобок)
console.log(sum(1, 2))
const sum = (a, b) => {
  console.log(a, b)
  return a + b
}
// function declaration
function sum1(a, b) {
  return a + b
}

// 4. Hoisting только у обычной функции
console.log(sum1(2, 4))
function sum1(a, b) {
  return a + b
}
console.log(a + 4)
let a = 1

//5. у стрелочнйо функции нет arguments
function multiply(a, b, c) {
  console.log(arguments)
  return a * b * c
}
console.log(multiply(3, 4, 5))

const multiply1 = (a, b, c) => {
  console.log(arguments)
  return a * b * c
}
console.log(multiply1(3, 4, 5))

// отличия стрелочной от обычной

// вопросы на собес составлены 5 лет назад (10 лет назад)
// проект на реакт 18 + typescript --> ООП
// script defer async

// call, apply, bind
const person = {
  name: 'John',
  age: 10,
  sayHi: function () {
    console.log(`Hi, I'm ${this.name} and I am ${this.age} years old`)
  },
}

// У одного объекта есть метод
// call позволяет в качетсве контекста привязать другой объект
// аргумент это контекст для выполнения функции
person.sayHi.apply(person2)

//
const person2 = {
  firstName: 'Ivan',
  lastName: 'petrov',
}
const person10 = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country
  },
}

//console.log(person10.fullName.apply(person2, ['Berlin', 'Germany']))
console.log(person10.fullName.call(person2, 'Berlin', 'Germany'))

const person23 = {
  firstName: 'John',
  lastName: 10,
  sayHi: function () {
    console.log(`Hi, I'm ${this.firstName} and I am ${this.lastName} `)
  },
}

const person32 = {
  firstName: 'Ivan',
  lastName: 'petrov',
}

const myPet = {
  firstName: 'Fluffy',
  lastName: 'Puffy',
}
// в отличии от call apply  не вызывается сразу
// создается новая функция с новым контекстом

// новая функция которая называется greting
const greeting = person23.sayHi.bind(person32) // создана новая функция с новым контекстом
const greetingOfMyPet = person23.sayHi.bind(myPet)
// создана новая функция с новым контекстом - вызывается с одними и теми же аргументами
greeting() // теперь эта функция вызывается всегда с одинакоым контекстом
greetingOfMyPet()

// деструктуризация
const user1 = {
  name: 'ivan',
  age: 20,
  city: 'Berlin',
  profession: 'frontend',
}
function data1(obj) {
  console.log(obj.profession)
}
function data2(obj) {
  const { profession } = obj
  console.log(profession)
}
function data({ profession }) {
  console.log(profession)
}

data(user1)
data1(user1)
data2(user1)
