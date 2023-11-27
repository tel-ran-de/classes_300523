class User {
  constructor(name, userName, role, status) {
    this._name = name
    this.userName = userName
    this._role = role
    this._status = status
  }

  // static делает доступным только для класса
  static roles = ['manager', 'admin', 'root', 'guest']
  static statuses = ['online', 'offline', 'busy']
  // get getter --> получаем переменную только на чтение
  get name() {
    return this._name
  }

  get role() {
    return this._role
  }
  // set setter --> изменяет нашу переменную
  set role(newRole) {
    if (User.roles.includes(newRole)) this._role = newRole
  }

  get status() {
    return this._status
  }

  // геттер позволяет производить внутренние вычисления
  get statusAndRole() {
    return `${this._role}  and ${this._status}`
  }
  // геттер для статуса
  set status(newStatus) {
    if (User.statuses.includes(newStatus)) this._status = newStatus
  }
  changeStatus(newStatus) {
    if (User.statuses.includes(newStatus)) this._status = newStatus
  }
}

const user = new User('ivan', 'ivan123', 'admin', 'online')
console.log(user.role, user.status)
// get это метод(функция объекта)  защищает от перезаписывания
// но при обращении синтаксис как у свойства
user.role = 'guest' // setter используем
user.status = 'offline' // setter как будто я меняю значение свойства
console.log(user.statusAndRole)
user.changeStatus('offline')
//setter сеттер создаем только для переменных у которых хотим переписать значение переменной
// не хотим менять - не создаем сеттер

class Product {
  constructor(amount, price, title) {
    this.amount = amount
    this._price = price //
    this.title = title
  }

  get price() {
    return this._price
  }

  set price(newPrice) {
    if (typeof newPrice === 'number' && newPrice > 0) {
      this._price = newPrice
    } else {
      throw new Error('цена должна быть числои и больше нуля ')
    }
  }

  static income = 0
}

// создаем один продукт и проверяем статическое свойство на классе и инстансе
const apple = new Product(1, 23, 'apple') // инстанс класса экземпляр класса

apple.price = 344
console.log(apple.price)
