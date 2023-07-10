// Fecha ao clicar do lado de fora do menu dropdown
export default function outsideClick(element, events, callback) {
  // Seleciona o HTML (para realizar o click externo)
  const html = document.documentElement;
  // Seleciona o atributo 'data-outside'
  const outside = "data-outside";

  // Função que verifica se o click foi dentro ou fora do menu para que possa fechar
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      // Remove o atributo 'data-outside', fazendo com q o menu feche
      element.removeAttribute(outside);
      // Realizado desta forma para que possa passar mais de um evento de uma forma maais organizada
      events.forEach((userEvent) => {
        // Remover o evento de click para não sobrecarregar o site
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  // Verifica se não tem o atributo, caso não tenha, executa os eventos
  // Desta forma, previne o acumulo de eventos de click(fazendo com que ocorra apenas um)
  if (!element.hasAttribute(outside)) {
    // Realizado desta forma para que possa passar mais de um evento de uma forma maais organizada
    events.forEach((userEvent) => {
      // Adiciona o evento de click no html, executando a função para fechar o menu
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    // Adiciona o evento 'outside'
    element.setAttribute(outside, "");
  }
}
