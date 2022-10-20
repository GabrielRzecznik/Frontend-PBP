document.addEventListener("DOMContentLoaded", () => {
    const $botonDescargarGrilla = document.getElementById("descargarGrilla");
    $botonDescargarGrilla.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; // <-- Desde aquí podemos elegir cualquier elemento del DOM
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
    });
});