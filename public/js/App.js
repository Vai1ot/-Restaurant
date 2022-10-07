const select = document.querySelector("select");
const alllang = ["ru", "en"];
const tabsLi = document.querySelectorAll(".li-menu");
const tabsitem = document.querySelectorAll(".tab-items");

// ----Мультиязычность----
select.addEventListener("change", changeUrlLanguage);

function changeUrlLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;

  hash = hash.substr(1);

  // Принудительное присваивание хэша
  if (!alllang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  select.value = hash;

  // Меняем язык заголовка сайта
  document.querySelector("title").innerHTML = LangArr["title"][hash];

  // Меняем язык поисковой строки
  document.getElementById("search").placeholder = LangArr["search"][hash];

  // Меняем язык всего остального контента
  for (let key in LangArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = LangArr[key][hash];
    }
  }
}

changeLanguage();

// ----Табы, вкладки----
// Вызов функции при смене таба
tabsLi.forEach(onTabClick);

function onTabClick(item) {
  // Активация функции по клику на переключатель таба
  item.addEventListener("click", function () {
    let currentItem = item;
    let tabid = currentItem.getAttribute("data-tab");
    let currentTab = document.querySelector(tabid);

    if (!currentItem.classList.contains("active")) {
      tabsLi.forEach(function (item) {
        // Удаляем класс active у всех переключателей
        item.classList.remove("active");
      });

      tabsitem.forEach(function (item) {
        // Удаляем класс active у всех табов
        item.classList.remove("active");
      });

      // Присваем класс active активному переключателю и табу
      currentItem.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

// Имитируем первый клик
document.querySelector(".li-menu").click();

// Реализация поиска по странице
let inputText = document.querySelector(".search");
let submitForm = document.querySelector("");
