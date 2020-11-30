let credits = 23580;

const pricePerDroid = 3000;

let message;

const question = prompt('Сколько дроидов Вы хотите приобрести?');

if (question === null) {
  message = 'Отменено пользователем!';
} else {
  let totalPrice = question * pricePerDroid;

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    credits = credits - totalPrice;

    message = `Вы купили ${question} дроидов, на счету осталось ${credits} кредитов.`;
  }
}

alert(message);
