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
  // создать getter setter
  // для name отдельно от numberOfStudents
  // для name и numberOfStudents
  // статическое свойство substituteTeachers
  static substituteTeachers = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor']
}

const firstSchool = new School({ name: 'first', numberOfStudents: 240, level: 'primary' })
console.log(firstSchool)
firstSchool.name = 'another'
console.log(firstSchool)
// создаем класс Primary от School
// constructor / super
// не забываем параметр в констр
// pickupPolicy обычное свойство

class Primary extends School {
  constructor(props) {
    super(props)
    this.pickupPolicy = props.pickupPolicy
  }
}
const firstPrimarySchool = new Primary({
  name: 'first',
  numberOfStudents: 240,
  level: 'primary',
  pickupPolicy: 'after 17:00',
})
console.log(firstPrimarySchool)
// properties - props - свойства
// от 10 до 2 часа
//html до redux

// блиц от hr
// теория + live codding - задача с codewars - 6-8
// react  компонент
