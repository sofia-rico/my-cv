function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.addEventListener("DOMContentLoaded", function (event) {
  const myContainer = document.querySelector(".container");
  if (getParameterByName("m") === "print") {
    myContainer.classList.remove("px-3");
    myContainer.classList.remove("px-lg-5");
  }
});
