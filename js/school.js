class School {
  constructor(data) {
    this._name = data.name
    this._numberOfStudents = data.numberOfStudents
    this.level = data.level
  }

  get name() {
    return this._name
  }
  set name(newName) {
    this._name = newName
  }

  get numberOfStudents() {
    return this._numberOfStudents
  }
  set numberOfStudents(newNumber) {
    this._numberOfStudents = newNumber
  }

  static substituteTeachers = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor']

  static chooseSubstituteTeacher() {
    const index = Math.floor(Math.random() * (this.substituteTeachers.length - 1))
    return this.substituteTeachers[index]
  }
}

const firstSchool = new School({ name: 'first', numberOfStudents: 240, level: 'primary' })

class Primary extends School {
  constructor(props) {
    super(props)
    this.pickupPolicy = props.pickupPolicy
  }
}
// Наследуем статические свойства и методы от Родительского Класса

const firstPrimarySchool = new Primary({
  name: 'first',
  numberOfStudents: 240,
  level: 'primary',
  pickupPolicy: 'after 17:00',
})

console.log(firstPrimarySchool.name)
// Записываем в прототип свойство city кот доступно всем экземплярам класса
School.prototype.city = 'Berlin'
School.prototype.informationAboutSchool = function () {
  console.log(`In school ${this._name} there are ${this._numberOfStudents} students`)
}
// Через прототип создать функцию которая будет увеличивать количество сутдентов на один
// addNewStudent

School.prototype.addNewStudent = function () {
  this.numberOfStudents += 1
}

firstPrimarySchool.addNewStudent()
firstPrimarySchool.addNewStudent()
firstPrimarySchool.addNewStudent()
