/Выполнение заданий 1, 2, 3

/Задание 1 - вывод всех ключей
function printObject (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}

