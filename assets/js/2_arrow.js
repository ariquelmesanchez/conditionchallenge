// Función para calcular la cantidad de stickers
document.getElementById('calcular').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

    // Calcular la suma de los stickers
    const total = sticker1 + sticker2 + sticker3;

    // Referencia al párrafo de resultado
    const resultado = document.getElementById('resultado');

    // Verificar si el total es menor o igual a 10
    if (total <= 10) {
        resultado.textContent = `Has seleccionado ${total} stickers.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `Has seleccionado demasiados stickers. Máximo permitido es 10.`;
        resultado.style.color = 'red';
    }
});