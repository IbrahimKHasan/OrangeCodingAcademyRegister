//Sign Up Click
var mailFormat =/^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;
var mobileFormat = /^077[0-9]{7}$/;
var mobileFormatO = /^07[8-9][0-9]{7}$/;
var passFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,8}$/
var signUp = document.getElementById("sign");
try {
signUp.onclick = function () {
  var email = document.getElementById("exampleInputEmail").value;
  var mobile = document.getElementById("exampleInputText").value;
  var pass = document.getElementById("exampleInputPassword").value;
  var check = document.getElementById("exampleCheck").checked;
  //Email Validation
  if (email == "") {
    document.getElementById("emailM").innerHTML =
      "The Email field is required.";
  } else {
    document.getElementById("emailM").innerHTML = "";
    if (!email.match(mailFormat)) {
      document.getElementById("emailM").innerHTML =
        "The email must be a valid email address.";
    } else {
      document.getElementById("emailM").innerHTML = "";
    }
  }
  //Mobile Validation
  if (mobile == "") {
    document.getElementById("mobM").innerHTML = "The Mobile field is required.";
  } else {
    document.getElementById("mobM").innerHTML = "";
    if (!mobile.match(mobileFormat)){
        document.getElementById("mobM").innerHTML =
        "The mobile must be a valid number.";
    }
    else {
        document.getElementById("emailM").innerHTML = "";
      }
      if (mobile.match(mobileFormatO)){document.getElementById("mobM").innerHTML ="The mobile must be an Orange number.";}
  }
   //Pass Validation
  if (pass == "") {
    document.getElementById("passM").innerHTML =
      "The password field is required.";
      
  } else {
    document.getElementById("passM").innerHTML = "";
    if (!pass.match(passFormat)){
        document.getElementById("passM").innerHTML =
        "The password must be (6-8) characters, at least one letter, one number and one special character.";
      }
  }
  if (check == false) {
    document.getElementById("chM").innerHTML =
      "The Terms & Conditions Not Checked.";
  } else {
    document.getElementById("chM").innerHTML = "";
  }
}}
catch (error) {
 alert("The page Dosent Response")   
}
