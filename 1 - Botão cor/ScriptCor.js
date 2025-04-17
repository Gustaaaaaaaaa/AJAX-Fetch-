document.getElementById("botao").addEventListener("click", function () {
  const cores = ["red", "blue", "green", "yellow", "purple"];
  const indice = Math.floor(Math.random() * cores.length);
  document.getElementById("caixa").style.backgroundColor = cores[indice];
});