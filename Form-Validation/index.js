let passfield = document.getElementById('passfield')

// pass function is for show hide password field
function pass(){
    var selpass = document.getElementById('passfield');
    var selEye = document.getElementById('ieye');
    if (selpass.type == 'password'){
        selpass.type= "text";
        selEye.classList.add("fa-eye")
        selEye.classList.remove("fa-eye-slash");
    }
    else{
        selpass.type= "password";
        selEye.classList.add("fa-eye-slash");
        selEye.classList.remove("fa-eye");
    }
}
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let handlePassword = document.forms["myForm"]["password"].value;
  if (x == "") {
    document.getElementById('error-message').innerText = "Enter a valid name";
    return false;
  }
  if(handlePassword.length <5) {
      document.getElementById('error-message').innerText = "Password must be at least 5 characters long";
      return false;
  }
}