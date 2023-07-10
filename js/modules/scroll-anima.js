import debounce from "./debounce.js";

// Criação de animação da barra de rolagem do scroll
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeWindow = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distancia de cada item em relação
  // ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.metadeWindow),
      };
    });
  }

  // Verifica a distancia em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      }
    });
  }

  // Inicia o event de scroll
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
