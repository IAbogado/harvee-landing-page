document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".cta");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            specialization: document.getElementById("specialization").value,
            message: document.getElementById("message").value
        };
        console.log(formData);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwJiV50u0PvuP__GgFBa8f7VgjWLY_as_mljduLYSaBj5pL2hwbWbj8b-CDww3v2fn3og/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            alert("Formulario enviado correctamente.");
            form.reset();
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario.");
        }
    });
});
