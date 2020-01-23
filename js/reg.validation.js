(function() {
  var $form = document.querySelector('#register-form');
  var $emailInput = document.querySelector('#email');
  var $passwordInput = document.querySelector('#password');

  function validateEmail() {

    return false;
  }

  function validatePassword() {

    return false
  }

  function validateForm() {
    return validateEmail() && validatePassword();
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault(); //Do not submit to the several
    if (validateForm()) {
      alert('Success!');
    }
  })
})();
