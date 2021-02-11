const menu_bar = document.querySelector ('.menu-bar'),
     header_menu = document.querySelector ('.header-menu')

menu_bar.addEventListener ('click', () => {
          menu_bar.classList.toggle ('active')
          header_menu.classList.toggle ('menuShow')
})