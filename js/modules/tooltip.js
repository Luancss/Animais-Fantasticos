export default class Tooltip {
  constructor(tooltips) {
    // Seleciona a tooltip
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    // Selecionar aonde o mouse esta
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    // Remover
    this.tooltipBox.remove();
    // Remover evento quando não estiver mais em execução
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a tooltipbox e coloca no body
  criarTooltipBox(element) {
    // Criar div para colocar a tooltip
    const tooltipBox = document.createElement("div");
    // Pegar texto que foi atribuido em 'aria-label' para adicionar tooltip
    const text = element.getAttribute("aria-label");

    // Adicionar classe na div para estilizar tooltip
    tooltipBox.classList.add("tooltip");
    // Adicionar texto que foi selecionado em 'text'
    tooltipBox.innerText = text;
    // Adicionar div criada ao final do body
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    // Cria a tooltipBox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    // Adicionar evento de mouseleave
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    // Adicionar evento de onMouseMove
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      // Adicionar evento de mouseover
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
