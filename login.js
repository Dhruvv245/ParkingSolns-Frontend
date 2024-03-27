document.getElementById("logIn").addEventListener("click", (event) => {
  event.stopPropagation();
  document.querySelector(".login-page").classList.add("login-page--active");
  document.querySelector("#page1-content").style.display = "none";
  document.querySelector(`#page1 video`).style.filter = "blur(20px)";
});

document
  .querySelector(".login-page .container")
  .addEventListener("click", (event) => {
    event.stopPropagation();
  });

document.addEventListener("click", (event) => {
  const form = document.querySelector(".login-page .container");
  if (event.target.id === "logIn" || form.contains(event.target)) {
    return;
  }
  document.querySelector(".login-page").classList.remove("login-page--active");
  document.querySelector("#page1-content").style.display = "flex";
  document.querySelector(`#page1 video`).style.filter = "none";
});
