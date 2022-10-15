const select = document.querySelector("select");
const alllang = ["ru", "en"];
const tabsLi = document.querySelectorAll(".li-menu");
const tabsitem = document.querySelectorAll(".tab-items");
const searchInput = document.getElementById("searchID");

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
  if (searchInput) {
    if (hash === "ru") {
      document.getElementById("searchID").placeholder =
        "Поиск по ресторанам и кухням";
    }
    if (hash === "en") {
      document.getElementById("searchID").placeholder =
        "Search by restaurants and cuisines";
    }
  }

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

function ProductiveClick() {
  document.querySelector(".li-menu").click();
}

// Реализация поиска по странице

function SearchProduct() {
  const input = searchInput.value.toUpperCase();
  const cardCont = document.getElementById("card_stores");
  let errorSearch = document.getElementById("ErrorSearch");

  const card = cardCont.getElementsByClassName("stores_search");

  let count = 0;

  for (let i = 0; i < card.length; i++) {
    let title = card[i].querySelector(".stores_search h5.title_search");

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      card[i].style.display = "";
      count--;
    } else {
      card[i].style.display = "none";
      count++;
    }
  }
  // console.log(count + "count");
  // console.log(card.length + "card");
  if (card.length === count) {
    errorSearch.classList.remove("SearchText");
  } else {
    errorSearch.classList.add("SearchText");
  }
}

// ---- Форма авторизации ----
const btnOpenForm = document.getElementById("show-btn");
const forms = document.getElementById("window-show");
const closeLoginForm = document.getElementById("CloseImgLoginForm");
const loginClose = document.getElementById("CloseLoginForm");

btnOpenForm.addEventListener("click", function () {
  // alert(e.target.id);
  forms.classList.remove("windowShow");
});

closeLoginForm.addEventListener("click", function () {
  // alert(e.target.id);
  forms.classList.add("windowShow");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    // код клавиши Escape, но можно использовать e.key
    forms.classList.add("windowShow");
  }
});

forms.addEventListener("click", (e) => {
  const withinLoginBoundaries = e.composedPath().includes(loginClose);

  if (!withinLoginBoundaries) {
    forms.classList.add("windowShow"); // скрываем элемент т к клик был за его пределами
  }
});

// Окно регистрации
const createClose = document.getElementById("CloseCreatForm");
const windowCreatAcc = document.getElementById("creatWindow");
const btnWindowCreate = document.getElementById("btnWindowCreate");
const closeCreatForm = document.getElementById("CloseImgCreateForm");
const btnOpenLoginForm = document.getElementById("btnWindowLogin");

btnWindowCreate.addEventListener("click", function () {
  forms.classList.add("windowShow");
  windowCreatAcc.classList.remove("windowShow");
});

closeCreatForm.addEventListener("click", function () {
  // alert(e.target.id);
  windowCreatAcc.classList.add("windowShow");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    // код клавиши Escape, но можно использовать e.key
    windowCreatAcc.classList.add("windowShow");
  }
});

windowCreatAcc.addEventListener("click", (e) => {
  const withinCreateBoundaries = e.composedPath().includes(createClose);

  if (!withinCreateBoundaries) {
    windowCreatAcc.classList.add("windowShow"); // скрываем элемент т к клик был за его пределами
  }
});

btnOpenLoginForm.addEventListener("click", function () {
  windowCreatAcc.classList.add("windowShow");
  forms.classList.remove("windowShow");
});

// Запрект на вызов контекстного меню для изображений
var img = document.getElementsByTagName("img");

for (var i in img) {
  img[i].oncontextmenu = function () {
    return false;
  };
}
