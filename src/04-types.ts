/**
 * - Union
 * - Літеральні типи ( )
 */

/***************** 1 *****************/
// для зручності та повторного використання можна створювати власні типи за допомогою type
// літеральні типи дозволяють обмежити можливі значення змінної конкретними значеннями

// type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

// let status: OrderStatus = "pending";

// status = "shipped";

// console.log(status);

/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

// type Delivery = "courier" | "drone" | "pickup";
// type DeliveryTime = "morning" | "afternoon" | "evening";

// interface Order {
//   username: string;
//   email: string;
//   total: number;
//   delivery: Delivery;
//   deliveryTime: DeliveryTime;
// }

// const order: Order = {
//   username: "Jacob",
//   email: "j.mercer@mail.com",
//   total: 120,
//   delivery: "pickup",
//   deliveryTime: "morning",
// };

// console.log(order);

// ----------------------------------------------

// interface User {
//   id: number;
//   role: "admin" | "user";
// }

// const poly: User = {
//   id: 1,
//   role: "admin",
// };

// const jacob: User = {
//   id: 2,
//   role: "user",
// };

// console.log(poly);
// console.log(jacob);

// ----------------------- Intersection (&) -----------------------------
// Intersection дозволяє створювати новий тип, який поєднує властивості двох або більше існуючих типів
// Наприклад, іноді потрібно поєднувати базову структуру HTTP-відповіді з конкретними даними.
// Це можна зробити за допомогою Intersection (&)

// Використовуйте interface, якщо описуєте структуру об'єкта.
// Використовуйте type, якщо створюєте об'єднання типів (Union),
// перетини (Intersection), літеральні значення або складні структури даних.

// Базова структура HTTP-відповіді
interface HttpResponse {
  status: number;
  message: string;
}

// Специфічна відповідь для користувача
interface UserData {
  id: number;
  name: string;
  email: string;
}

// Поєднання базової відповіді з даними користувача
// UserResponse містить властивості як HttpResponse, так і UserData.
// Такий підхід дозволяє легко розширювати базові відповіді для різних типів запитів,
// не дублюючи код. Це особливо корисно, коли необхідно об'єднати декілька типів
// у складніших структурах даних

type UserResponse = HttpResponse & { data: UserData };

const response: UserResponse = {
  status: 200,
  message: "Success",
  data: {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  },
};

console.log(response);

console.log(response.data.name); // Alice
