function calcularSueldo() {
    const horasTrabajadas = document.getElementById("horas").value;
    const pagoPorHora = document.getElementById("pago").value;

    // Validar los valores ingresados
    if (isNaN(horasTrabajadas) || isNaN(pagoPorHora) || horasTrabajadas < 0 || pagoPorHora < 0) {
        alert("Por favor, ingrese valores numéricos válidos para las horas trabajadas y el pago por hora.");
        return;
    }

    const horasTrabajadasNumero = parseFloat(horasTrabajadas);
    const pagoPorHoraNumero = parseFloat(pagoPorHora);
    let sueldo;

    if (horasTrabajadasNumero <= 40) {
        sueldo = horasTrabajadasNumero * pagoPorHoraNumero;
    } else if (horasTrabajadasNumero <= 45) {
        sueldo = 40 * pagoPorHoraNumero + (horasTrabajadasNumero - 40) * 2 * pagoPorHoraNumero;
    } else if (horasTrabajadasNumero <= 50) {
        sueldo = 40 * pagoPorHoraNumero + 5 * 2 * pagoPorHoraNumero + (horasTrabajadasNumero - 45) * 3 * pagoPorHoraNumero;
    } else {
        alert("No es posible trabajar más de 50 horas.");
        return;
    }

    alert(`El sueldo semanal es: $${sueldo.toFixed(2)}`);
}