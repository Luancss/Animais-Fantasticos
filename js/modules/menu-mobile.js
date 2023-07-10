import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuButton, menulist, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menulist = document.querySelector(menulist);
    this.activeClass = "active";

    // Define touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menulist.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menulist, this.events, () => {
      this.menulist.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEventes() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menulist) {
      this.addMenuMobileEventes();
    }
  }
}
