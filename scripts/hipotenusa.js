function calcularHipotenusa() {
    const catA = parseFloat(document.getElementById('catA').value);
    const catB = parseFloat(document.getElementById('catB').value);
    if (isNaN(catA) || isNaN(catB) || catA <= 0 || catB <= 0) {
      alert('Por favor, ingresa valores numéricos positivos para los catetos.');
      return;
    }
    const h_c = Math.pow(catA, 2) + Math.pow(catB, 2);
    const h = Math.sqrt(h_c);
    document.getElementById('resultado').textContent = h.toFixed(2);
  }