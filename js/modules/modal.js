export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fecharExterno = this.fecharExterno.bind(this);
  }

  // Função para abrir/fechar modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // Função para previnir o padrão do evento e acionar o toggleModal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Função para fechar com click fora do modal
  fecharExterno(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.fecharExterno);
  }

  // Verificar se essas const existem, caso não exista retorna undefined e não executa nada
  // previnindo a quebra do código JS.
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
