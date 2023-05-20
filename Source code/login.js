let btn=document.getElementsByClassName("hum");
let links = document.getElementsByClassName("links");
btn[0].addEventListener("click",()=>{
    if(links[0].style.display =="none"){
        links[0].style.display ="block"
    }
    else{
        links[0].style.display ="none"
    }
})
 window.addEventListener("resize", function () {
   if (window.innerWidth < 650) {
     var links = document.getElementsByClassName("links");
     if (links.length > 0) {
       links[0].style.display = "none";
     }
   }
 });

//   End NAv Bar 





// Start Local Storage 



document.getElementById("sign-btn").addEventListener("click", saveData);

function saveData() {
  let email, password;
  email = document.getElementById("email").value;

  password = document.getElementById("password").value;

  let users = new Array();
  users = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

     for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      users[i].isSign = true;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Welcome back!");
      if(users[i].submit==true){
        window.open("score.html")
      }
      else{
        window.open("tasks.html");
        
      }
    }


  }
}