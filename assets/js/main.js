function getParameterByName(seach) {
  return window.location.search.indexOf(seach) > -1;
}

document.addEventListener("DOMContentLoaded", function (event) {
  const hideItems = document.querySelectorAll(".hidden-print");
  const myContainer = document.querySelector(".container");
  const resumeWrapper = document.querySelector(".resume-wrapper");
  const phoneInfo = document.querySelector(".phone-info");
  if (getParameterByName("m=print")) {
    myContainer.classList.remove("px-3");
    myContainer.classList.remove("px-lg-5");
    resumeWrapper.classList.remove("p-5");
    resumeWrapper.classList.remove("shadow-lg");
    resumeWrapper.classList.remove("resume-wrapper");
    for (var x = 0; x < hideItems.length; x += 1) {
      hideItems[x].style.display = "none";
    }
  }

  if (getParameterByName("p=1")) {
    phoneInfo.classList.remove("phone-info");
  }
});
