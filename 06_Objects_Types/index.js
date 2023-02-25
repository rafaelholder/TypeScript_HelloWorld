"use strict";
function showProductDetails(product) {
    if (product.isAvailable) {
        console.log(`O produto ${product.name} está disponivel e seu preço é ${product.price}!`);
    }
    else {
        console.log(`O nome do produto é: ${product.name}. Seu preço é ${product.price}! \n Não esta disponivel`);
    }
}
const shirt = {
    name: 'Camisa',
    price: 99.99,
    isAvailable: true,
};
const shirt_exclusive = {
    name: 'Camisa de coleção',
    price: 999.99,
    isAvailable: false,
};
showProductDetails(shirt);
showProductDetails(shirt_exclusive);
function showUserDetails(user) {
    console.log(`O user tem o email: ${user.email}`);
    if (user.role) {
        console.log(`O user ${user.email} tem a função de ${user.role}`);
    }
}
const user_1 = {
    email: 'teste@gmail.com',
    role: 'Admin',
};
const user_2 = {
    email: 'testeTestado@gmail.com',
};
showUserDetails(user_1);
showUserDetails(user_2);
const fusca = {
    brand: 'Volkswagen',
    wheels: 4,
};
console.log(fusca);
let coords = {
    // x: 'coordenada'
    x: 24.383
};
coords.y = 19.060;
console.log(coords);
const rafael = {
    name: 'rafael',
    age: 20
};
const toguro = {
    name: 'toguro',
    age: 0,
    superPowers: ['shape maximo', 'em pleno...']
};
console.log(toguro.superPowers);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
// Readonly arrays. Arrays que não podem alterados apos a criação. Pode ser alterado usando metodos(ex: map)
let myArray = ['maçã', 'laranja', 'banana'];
console.log(myArray);
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
const myNumberArray = [1, 2, '3', 4, 5];
// Tuplas com readOnly. Limita quantos itens e não permite modificações faceis.
function showNumbers(numbers) {
    // numbers[0] = 284 //Mostra um erro
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([2, 8]);
