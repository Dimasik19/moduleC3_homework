//Выполнение заданий 1, 2, 3

//Задание 1 - вывод всех ключей
function printObject (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}

//Задание 2 - проверка - есть ли свойство с данным именем
function checkPropInObj (str, obj) {
  return (str in obj);
}

//Задание 3 - создание пустого объекта
function createObjWithoutProto() {
  return Object.create(null);
}
