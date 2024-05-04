function calcularSueldo() {
    const horasTrabajadas = parseFloat(document.getElementById('horas-trabajadas').value);
    const salarioBase = 50; // Supongamos un salario base de $50 por hora

    let sueldo;

    if (horasTrabajadas <= 40) {
        sueldo = horasTrabajadas * salarioBase;
    } else if (horasTrabajadas <= 45) {
        sueldo = 40 * salarioBase + (horasTrabajadas - 40) * (salarioBase * 2);
    } else if (horasTrabajadas <= 50) {
        sueldo = 40 * salarioBase + 5 * (salarioBase * 2) + (horasTrabajadas - 45) * (salarioBase * 3);
    } else {
        sueldo = 'No se permite trabajar más de 50 horas.';
    }

    document.getElementById('resultado').textContent = `Sueldo semanal: $${sueldo}`;
}