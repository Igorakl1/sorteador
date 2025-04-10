const botaoSortear = document.querySelector(".sortear");
const campoNumeros = document.querySelector(".numeros");

function gerarNumeroAleatorio() {
  const num1 = Math.round(Math.random() * 99);
  const num2 = Math.round(Math.random() * 99);

  const formatado1 = num1.toString().padStart(2, "0");
  const formatado2 = num2.toString().padStart(2, "0");

  campoNumeros.textContent = `${formatado1} ${formatado2}`;
}

botaoSortear.addEventListener("click", gerarNumeroAleatorio);
