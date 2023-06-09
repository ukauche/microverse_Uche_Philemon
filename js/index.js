const menuBtn = document.querySelector("#link-menu");
const linksDiv =
  document.querySelector("#nav-links") || document.querySelector("#showMenu");
menuBtn.onclick = (e) => {
  e.preventDefault();
  console.log(menuBtn);
  if (menuBtn.dataset.action == 1) {
    menuBtn.dataset.action = 0;
    menuBtn.innerHTML = "&times";
    linksDiv.id = "showMenu";
  } else {
    menuBtn.dataset.action = 1;
    menuBtn.innerHTML = "Menu";
    linksDiv.id = "nav-links";
  }
};
