function generateQR() {
    const text = document.getElementById("text-input").value;
    const container = document.getElementById("qrcode");
    const wrapper = document.getElementById("qrcode-container");

    if (!text) {
        alert("Por favor, ingresa un texto o URL");
        return;
    }

    container.innerHTML = "";
    // Mostramos el contenedor blanco
    wrapper.style.visibility = "visible";

    new QRCode(container, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

