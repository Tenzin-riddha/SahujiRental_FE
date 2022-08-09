// const togglePassword = document.querySelector("#togglePassword-visible");
const visible_icon = document.getElementById("togglePassword-visible");
const non_visible_icon = document.getElementById("togglePassword-non-visible");
const password = document.querySelector("#input-password-field");

const revisible_icon = document.getElementById("togglerePassword-visible");
const renon_visible_icon = document.getElementById("togglerePassword-non-visible");
const repassword = document.querySelector("#input-repassword-field");

// for visible-icon
visible_icon.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.remove("d-block");
  non_visible_icon.classList.remove("d-none");
  this.classList.add("d-none");
  non_visible_icon.classList.add("d-block");
});

// for non-visible-icon
non_visible_icon.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.remove("d-block");
  visible_icon.classList.remove("d-none");
  this.classList.add("d-none");
  isible_icon.classList.add("d-block");
});


// for re password
// for visible-icon
revisible_icon.addEventListener("click", function () {
  // toggle the type attribute
  const type = repassword.getAttribute("type") === "password" ? "text" : "password";
  repassword.setAttribute("type", type);

  // toggle the icon
  this.classList.remove("d-block");
  renon_visible_icon.classList.remove("d-none");
  this.classList.add("d-none");
  renon_visible_icon.classList.add("d-block");
});

// for non-visible-icon
renon_visible_icon.addEventListener("click", function () {
  // toggle the type attribute
  const type = repassword.getAttribute("type") === "password" ? "text" : "password";
  repassword.setAttribute("type", type);

  // toggle the icon
  this.classList.remove("d-block");
  revisible_icon.classList.remove("d-none");
  this.classList.add("d-none");
  isible_icon.classList.add("d-block");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
