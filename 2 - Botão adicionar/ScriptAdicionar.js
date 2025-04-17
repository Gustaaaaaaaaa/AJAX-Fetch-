document.getElementById("adicionarBtn").addEventListener("click", function () {

    const input = document.getElementById("tarefa");
    const texto = input.value.trim();

    if (texto !== "") {

      const novaTarefa = document.createElement("li");
      novaTarefa.textContent = texto;
      document.getElementById("listaTarefas").appendChild(novaTarefa);
      input.value = "";
    }
  });
  