let Btn = document.getElementsByClassName("hum");
let links = document.getElementsByClassName("links");
Btn[0].addEventListener("click", () => {
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
// END nav bar

let btn = document.getElementById("save");
// let arr = [];

let user = JSON.parse(localStorage.getItem("users"));

window.onload=(()=>{
alert("You Can Only Fill The Form Once !!")
})
let index;
for (i = 0; i < user.length; i++) {
  if (user[i].isSign == true) {
    index = i;
  }
}

console.log(user[index]);

function fill_Information() {
  let userIfo = {
    first: document.getElementById("first").value,
    second_email: document.getElementById("email").value,
    education: document.getElementById("education").value,
    gender: document.getElementById("gender").value,
    last: document.getElementById("last").value,
    date: document.getElementById("date").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
  };
  for (i = 0; i < user.length; i++) {
    console.log("jdisajdiasji ");
    if (user[i].isSign == true) {
      console.log("############### ");

      user[i].presonalInformation = userIfo;
      user[i].personalComplete = true;
      localStorage.setItem("users", JSON.stringify(user));
    }
  }
}
btn.addEventListener("click", function () {
  fill_Information();
  window.open("tasks.html");
});

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
// End local Storage
