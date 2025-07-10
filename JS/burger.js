  // Burger 
  // Скрыть и показать меню при нижатии на burger
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#nav__btn').addEventListener('click', function() {
      document.querySelector(".menu").classList.toggle("menu_active");
      document.querySelector("#body").classList.toggle("fixed");

      // Скрыть меню при нижатии на него самого
      document.querySelector('.menu_active').addEventListener('click', function() {
        document.querySelector('.menu_active').classList.remove("menu_active");
        document.querySelector("#body").classList.remove("fixed");
      });
    });

    window.addEventListener('click', function(e) {
      if (!(e.target.classList.contains('menu__link') || e.target.classList.contains('menu') || e.target.id == 'nav__btn')) {
        document.querySelector('.menu').classList.remove("menu_active");
        document.querySelector("#body").classList.remove("fixed");
      };
    });
  });