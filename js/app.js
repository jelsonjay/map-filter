'strict'
// staff list
const staffList = [
  {name: 'Jackson P', age: 35, occupation: 'design', gender: 'female'},
  {name: 'Jennifer Smith', age: 19, occupation: 'full-stack', gender: 'female'},
  {name: 'James Parker', age: 22, occupation: 'front-end', gender: 'male'},
  {name: 'Lopes T', age: 47, occupation: 'web developer', gender: 'male'},
  {name: 'Emma Harry', age: 17, occupation: 'developer', gender: 'female'},
  {name: 'Jason Tyson', age: 28, occupation: 'tester', gender: 'male'},
  {name: 'Luke Jame', age: 33, occupation: 'design', gender: 'male'},
  {name: 'Rosa Batista', age: 50, occupation: 'account', gender: 'female'},
  {name: 'Lopes T', age: 19, occupation: 'developer', gender: 'male'},
  {name: 'Leila White', age: 16, occupation: 'tester', gender: 'female'},
  {name: 'Les Sugar', age: 39, occupation: 'front-end', gender: 'male'},
  {name: 'Julian Brown', age: 26, occupation: 'tester', gender: 'female'},
  {name: 'Andy Per', age: 18, occupation: 'full-stack', gender: 'male'}
]

staffList.push({name: 'Andre', age: 16, occupation: 'junior developer', gender: 'male'})

const emp = staffList.map(onlyName)

const female = staffList.filter(onlyFemale)

function onlyFemale(e){
  return e.gender == 'female'
}

function onlyName(e){
  return e.name 
}

function onlyAges(e){
return e.age < 20
}

let youngStaff = staffList.filter(onlyAges).filter(onlyFemale).map(onlyName)

console.log('-------------all employes list----------------')
console.log(staffList)
console.log('-------------only staff name----------------')
console.log(emp)
console.log('-------------only female-----------------')
console.log(female)

console.log('-------------only staff age under 20 year ages-----------------')
console.log(youngStaff)