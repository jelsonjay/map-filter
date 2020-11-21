'strict'

const staffList = [
  {name: 'Jackson P', age: 35, occupation: 'design', gender: 'female'},
  {name: 'Jennifer Smith', age: 19, occupation: 'full-stack', gender: 'female'},
  {name: 'James Parker', age: 22, occupation: 'front-end', gender: 'male'},
  {name: 'Lopes T', age: 47, occupation: 'developer', gender: 'male'}
]

staffList.map(onlyName)

function onlyName(e){
  return 'hello'
}

console.log(onlyName)