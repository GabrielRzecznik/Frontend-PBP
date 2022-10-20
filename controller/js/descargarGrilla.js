document.addEventListener("DOMContentLoaded", () => {
    const $botonDescargarGrilla = document.getElementById("descargarGrilla");
    $botonDescargarGrilla.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; // <-- Desde aquí podemos elegir cualquier elemento del DOM
        html2pdf().set({
            margin: 1,
            filename: 'documento.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },html2canvas: {
                scale: 5, // a mayor escala, mejor calidad a un mayor peso
                letterRendering: true
            },
            jsPDF: {
                unit: "in",
                format: "a3",
                orientation: 'portrait' // landscape o portrait
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
    });
});