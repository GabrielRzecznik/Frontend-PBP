var botonDescargarGrilla = document.getElementById("descargarGrilla");
var div = document.getElementById("calendar");

function expandirCalendario(px) {
    div.style.height = px + "px";
    botonDescargarGrilla.classList.add('ocultar');
}

function devolverTamañoGrilla() {
    botonDescargarGrilla.classList.remove('ocultar');
    div.style.height = 650 + "px";
}

document.addEventListener("DOMContentLoaded", () => {
    botonDescargarGrilla.addEventListener("click", () => {
        
        if (visualizacionGrilla != "mes") {
            var altoGrilla = 0;
            expandirCalendario(1488);

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

            //document.getElementById('calendar').classList.add('altoGrilla');
            setTimeout(devolverTamañoGrilla, 1000);
        }else{
            //Mostrar mensaje
        }

        
    });
});

