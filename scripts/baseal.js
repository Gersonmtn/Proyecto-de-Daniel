function calcularArea() {
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;

    const area = 0.5 * base * altura;
    document.getElementById('resultado').textContent = area;}