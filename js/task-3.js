const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

const enterPassword = prompt('Введите пароль');

if (enterPassword === null) {
  message = 'Отменено пользователем!';
} else if (enterPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
