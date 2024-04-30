document.addEventListener("DOMContentLoaded", function () {
 const passwordInputs = document.querySelectorAll("input[type='password']");
 const toggleButtons = document.querySelectorAll(".eye");
    
    toggleButtons.forEach(function (toggleButton, index) {
        toggleButton.addEventListener("click", function () {
          const passwordInput = passwordInputs[index];
          if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleButton.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
          } else {
            passwordInput.type = "password";
            toggleButton.innerHTML =
              '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
         }
    });
    });
});