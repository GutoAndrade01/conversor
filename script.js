
  function converterParaMinusculas() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toLowerCase();
    document.getElementById('outputText').value = outputText;
  }

  function converterParaMaiusculas() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toUpperCase();
    document.getElementById('outputText').value = outputText;
  }

  function limparCampos() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
  }
  function callPage() {
    // Redirecionar para a página desejada
    window.location.href = "https://gutoandrade01.github.io/GeneratorGT/GeneratorSidebarGT.html";
}
