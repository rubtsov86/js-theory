// // 1) split (стока в массив) + join (массив в строку)

// const str = 'qwe';
// const arr = str.split(''); // ['q', 'w', 'e']
// console.log(arr);

// const str1 = arr.join(''); // 'qwe'
// console.log(str1);

// // 2) indexOf() - возвращает первый индекс или -1

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// // 3) includes() - проверяет есть ли в массиве элемент (true/false)

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// // 4) push() - добавляет один или несколько элементов в конец массива, возвращает длину массива после добавления элементов

// const numbers = [1];
// console.log(numbers.push(2)); // 2
// console.log(numbers); // [1, 2]

// // 5) pop() - удаляет последний элемент из конца массива и возвращает удаленный элемент (если пустой - то undefined)

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// // 6) slice() - возвращает новый массив, содержащий копию части исходного массива, не изменяя его.

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = clients.slice(1, 3);

// console.log(newClients); // ["Ajax", "Poly"]

// // если не указан begin и end - копия массива (не по ссылке)
// const newClients1 = clients.slice();
// clients.push('qwe');
// console.log(newClients1); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(clients); // ["Mango", "Ajax", "Poly", "Kiwi", "qwe"]

// // если значение start отрицательное, а end не указан, то будут скопированы последние start элементов
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// // 7) splice(position, num) - даляет, добавляет и заменяет элементы в произвольном месте массива. (мутирует массив)

// // удаление
// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// // Добавление
// const colors = ['red', 'green', 'blue'];

// console.log(colors.splice(2, 0, 'purple')); // []
// console.log(colors); // ["red", "green", "purple", "blue"]

// // Замена
// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Заменяем элемент с индексом 1 на новый
// console.log(languages.splice(1, 1, 'Python')); // ['C++']
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// // 8) concat() - объединяет два или более массива в один (не мутирует, возвращает новый массив)

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// // 9) forEach(function callback(element, index, array) {}) - перебирает и ничего не возвращает

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// });

// // 10) map(callback) используется для трансформации массива

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// // 11) flatMap(callback) - map для многомерных массивов

// const students = [
//     { name: 'Манго', courses: ['математика', 'физика'] },
//     { name: 'Поли', courses: ['информатика', 'математика'] },
//     { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// students.map(student => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// // 12) filter(callback) - выбрать более одного элемента из коллекции по какому-то критерию.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // 13) find(callback) позволяет найти и вернуть первый подходящий элемент или undefined

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// colorPickerOptions.find(option => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
// console.log(colorPickerOptions.find(option => option.label === 'white')); // undefined

// // 14) findIndex(callback) - поиск по более сложным условиям чем просто равенство. возвращает индекс элемента или -1

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// colorPickerOptions.findIndex(option => option.label === 'blue'); // 2
// colorPickerOptions.findIndex(option => option.label === 'pink'); // 3
// colorPickerOptions.findIndex(option => option.label === 'white'); // -1

// // 15) every() - проверяет проходят ли все элементы массива тест, возвращает true или false

// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// // 16) some() - проверяет проходит ли хотя бы один элемент массива тест

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// // 17) reduce(callback, initialValue) - последовательная обработка каждого элемента массива с сохранением промежуточного результата, как аккумулятор

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

// console.log(total); // 32

// // 18) sort() сортирует элементы массива - сравнения порядковых номеров в таблице Unicode (мутирует массив)

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']
