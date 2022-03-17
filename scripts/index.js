//Получаем элемент подзаголовка
let articleTitle = document.querySelector("#articleTitle");
//Получаем элемент статьи
let article = document.querySelector("#article");
/**Функция получает все статьи списком, выбирает случайную статью,
 * на основе этой статьи изменяет содержание элементов страницы
 */
function randomArticle() {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((json) => {
      let randomArticle = json[Math.floor(Math.random() * json.length)];
      articleTitle.innerHTML = randomArticle.title;
      article.innerHTML = randomArticle.body;
    });
}
/**Запускаем функцию и получаем изначальную статью на странице */
randomArticle();

// Получаем кнопку
let button = document.querySelector("#button");
/**При нажатии кнопки срабатывает функция и статья вновь меняется на случайную */
button.addEventListener("click", () => randomArticle());
