let valor = 0;

document.getElementById("botaoadicionar").addEventListener("click", function () {
  valor++;
  document.getElementById("contador").textContent = valor;
});
