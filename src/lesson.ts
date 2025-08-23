/**
 * - Union
 * - Літеральні типи ( )
 */

// Union Type – це просто список допустимих значень, які можна присвоювати змінним.
// Використовуй Union Type, якщо:
// Значення ніколи не змінюються і не потребують додаткових властивостей.
// Використовується у простих ситуаціях, де потрібен обмежений набір значень (наприклад, статуси запитів).

type Status = "loading" | "success" | "error";

const getStatusMessage = (status: Status) => {
  return `Current status: ${status}`;
}

console.log(getStatusMessage("loading")); // "Current status: loading"
