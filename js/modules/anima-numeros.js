export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do Dom com número em seu texto
  // Incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
    // Pega os numeros que estão no HTML
    // Transforma de string para number
    const total = +numero.innerText;
    // Criação de incremento para acelerar o carregamento dos numeros
    const incremento = Math.floor(total / 100);
    // Inicia o valor da animação em 0
    let start = 0;
    // Criação do tempo de carregamento da animação
    const timer = setInterval(() => {
      // Acelerar o processo do carregamento
      start += incremento;
      // Definir o máximo até onde o número pode chegar para não passar por conta da velocidade
      numero.innerText = start;
      // Lógica para fazer o numero chegar até o máximo e parar (usando o clearInterval)
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25);
  }

  // Ativa incrementar número para cada
  // número selecionado do Dom
  animacao() {
    // Passa por todos os numeros para fazer a animação
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animacao();
    }
  }

  // Adiciona o Mutation Observer para verificar
  // quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
