const $user = document.getElementById("user");
const $password = document.getElementById("password");
const $submit = document.getElementById("submit");
const $form = document.getElementById("form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  if ($user.value.includes("@") && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test($user.value)) { window.location.href = "home.html"
      } else if ($user.value.length > 6 && $user.value.length < 21 && !$user.value.includes("@")){
    window.location.href = "home.html"
  }
});
