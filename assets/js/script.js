// Fx para verificar el password
document.getElementById('ingresar').addEventListener('click', function() {
    // Obtener los valores de los select
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    // Construir el password
    const password = digit1 + digit2 + digit3;

    
    const resultado3 = document.getElementById('resultado3');

    // Verificar el password
    if (password === '911') {
        resultado3.textContent = 'password 1 correcto';
        resultado3.style.color = 'green';
    } else if (password === '714') {
        resultado3.textContent = 'password 2 es correcto';
        resultado3.style.color = 'green';
    } else {
        resultado3.textContent = 'password incorrecto';
        resultado3.style.color = 'red';
    }
});