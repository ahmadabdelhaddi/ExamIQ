let btn = document.getElementsByClassName("hum");
let links = document.getElementsByClassName("links");
btn[0].addEventListener("click", () => {
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

//  End Nav Bar

// Start local Storage && LOGOUT

let users = JSON.parse(localStorage.getItem("users"));

document.getElementById("logout").addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].isSign == true) users[i].isSign = false;
    localStorage.setItem("users", JSON.stringify(users));
    window.location.replace("../index.html");
  }
});

document.getElementById("logou").addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].isSign == true) users[i].isSign = false;
    localStorage.setItem("users", JSON.stringify(users));
    window.location.replace("../index.html");
  }
});
// End local Storage && LOGOUT

// Get the link element
var link = document.getElementsByClassName("a_link");

link[0].addEventListener("click", () => {
  window.location.replace("./Quiz-tech.html");
});

link[0].addEventListener("mouseenter", () => {
  link[0].style.cursor = "pointer";
});

link[1].addEventListener("click", () => {
  window.location.replace("./Quzi-eng.html");
});

link[1].addEventListener("mouseenter", () => {
  link[1].style.cursor = "pointer";
});

link[2].addEventListener("click", () => {
  window.location.replace("./personl.html");
});

link[2].addEventListener("mouseenter", () => {
  link[2].style.cursor = "pointer";
});

let complete = document.getElementsByClassName("is_complete");
let card = document.getElementsByClassName("card");

// KNOW User id
let index;
for (i = 0; i < users.length; i++) {
  if (users[i].isSign == true) {
    index = i;
  }
}

// Technical Quiz
if (users[index].technicalComplete == true) {
  complete[0].style.color = "#27AE61";
  complete[0].innerHTML = "Completed";

  card[0].style.pointerEvents = "none";

  card[0].style.backgroundColor = "#ccf4df";
  link[0].style.pointerEvents = "none";
}

// English Quiz
if (users[index].englishComplete == true) {
  complete[1].style.color = "#27AE61";
  complete[1].innerHTML = "Completed";
  card[1].style.pointerEvent = "none";

  card[1].style.backgroundColor = "#ccf4df";
  link[1].style.pointerEvents = "none";
}

// Personal Data
if (users[index].personalComplete == true) {
  complete[2].style.color = "#27AE61";
  complete[2].innerHTML = "Completed";
  card[2].style.pointerEvent = "none";

  card[2].style.backgroundColor = "#ccf4df";
  link[2].style.pointerEvents = "none";
}

submit = document.getElementById("submit");
if (
  users[index].technicalComplete == true &&
  users[index].englishComplete == true &&
  users[index].personalComplete == true
) {
  submit.id = "submit_btn";

  submit.addEventListener("click", () => {
    users[index].submit=true;
    localStorage.setItem("users",JSON.stringify(users))
    window.location.replace("score.html")
  });

}

