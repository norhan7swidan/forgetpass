// الربط
let successMessageDisplayed = false; 

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  login();
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("https://finsh-pro.onrender.com/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      console.log("data => ", data);
      console.log("token => ", data.data.token);
      console.log("id => ", data.data.id);

      successMessageDisplayed = true; 
      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("id", JSON.stringify(data.data.id));
      window.location.href = "login.html"; //
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");

  if (localStorage.getItem("savedEmails")) {
    const savedEmails = JSON.parse(localStorage.getItem("savedEmails"));
    savedEmails.forEach(function (email) {
      const option = document.createElement("option");
      option.value = email;
      emailInput.appendChild(option);
    });
  }

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    if (email !== "") {
      const savedEmails = localStorage.getItem("savedEmails")
        ? JSON.parse(localStorage.getItem("savedEmails"))
        : [];
      if (!savedEmails.includes(email)) {
        savedEmails.push(email);
        localStorage.setItem("savedEmails", JSON.stringify(savedEmails));
              const option = document.createElement("option");
        option.value = email;
        emailInput.appendChild(option);
      }
    }
  });
});
// eye
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const toggleButton = document.querySelector(".password button");

  toggleButton.addEventListener("click", function () {
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
