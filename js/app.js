'strict'

const staffList = [
  {name: 'Jackson P', age: 35, occupation: 'design', gender: 'female'},
  {name: 'Jennifer Smith', age: 19, occupation: 'full-stack', gender: 'female'},
  {name: 'James Parker', age: 22, occupation: 'front-end', gender: 'male'},
  {name: 'Lopes T', age: 47, occupation: 'developer', gender: 'male'}
]

const emp = staffList.map(onlyName)

const empFemale = staffList.filter(onlyFemale)

function onlyFemale(e){
  return e.male = false
}

function onlyName(e){
  return e.name 
}

console.log('-----------------------------')

console.log('------------------------------')

console.log(empFemale)