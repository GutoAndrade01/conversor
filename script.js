
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
