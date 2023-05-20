let BTN = document.getElementsByClassName("hum");
let links = document.getElementsByClassName("links");
BTN[0].addEventListener("click", () => {
  if (links[0].style.display == "none") {
    links[0].style.display = "block";
  } else {
    links[0].style.display = "none";
  }
});
window.addEventListener("resize", function () {
  if (window.innerWidth < 650) {
    var links = document.getElementsByClassName("links");
    if (links.length > 0) {
      links[0].style.display = "none";
    }
  }
});

//  End nav bar

// Start local Storage && LOGOUT

let users = JSON.parse(localStorage.getItem("users"));
let index;
for (i = 0; i < users.length; i++) {
  if (users[i].isSign == true) {
    index = i;
  }
}



document.getElementById("logou").addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].isSign == true) users[i].isSign = false;
    localStorage.setItem("users", JSON.stringify(users));
    window.location.replace("../index.html");
  }
});

document.getElementById("logout").addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].isSign == true) users[i].isSign = false;
    localStorage.setItem("users", JSON.stringify(users));
    window.location.replace("../index.html");
  }
});
// End local Storage

let personal = document.getElementById("personal");

let english = document.getElementById("eng-mark");
let tech =    document.getElementById("tecl-mark");

english.innerHTML = users[index].englishScore.toString();
tech.innerHTML= users[index].technical.toString();

for(let key in users[index].presonalInformation  ){
personal.innerHTML+=`<li id="VALUE"> <span id="KEY">${key}</span> : ${users[index].presonalInformation[key] } </li>`


}