var username = document.forms.main.elements.username;
var password = document.forms.main.elements.password;
var pattern = /\S+/
var form = document.forms.main;
var button = document.getElementById("b")
var mas = [false, false]

password.addEventListener("input", function(e){
  if (pattern.test(password.value)) {
    mas[0] = true;
  }
  else {
    mas[0] = false;
  }
});

password.addEventListener("blur", function(e){
  if (pattern.test(password.value)) {
    password.style.border = "3px solid black";
    password.style.boxShadow = "none";
  }
  else {
    password.style.border = "3px solid red";
    password.style.boxShadow = "none";
  }
});


password.addEventListener("focus", function(e){
      password.style.border = "3px solid blue";
      password.style.boxShadow = "3px 3px 7px cyan";
});

username.addEventListener("input", function(e){
  if (pattern.test(username.value)) {
    mas[1] = true;
  }
  else {
    mas[1] = false;
  }
});

username.addEventListener("blur", function(e){
  if (pattern.test(username.value)) {
    username.style.border = "3px solid black";
    username.style.boxShadow = "none";
  }
  else {
    username.style.border = "3px solid red";
    username.style.boxShadow = "none";
  }
});


username.addEventListener("focus", function(e){
      username.style.border = "3px solid blue";
      username.style.boxShadow = "3px 3px 7px cyan";
});

form.addEventListener("input", function(e){
  if(mas[0] && mas[1]){
    button.disabled = false;
  }
  else {
    button.disabled = true;
  }
});
