//Получаем элемент подзаголовка
let articleTitle = document.querySelector("#articleTitle");
//Получаем элемент статьи
let article = document.querySelector("#article");

function randomArticle() {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((json) => {
      let randomArticle = json[Math.floor(Math.random() * json.length)];
      articleTitle.innerHTML = randomArticle.title;
      article.innerHTML = randomArticle.body;
    });
}
randomArticle();

// Получаем кнопку
let button = document.querySelector("#button");

button.addEventListener("click", () => randomArticle());
