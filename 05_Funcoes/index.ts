// 1 - funções sem retorno
function withoutReturn(): void {
  console.log('Não tem retorno')
  // return 1
}
withoutReturn()

// 2 - callback functions como argumento da função
function greeting(name: string): string {
  return `Olá ${name}!`
}

function preGreeting(f: (name: string) => string, userName: string) {
  //                 f: = tipando a callback como função
  console.log('Preparando a saudação!')
  const greet = f(userName)
  console.log(greet) 
}
preGreeting(greeting, 'Rafael')
preGreeting(greeting, 'Casio')



// 3 - generic function
function firstElement<T>(arr: T[]): T {
  //                  <T> Definição do generic type
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement([true, false]))
console.log(firstElement(['a', 'b', 'c']))
// firstElement('a')

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    // ... Spread operator. 'Espalha' todas as propiedades, valores, e metodos do objeto 
    ...obj2,
  }
}

const newObj = mergeObjects({ name: 'Matheus' }, { age: 30 })

console.log(newObj)

// 4 - constraints. Constraints deixa a função mais limitada a tipos de valores especificos
function biggestNumber<T extends number | string>(a: T, b: T) {
  let biggest

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}
console.log(biggestNumber(5, 2))
console.log(biggestNumber('10', '5'))


// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ['teste']))


// 6 - parametros opcionais. ? identifica o parametro opcional 
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }
  return `Olá ${name}!`
}

console.log(modernGreeting('Matheus', 'Sr.'))
console.log(modernGreeting('João'))

// 7 - parametro default
function somaDefault(n: number, m = 10) {
  return n + m
}

console.log(somaDefault(5, 20))
console.log(somaDefault(5))

// 8 - unknown. Quando não se sabe o tipo, então tem que ter a verificação de valores
function doSomething(x: unknown) {
  if (typeof x === 'number') {
    console.log('É um número!')
  } else {
    console.log('Não é um número!')
  }
  // x()
}

doSomething(10)
doSomething(false)

// 9 - never
function showErrorMsg(msg: string): never {
  throw new Error(msg)
}

// showErrorMsg('Algo deu errado!')

// 10 - rest operator como parametro.    ...var 
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4))
console.log(sumAll(4, 5, 6))

// 11 - Passando destructuring como parametro
function showProductDetails({
  name,
  price,
}: {
  name: string
  price: number
}): string {
  return `O nome do produto é ${name} e o seu preço é R$${price}`
}

const shirt = { name: 'Camisa', price: 59.99 }

console.log(showProductDetails(shirt))
