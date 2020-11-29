let price;

let message;

let countryName = prompt('В какую страну доставить товар?');

countryName = countryName.toLowerCase();

if (countryName === null) {
  message = 'Отменено пользователем!';
} else {
  switch (countryName) {
    case 'китай':
      price = 100;
      message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
      break;

    case 'чили':
      price = 250;
      message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
      break;

    case 'австралия':
      price = 170;
      message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
      break;

    case 'индия':
      price = 80;
      message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
      break;

    case 'ямайка':
      price = 120;
      message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
      break;
    default:
      message = 'В вашей стране доставка не доступна';
  }
}

alert(message);
