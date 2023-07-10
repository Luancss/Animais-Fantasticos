import outsideClick from "./outside-click.js";

export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    // Define touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activeClass = "active";
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Adiciona a classe ativo para abrir o menu dropdown
  // e adiciona a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    // Remove a classe com uma função de callback
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    // Adiciona os eventos de click
    this.dropDownMenus.forEach((menu) => {
      menu.addEventListener("touchstart", this.activeDropDownMenu);
      menu.addEventListener("click", this.activeDropDownMenu);
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
