// 1 - arrays
let nums: number[] = [1, 2, 3, 8, 7]

nums.push(5)

console.log(nums[2])

// nums.push('a')
// nums = 'teste'

const nomes = ['Rafael', 'Eduarda']

// nomes.push(2)

// 2 - outra sintaxe de array
const numbers: Array<number> = [100, 200]

numbers.push(200)

// numbers.push('teste')

console.log(numbers[1])

// 3 - any. Any is a type that accept any type(number, string, boolean)
const arr: any[] = [1, 'teste', true, { nome: 'Rafael' }]

console.log(arr)

arr.push([1, 2, 3])

console.log(arr)

// 4 - parametro de funcao

function soma(a: number, b: number) {
  console.log(a + b)
}

soma(4, 5)

// soma('ads', 1)

// 5 - retorno de funcao
function greeting(name: string): string {
  return `Olá ${name}!`
  // return 1
}

console.log(greeting('Rafael'))


// 6 - funcoes anonimas
setTimeout(function () {
  const sallary = 1000

  // console.log(parseFloat(sallary))
}, 100)

// 7 - tipos de objetos

function passCoordinates(coord: { x: number; y: number }) {
  console.log('X coordinates: ' + coord.x)
  console.log('Y coordinates: ' + coord.y)
}

const objCoord = { x: 10, y: 5 }

passCoordinates(objCoord)

// 8 - propriedades opcionais. Uso de ?
function showNumbers(a: number, b: number, c?: number) {
  console.log('A: ' + a)
  console.log('B: ' + b)
  console.log('C: ' + c)
}

showNumbers(1, 2, 3)
showNumbers(4, 8)
// showNumbers(4)

// 9 - validando parâmetro opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    console.log(`Olá, ${firstName} ${lastName}, tudo bem?`)
  }
  else{
    console.log(`Olá, ${firstName}, tudo bem?`)
  }
  
}
advancedGreeting('Rafael', 'Holder')
advancedGreeting('Duda')


// 10 - union type. Use of Two types in a var
function showBalance(balance: string | number) {
  if(typeof balance === 'string'){
    console.log(`O saldo da conta é R$${balance}, Balance is a string`)
  }
  else{
    console.log(`O saldo da conta é R$${balance}, Balance is a number`)
  }
  
}

showBalance(500)
showBalance('100')

// 11 - mais sobre union types. Validação de union types
function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    console.log('Usuário não aprovado!')
  }
  else{
    console.log(`O usuário é um: ${role}`)
  }
}
showUserRole(false)
showUserRole('Admin')
showUserRole('Editor')

// 12 - type alias
type ID = number | string;

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId('15')
showId(20)

type User = {
  name: string
  surname: string
  age: number
}

function userDetails(user: User) {
  console.log(`Nome: ${user.name}`)
  console.log(`Sobrenome: ${user.surname}`)
  console.log(`Idade: ${user.age}`)
}

userDetails({ name: 'Rafael', surname: 'Holder', age: 20 })

// 13 - interfaces
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`)
}

const itemCoords = {
  x: 10,
  y: 15,
  z: 12,
}

showCoords(itemCoords)

// 14 - interface x type alias
// Interface can change along the code.
// alias can't change along the code.

interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = { name: 'Clovis', age: 24 }
console.log(somePerson);


type personType = {
  name: string
}

// type personType = {
//     age: number
// }



// 15 - literal types. Allocate one or more unique values to the var
let test: 'testando'
test = 'testando'

// test = "opa"

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`The direction is: ${direction}`)
}

showDirection('left')
showDirection('center')
//showDirection("up")    // Gone wrong

// 16 - non-null assertion
const p = document.getElementById('some-p')

console.log(p!.innerText)

// 17 - big int
let n: bigint

n = 1000n

console.log(n + 10n)

// 17 - symbol

let symbolA = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA === symbolB)
