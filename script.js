const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", (event) => {
  const ic = hamburger.getElementsByTagName("i")[0];

  if (!ic.classList.contains("fa-xmark")) {
    ic.classList.replace("fa-bars", "fa-xmark");
    dropdown.classList.add("slide");
  } else {
    ic.classList.replace("fa-xmark", "fa-bars");
    dropdown.classList.remove("slide");
  }
});
