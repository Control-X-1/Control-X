document.addEventListener("DOMContentLoaded", () => {
    // FAQ Toggle
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            // Alternar visibilidad de la respuesta actual
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.padding = "0 10px";
            } else {
                // Ajustar altura dinámica según el contenido
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = "10px 10px";

                // Cerrar otras respuestas abiertas
                faqQuestions.forEach((otherQuestion) => {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    if (otherAnswer !== answer) {
                        otherAnswer.style.maxHeight = null;
                        otherAnswer.style.padding = "0 10px";
                    }
                });
            }
        });
    });

    // Popup Form Open and Close
    const reportProblemButton = document.getElementById("reportProblemButton");
    const problemForm = document.getElementById("problemForm");
    const closeProblemForm = document.getElementById("closeProblemForm");

    reportProblemButton.addEventListener("click", () => {
        problemForm.style.display = "flex"; // Mostrar el formulario emergente
    });

    closeProblemForm.addEventListener("click", () => {
        problemForm.style.display = "none"; // Ocultar el formulario emergente
    });

    // Cerrar el popup al hacer clic fuera de él
    problemForm.addEventListener("click", (event) => {
        if (event.target === problemForm) {
            problemForm.style.display = "none";
        }
    });

    // Enviar reporte de problema
    const problemReportForm = document.getElementById("problemReportForm");

    problemReportForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar recarga de página
        alert("¡Gracias por reportar el problema! Nuestro equipo se pondrá en contacto contigo pronto.");
        problemForm.style.display = "none"; // Cerrar el formulario emergente
        problemReportForm.reset(); // Limpiar el formulario
    });
});