// Criação de ocultar e exibir perguntas do FAQ
// (ao clicar, aparece a pergunta junto com a descrição)
export default class Perguntas {
  constructor(list) {
    this.listaPerguntas = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  togglePerguntas(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos as peguntas
  addEventPerguntas() {
    this.listaPerguntas.forEach((item) => {
      item.addEventListener("click", () => this.togglePerguntas(item));
    });
  }

  // Iniciar função
  init() {
    if (this.listaPerguntas.length) {
      // ativar primeiro item
      this.togglePerguntas(this.listaPerguntas[0]);
      this.addEventPerguntas();
    }
    return this;
  }
}
