// // 1) create - создает и возвращает новый обект
// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);

// console.log(animal === dog);

// // 2) hasOwnProperty() - проверяет, является ли свойство собственным

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);

// dog.name = 'qwe';

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('legs')); // false

// // 3) Object.keys() -  принимает объект и возвращает массив ключей его собственных свойств

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// // 4) Object.values() -  принимает объект и возвращает массив массив значений его собственных свойств

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
// };

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// 5) Object.entries() - возвращает массив записей [ключ, значение]
