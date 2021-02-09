document.addEventListener("DOMContentLoaded", function () {
  pTag = document.querySelector("div");
  newVal = document.create("p");
  newVal.innerHTML = "";
  pTag.appendChild(newVal);
});
