// Обработка кликов по ссылкам в навигации
document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Вы перешли на Главную страницу");
});

document.getElementById("catalog").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Вы перешли на страницу Каталога");
});

document.getElementById("contacts").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Вы перешли на страницу Контактов");
});

// Обработка клика на кнопку "Посмотреть каталог"
document.getElementById("viewCatalog").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Открыт каталог товаров");
});
