var nameIn = document.forms.main.elements.nameIn;
var surename = document.forms.main.elements.surename;
var password = document.forms.main.elements.password;
var email = document.forms.main.elements.email;
var username = document.forms.main.elements.username;
var patternName = /[А-Я]{1}[а-я]*$/
var patternEmail = /[A-Za-z0-9.]{1,15}@(mail|yandex|gmail)\.(ru|com)/
var pattern = /\S+/
var mas = [false, false, false, false, false];
var form = document.forms.main;
var button = document.getElementById("b")

var pattern1 = /[A-Z]/
var pattern2 = /[a-z]/
var pattern3 = /[0-9]/
var patternPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+/

nameIn.addEventListener("input", function(e){
nameIn.value = nameIn.value.charAt(0).toUpperCase() + nameIn.value.slice(1);
  if (patternName.test(nameIn.value)) {
    document.getElementById('one').style.visibility = "hidden";
    nameIn.style.border = "3px solid blue";
    nameIn.style.boxShadow = "3px 3px 7px cyan";
    mas[0] = true;
  }
  else {
    nameIn.style.border = "3px solid red";
    nameIn.style.boxShadow = "3px 3px 7px red";
    mas[0] = false;
    if(nameIn.value != ""){
      document.getElementById('one').style.visibility = "visible";
    }
    else {
      document.getElementById('one').style.visibility = "hidden";
    }
  }
});

nameIn.addEventListener("blur", function(e){
  if (patternName.test(nameIn.value)) {
    nameIn.style.border = "3px solid green";
    nameIn.style.boxShadow = "none";
  }
  else {
    nameIn.style.border = "3px solid red";
    nameIn.style.boxShadow = "none";
  }
});

nameIn.addEventListener("focus", function(e){
  if(patternName.test(nameIn.value) || nameIn.value == ""){
    nameIn.style.border = "3px solid blue";
    nameIn.style.boxShadow = "3px 3px 7px cyan";
  }
  else{
    nameIn.style.border = "3px solid red";
    nameIn.style.boxShadow = "3px 3px 7px red";
  }
});



surename.addEventListener("input", function(e){
surename.value = surename.value.charAt(0).toUpperCase() + surename.value.slice(1);
  if (patternName.test(surename.value)) {
    document.getElementById('two').style.visibility = "hidden";
    surename.style.border = "3px solid blue";
    surename.style.boxShadow = "3px 3px 7px cyan";
    mas[1] = true;
  }
  else {
    surename.style.border = "3px solid red";
    surename.style.boxShadow = "3px 3px 7px red";
    mas[1] = false;
    if(surename.value != ""){
      document.getElementById('two').style.visibility = "visible";
    }
    else{
      document.getElementById('two').style.visibility = "hidden";
    }
  }
});

surename.addEventListener("blur", function(e){
  if (patternName.test(surename.value)) {
    surename.style.border = "3px solid green";
    surename.style.boxShadow = "none";
  }
  else {
    surename.style.border = "3px solid red";
    surename.style.boxShadow = "none";
  }
});

surename.addEventListener("focus", function(e){
  if(patternName.test(surename.value) || surename.value == ""){
    surename.style.border = "3px solid blue";
    surename.style.boxShadow = "3px 3px 7px cyan";
  }
  else{
    surename.style.border = "3px solid red";
    surename.style.boxShadow = "3px 3px 7px red";
  }
});


email.addEventListener("input", function(e){
  if (patternEmail.test(email.value)) {
    document.getElementById('two').style.visibility = "hidden";
    email.style.border = "3px solid green";
    email.style.boxShadow = "3px 3px 7px green";
    mas[2] = true;
    document.getElementById('three').style.visibility = "hidden";
  }
  else {
    email.style.border = "3px solid red";
    email.style.boxShadow = "3px 3px 7px red";
    mas[2] = false;
    if(email.value != ""){
      document.getElementById('three').style.visibility = "visible";
    }
    else{
      document.getElementById('three').style.visibility = "hidden";
    }
  }
});

email.addEventListener("blur", function(e){
  if (patternEmail.test(email.value)) {
    email.style.border = "3px solid green";
    email.style.boxShadow = "none";
  }
  else {
    email.style.border = "3px solid red";
    email.style.boxShadow = "none";
  }
});

email.addEventListener("focus", function(e){
  if(patternEmail.test(email.value) || email.value == ""){
    email.style.border = "3px solid blue";
    email.style.boxShadow = "3px 3px 7px cyan";
  }
  else{
    email.style.border = "3px solid red";
    email.style.boxShadow = "3px 3px 7px red";
  }
});



password.addEventListener("input", function(e){
  if(pattern1.test(password.value)){
    document.getElementById('p1').style.color = "green";
    document.getElementById('p1').style.fontStyle = "bold";
  }
  else{
    document.getElementById('p1').style.color = "grey";
  }
  if(pattern2.test(password.value)){
    document.getElementById('p2').style.color = "green";
  }
  else{
    document.getElementById('p2').style.color = "grey";
  }
  if(pattern3.test(password.value)){
    document.getElementById('p3').style.color = "green";
  }
  else{
    document.getElementById('p3').style.color = "grey";
  }
  if (patternPassword.test(password.value)) {
    password.style.border = "3px solid green";
    password.style.boxShadow = "3px 3px 7px green";
    mas[3] = true;
  }
  else {
    password.style.border = "3px solid red";
    password.style.boxShadow = "3px 3px 7px red";
    mas[3] = false;
  }
});

password.addEventListener("blur", function(e){
  if (patternPassword.test(password.value)) {
    password.style.border = "3px solid green";
    password.style.boxShadow = "none";
  }
  else {
    password.style.border = "3px solid red";
    password.style.boxShadow = "none";
  }
});


password.addEventListener("focus", function(e){
  if (patternPassword.test(password.value)) {
    password.style.border = "3px solid green";
    password.style.boxShadow = "3px 3px 7px green";
  }
  else {
    password.style.border = "3px solid red";
    password.style.boxShadow = "3px 3px 7px red";
  }
});

username.addEventListener("input", function(e){
  if (pattern.test(username.value)) {
    email.style.border = "3px solid blue";
    email.style.boxShadow = "3px 3px 7px cyan";
    mas[4] = true;
  }
  else {
    username.style.border = "3px solid red";
    username.style.boxShadow = "3px 3px 7px red";
    mas[4] = false;
  }
});

username.addEventListener("blur", function(e){
  if (pattern.test(username.value)) {
    username.style.border = "3px solid green";
    username.style.boxShadow = "none";
  }
  else {
    username.style.border = "3px solid red";
    username.style.boxShadow = "none";
  }
});

username.addEventListener("focus", function(e){
  if(pattern.test(username.value) || username.value == ""){
    username.style.border = "3px solid blue";
    username.style.boxShadow = "3px 3px 7px cyan";
  }
  else{
    username.style.border = "3px solid red";
    username.style.boxShadow = "3px 3px 7px red";
  }
});

form.addEventListener("input", function(e){
  if(mas[0] && mas[1] && mas[2] && mas[3] && mas[4]){
    button.disabled = false;
  }
  else {
    button.disabled = true;
  }
});
