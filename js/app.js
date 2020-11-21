'strict'

const staffList = [
  {name: 'Jackson P', age: 35, occupation: 'design', gender: 'female'},
  {name: 'Jennifer Smith', age: 19, occupation: 'full-stack', gender: 'female'},
  {name: 'James Parker', age: 22, occupation: 'front-end', gender: 'male'},
  {name: 'Lopes T', age: 47, occupation: 'developer', gender: 'male'},
  {name: 'Emma Harry', age: 17, occupation: 'developer', gender: 'female'},
  {name: 'Jason Tyson', age: 28, occupation: 'tester', gender: 'male'},
  {name: 'Luke Jame', age: 33, occupation: 'design', gender: 'male'},
  {name: 'Rosa Batista', age: 50, occupation: 'account', gender: 'female'},
  {name: 'Lopes T', age: 19, occupation: 'developer', gender: 'male'},
  {name: 'Ruth Lordes', age: 20, occupation: 'tester', gender: 'female'}
]

const emp = staffList.map(onlyName)

const female = staffList.filter(onlyFemale)

function onlyFemale(e){
  return e.gender == 'female'
}

function onlyName(e){
  return e.name 
}

function onlyAges(e){
return e.age < 3
}

let youngStaff = staffList.filter(onlyAges).filter(onlyFemale).map(onlyName)

console.log('-------------all employes list----------------')
console.log(emp)
console.log('-------------only female-----------------')
console.log(female)

console.log('------------------------------')
console.log(female)