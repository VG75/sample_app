document.addEventListener("turbo:load", function() {
  // 1. Hamburger Logic
  let hamburger = document.querySelector("#hamburger");
  let navbarMenu = document.querySelector("#navbar-menu");

  if (hamburger && navbarMenu) {
    hamburger.addEventListener("click", function(event) {
      event.preventDefault();
      // In Bootstrap, 'in' (BS3) or 'show' (BS4+) makes the collapse visible
      navbarMenu.classList.toggle("in"); 
    });
  }

  // 2. Account Dropdown Logic
  let account = document.querySelector("#account");
  let dropdownMenu = document.querySelector("#dropdown-menu");

  if (account && dropdownMenu) {
    account.addEventListener("click", function(event) {
      event.preventDefault();
      // We toggle a class on the PARENT li to show the menu
      account.parentElement.classList.toggle("open");
    });
  }
});