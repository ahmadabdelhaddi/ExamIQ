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

//  End Nav Bar 


// Start Local STORAGE



document.getElementById("sign-btn").addEventListener("click", saveData);

function saveData() {
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records =[];
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("duplicated data");
  } else {
    user_records.push({
      name: name,
      email: email,
      password: password,
      englishScore:0,
      technical:0,
      presonalInformation:null,
      isSign:true,
      englishComplete:false,
      technicalComplete:false,
      personalComplete:false,
      submit:false,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    window.open("tasks.html");
  }
}