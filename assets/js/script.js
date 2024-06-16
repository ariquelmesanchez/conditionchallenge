const imagenOne = document.getElementById("img1")

        imagenOne.addEventListener("click", function()
    {
        if (img1.style.border === "2px solid red")
        {
            img1.style.border = "";

        }
        else {
            img1.style.border = "2px solid red";
        }
    });

    // document.getElementById('calcular').addEventListener('click', function() {
        
    //     const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    //     const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    //     const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

    //     // Calcular suma de los stickers
    //     const total = sticker1 + sticker2 + sticker3;

    //     // Referencia párrafo de resultado
    //     const resultado = document.getElementById('resultado');

    //     // Verificar si el total es menor o igual a 10
    //     if (total <= 10) {
    //         resultado.textContent = `Has seleccionado ${total} stickers.`;
    //         resultado.style.color = 'green';
    //     } else {
    //         resultado.textContent = `Has seleccionado demasiados stickers. Máximo permitido es 10.`;
    //         resultado.style.color = 'red';
    //     }
    // });