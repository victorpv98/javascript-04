function calculate() {
  var number = document.getElementById("number").value;

  if (number.length != 3) {
    alert("Por favor ingresa un número de 3 dígitos");
    return;
  }

  number = parseInt(number);

  if (number % 111 == 0) {
    var digit = Math.sqrt(number / 111);
    var result = digit + digit + digit;
  } else {
    var unidades = number % 10;
    var decenas = (number / 10) % 10;
    var centenas = (number / 100) % 10;
    var result = unidades * unidades + decenas * decenas + centenas * centenas;
  }

  document.getElementById("result").innerHTML = result;
}

function validatePassword(password) {
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@_]).{10,}$/)) {
    return true;
  } else {
    return false;
  }
}
function validate() {
  var password = document.getElementById("password").value;
  var isValid = validatePassword(password);

  var resultElement = document.getElementById("resultElement");
  if (isValid) {
    resultElement.innerHTML = "La contraseña es válida.";
  } else {
    resultElement.innerHTML = "La contraseña no es válida.";
  }
}
function validateEmail() {
  var email = document.getElementById('email').value;
  var regex = /^[^\s@]+@certus\.edu\.pe$/;
  if (!regex.test(email)) {
    alert('El correo electrónico no es válido');
    return false;
  }
  alert('El correo electrónico es válido');
  return true;
}
