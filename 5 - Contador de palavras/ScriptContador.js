document.getElementById("contarBtn").addEventListener("click", function () {
    const texto = document.getElementById("texto").value.trim();
    const palavras = texto.split(/\s+/).filter(p => p.length > 0);
    document.getElementById("resultado").textContent = "Número de palavras: " + palavras.length;
  });
  