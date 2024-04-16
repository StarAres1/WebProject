var first_name = document.forms.main.elements.first_name;
var last_name = document.forms.main.elements.last_name;
var password1 = document.forms.main.elements.password1;
var password2 = document.forms.main.elements.password2;
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
var patternPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
var patternLen = /\w{8,}/

first_name.addEventListener("input", function(e){
  first_name.value = first_name.value.charAt(0).toUpperCase() + first_name.value.slice(1);
  if (patternName.test(first_name.value)) {
    document.getElementById('one').style.visibility = "hidden";
      first_name.style.border = "3px solid blue";
      first_name.style.boxShadow = "3px 3px 7px cyan";
    mas[0] = true;
  }
  else {
      first_name.style.border = "3px solid red";
      first_name.style.boxShadow = "3px 3px 7px red";
    mas[0] = false;
    if(first_name.value != ""){
      document.getElementById('one').style.visibility = "visible";
    }
    else {
      document.getElementById('one').style.visibility = "hidden";
    }
  }
});

  first_name.addEventListener("blur", function(e){
  if (patternName.test(first_name.value)) {
      first_name.style.border = "3px solid green";
      first_name.style.boxShadow = "none";
  }
  else {
      first_name.style.border = "3px solid red";
      first_name.style.boxShadow = "none";
  }
});

  first_name.addEventListener("focus", function(e){
  if(patternName.test(first_name.value) || first_name.value == ""){
      first_name.style.border = "3px solid blue";
      first_name.style.boxShadow = "3px 3px 7px cyan";
  }
  else{
      first_name.style.border = "3px solid red";
      first_name.style.boxShadow = "3px 3px 7px red";
  }
});



last_name.addEventListener("input", function(e){
last_name.value = last_name.value.charAt(0).toUpperCase() + last_name.value.slice(1);
  if (patternName.test(last_name.value)) {
    document.getElementById('two').style.visibility = "hidden";
    last_name.style.border = "3px solid blue";
    last_name.style.boxShadow = "3px 3px 7px cyan";
    mas[1] = true;
  }
  else {
    last_name.style.border = "3px solid red";
    last_name.style.boxShadow = "3px 3px 7px red";
    mas[1] = false;
    if(last_name.value != ""){
      document.getElementById('two').style.visibility = "visible";
    }
    else{
      document.getElementById('two').style.visibility = "hidden";
    }
  }
});

last_name.addEventListener("blur", function(e){
  if (patternName.test(last_name.value)) {
    last_name.style.border = "3px solid green";
    last_name.style.boxShadow = "none";
  }
  else {
    last_name.style.border = "3px solid red";
    last_name.style.boxShadow = "none";
  }
});

last_name.addEventListener("focus", function(e){
  if(patternName.test(last_name.value) || last_name.value == ""){
    last_name.style.border = "3px solid blue";
    last_name.style.boxShadow = "3px 3px 7px cyan";
  }
  else{
    last_name.style.border = "3px solid red";
    last_name.style.boxShadow = "3px 3px 7px red";
  }
});


email.addEventListener("input", function(e){
  if (patternEmail.test(email.value)) {    
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



password1.addEventListener("input", function(e){
  if(pattern1.test(password1.value)){
    document.getElementById('p1').style.color = "green";
    document.getElementById('p1').style.fontStyle = "bold";
  }
  else{
    document.getElementById('p1').style.color = "grey";
  }
  if(pattern2.test(password1.value)){
    document.getElementById('p2').style.color = "green";
  }
  else{
    document.getElementById('p2').style.color = "grey";
  }
  if(pattern3.test(password1.value)){
    document.getElementById('p3').style.color = "green";
  }
  else{
    document.getElementById('p3').style.color = "grey";
  }
  if (patternLen.test(password1.value)) {
    document.getElementById('p4').style.color = "green";
    password1.style.border = "3px solid green";
    password1.style.boxShadow = "3px 3px 7px green";
    mas[3] = true;
  }
  else {
    document.getElementById('p4').style.color = "grey";
    password1.style.border = "3px solid red";
    password1.style.boxShadow = "3px 3px 7px red";
    mas[3] = false;
  }
});

password1.addEventListener("blur", function(e){
  if (patternPassword.test(password1.value)) {
    password1.style.border = "3px solid green";
    password1.style.boxShadow = "none";
  }
  else {
    password1.style.border = "3px solid red";
    password1.style.boxShadow = "none";
  }
});


password1.addEventListener("focus", function(e){
  if (patternPassword.test(password1.value)) {
    password1.style.border = "3px solid green";
    password1.style.boxShadow = "3px 3px 7px green";
  }
  else {
    password1.style.border = "3px solid red";
    password1.style.boxShadow = "3px 3px 7px red";
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