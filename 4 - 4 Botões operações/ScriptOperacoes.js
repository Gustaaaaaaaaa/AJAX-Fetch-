function calcular(operacao) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(n1) || isNaN(n2)) {
      resultado.textContent = "Digite dois números válidos.";
      return;
    }
  
    if (operacao === "/" && n2 === 0) {
      alert("Divisão por 0 não existe");
      return;
    }
  
    let res;
    switch (operacao) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": res = n1 / n2; break;
    }
  
    resultado.textContent = "Resultado: " + res;
  }
  