
// 1- Tipo de objeto para função com interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}
function showProductDetails(product: Product){
  
  if(product.isAvailable){
    console.log(`O produto ${product.name} está disponivel e seu preço é ${product.price}!`)
  }
  else{
    console.log(`O nome do produto é: ${product.name}. Seu preço é ${product.price}! \n Não esta disponivel`)

  }
}
const shirt:Product = {
  name: 'Camisa',
  price: 99.99,
  isAvailable: true,
}
const shirt_exclusive:Product = {
  name: 'Camisa de coleção',
  price: 999.99,
  isAvailable: false,

}
showProductDetails(shirt);
showProductDetails(shirt_exclusive);


//Interface com parametro opcional ?
interface User {
  email: string,
  role?: string,
}
function showUserDetails(user:User) {
    console.log(`O user tem o email: ${user.email}`);
    if(user.role){
      console.log(`O user ${user.email} tem a função de ${user.role}`)
    }
}
const user_1:User = {
  email: 'teste@gmail.com',
  role: 'Admin',
}
const user_2:User = {
  email: 'testeTestado@gmail.com',
}
showUserDetails(user_1);
showUserDetails(user_2);

// Readonly. Uma forma de criar um valor constante
interface Car {
  brand: string,
  readonly wheels: number
}
const fusca:Car = {
  brand: 'Volkswagen',
  wheels: 4,
}
console.log(fusca);


// Index Signature. Restringe tipos que não queremos usar.
interface CoordObject {
  [index: string] : number,
}
let coords: CoordObject = {
  // x: 'coordenada'
  x: 24.383
}
coords.y = 19.060
console.log(coords)


// Heranças de interfaces. Extends types
interface Human {
  name: string,
  age: number
}
interface SuperHuman extends Human {
  superPowers: string[]
}
const rafael: Human = {
  name: 'rafael',
  age: 20
}
const toguro: SuperHuman = {
  name: 'toguro',
  age: 0,
  superPowers: ['shape maximo', 'em pleno...']
}
console.log(toguro.superPowers);


// Intersection types. Usados para unir interfaces e criar interfaces mais complexas
interface Person {
  name: string
}
interface Gun {
  type: string,
  caliber: number,
}
type PersonWithGun = Person & Gun;

const arnold: PersonWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12,
}
console.log(arnold);


// Readonly arrays. Arrays que não podem alterados apos a criação. Pode ser alterado usando metodos(ex: map)
let myArray:ReadonlyArray<string> = ['maçã', 'laranja', 'banana'];
console.log(myArray);

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
});


// Tuplas. Restrige o tipo e a quantidade de elementos. Deixa os arrays previsiveis.
type fiverNumber = [number, number, string, number, number];

const myNumberArray:fiverNumber = [1, 2, '3' , 4, 5];

// Tuplas com readOnly. Limita quantos itens e não permite modificações faceis.
function showNumbers(numbers:readonly [number, number]){
  // numbers[0] = 284 //Mostra um erro
  console.log(numbers[0]);
  console.log(numbers[1]);
}
showNumbers([2, 8])

