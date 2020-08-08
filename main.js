document.querySelector("#submit").addEventListener("click", valid_mail);
function valid_mail(e) {
  e.preventDefault();
  var user_email = document.getElementById("email").value;
  if (validateEmail(user_email)) {
    document.getElementById("error_icon").style.display = "none";
    document.getElementById("error_msg").style.display = "none";
    document.getElementById("email").style.borderColor = "hsl(0, 36%, 70%)";
  }
  else {
    document.getElementById("error_icon").style.display = "block";
    document.getElementById("error_msg").style.display = "block";
    document.getElementById("email").style.borderColor = "hsl(0, 93%, 68%)";
  }
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}