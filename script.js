//Получает текст (содержание объекта)
//fetch("https://jsonplaceholder.typicode.com/posts/11")
//  .then((response) => response.text())
//  .then((text) => console.log(text));
let prov;

fetch("https://jsonplaceholder.typicode.com/posts/11")
  .then((response) => response.json())
  .then((json) => (prov = json));
// Все норм. Записываем полученную информацию (объект) в переменную prov
//В дальнейшем из нее можно будет вытащить заголовок и содержание
