const select = document.querySelector("select");
const alllang = ["ru", "en"];
let inp = document.querySelector("input");

select.addEventListener("change", changeUrlLanguage);

function changeUrlLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!alllang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  select.value = hash;
  
  document.querySelector("title").innerHTML = LangArr["title"][hash];
  
  inp.value = inp.getAttribute("placeholder");
  inp.value = LangArr["search"][hash];


  for (let key in LangArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = LangArr[key][hash];
    }
  }
}

changeLanguage();
