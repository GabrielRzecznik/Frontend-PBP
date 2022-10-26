document.addEventListener("DOMContentLoaded", () => {
    const $botonDescargarGrilla = document.getElementById("descargarGrilla");
    $botonDescargarGrilla.addEventListener("click", () => {

        document.getElementById('calendar').classList.remove('altoGrilla');
        document.getElementById('calendar').classList.add('zoom');

        const $elementoParaConvertir = document.getElementById("capturarGrilla"); //document.body;
        html2pdf().set({
            margin: 1,
            filename: 'grilla.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },html2canvas: {
                scale: 3, // a mayor escala, mejor calidad a un mayor peso
                letterRendering: true
            },
            jsPDF: {
                unit: "in",
                format: "a2",
                orientation: 'landscape' // landscape o portrait
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
       
        $devolverTamañoGrilla = setTimeout(devolverTamañoGrilla, 1000);
        
    });
});

function devolverTamañoGrilla() {
    document.getElementById('calendar').classList.add('altoGrilla');
    document.getElementById('calendar').classList.remove('zoom');
}

