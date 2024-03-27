document.getElementById("signUp").addEventListener("click", (event) => {
  event.stopPropagation();
  document.querySelector(".signup-page").classList.add("signup-page--active");
  document.querySelector("#page1-content").style.display = "none";
  document.querySelector(`#page1 video`).style.filter = "blur(20px)";
});

document.getElementById(`register`).addEventListener(`click`,(event)=>{
  event.stopPropagation();
  document.querySelector(".signup-page").classList.add("signup-page--active");
  document.querySelector(".login-page").classList.remove("login-page--active");
})

document
  .querySelector(".signup-page .signup-container")
  .addEventListener("click", (event) => {
    event.stopPropagation();
  });

document.addEventListener("click", (event) => {
  const form = document.querySelector(".signup-page .signup-container");
  if (event.target.id === "signUp" || form.contains(event.target)) {
    return;
  }
  document.querySelector(".signup-page").classList.remove("signup-page--active");
  document.querySelector("#page1-content").style.display = "flex";
  document.querySelector(`#page1 video`).style.filter = "none";
});
