/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 * - Типізація методів
 */

/***************** 1 *****************/

// описуємо структуру об’єкту з допомогою interface
// тобто будь-який об’єкт типу User обов’язково має мати:
// username → рядок (string),
// age → число (number)

// interface User {
//   username: string;
//   age: number;
// }

// const allUsers: User[] = [
//   { username: "poly", age: 20 },
//   { username: "jacob", age: 30 },
//   { username: "mango", age: 25 },
// ];

// оголошуємо функцію
// вона приймає масив користувачів (User[]) і повертає масив рядків (string[])

// function getUserNames(users: User[]): string[] {
//   return users.map((user) => user.username);
// }

// const names = getUserNames(allUsers); // викликаємо функцію та зберігаємо результат в names

// console.log(names);

/***************** 2 *****************/
// напишіть функцію, що отримує список користувачів та повертає імена цих
// користувачів у вигляді масиву рядків

// описуємо інтерфейс, ду User форма обєкту
interface User {
  id: number;
  name: string;
}

const userList: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// оголошуємо функцію, яка на основі масиву обєктів робить масив імен

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

// users: User[] — очікуємо масив користувачів у формі User
// Повертає: string[] — масив рядків (імена)
// Array.prototype.map проходить по кожному елементу users,
// викликає колбек (user) => user.name і формує новий масив із повернених значень.
// результат map: новий масив тієї ж довжини, де кожен елемент — user.name.

// Варіант 2. Коротше, без return
// const getUserNames = (users: User[]): string[] => users.map(u => u.name);

// Варіант 3. З деструктуризацією параметра
// const getUserNames = (users: User[]): string[] => users.map(({ name }) => name);

const names = getUserNames(userList);
console.log(names); // ['Alice', 'Bob', 'Charlie']

/***************** 3 *****************/
// function greet(username: string, age?: number): void {
//   if (age !== undefined) {
//     console.log(`${username}, ${age}`);

//     return;
//   }

//   console.log(username);
// }

// function greet(username: string, age?: number) {
//   console.log(age === undefined ? username : `${username}, ${age}`);
// }

// greet("poly", 15);

// greet("jacob");

/***************** 4 *****************/
// interface User {
//   username: string;
//   greet: (message: string) => string;
// }

// const jacob: User = {
//   username: "Jacob",
//   greet: (message) => {
//     return message;
//   },
// };

// jacob.greet("Welcome!");

/***************** 5 *****************/
// interface Player {
//   username: string;
//   isOnline: boolean;
// }

// const allPlayers: Player[] = [
//   { username: "poly", isOnline: false },
//   { username: "jacob", isOnline: true },
//   { username: "adrian", isOnline: false },
// ];

// interface GamePlatform {
//   getOnlinePlayers: (players: Player[]) => Player[];
//   getPlayerNames: (players: Player[]) => string[];
// }

// const platform: GamePlatform = {
//   getOnlinePlayers: (players) => {
//     return players.filter((player) => player.isOnline);
//   },
//   getPlayerNames: (players) => {
//     return players.map((player) => player.username);
//   },
// };

// platform.getOnlinePlayers(allPlayers);
// platform.getPlayerNames(allPlayers);

// type ArrowFunc = (name: string) => void;

// void вказує, що функція не повертає значення.
// Тип значення, що повертається, вказується після списку аргументів
// Тип void у TypeScript використовується для позначення відсутності значення у функціях, що повертається

// const arrowFunc: ArrowFunc = (name) => {
//   console.log(name);
// };

// const arrowFunc = (name: string): void => {
//   console.log(name);
// };

// arrowFunc("Andrii");

// type Person = { name: string; age?: number };

// const arrowFunc = ({ name, age }: Person): void => {
//   console.log(name, age);
// };

// arrowFunc({ name: "Andrii", age: 50 });

// --------------------------------------------------
