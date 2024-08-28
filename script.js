function validarTexto() {
    let inputText = document.getElementById("inputText").value;
    let advertencia = document.getElementById("advertencia");
    let regex = /^[a-z\s]*$/;

    if (!regex.test(inputText)) {
        advertencia.classList.add("error");
        advertencia.style.color = "red";
    } else {
        advertencia.classList.remove("error");
        advertencia.style.color = "var(--color-primario)";
    }
}

function encriptar() {
    let texto = document.getElementById("inputText").value;
    let advertencia = document.getElementById("advertencia");

    if (advertencia.classList.contains("error") || texto.trim() === "") {
        mostrarMuneco();
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = textoEncriptado;
    mostrarResultado();
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;
    let advertencia = document.getElementById("advertencia");

    if (advertencia.classList.contains("error") || texto.trim() === "") {
        mostrarMuneco();
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = textoDesencriptado;
    mostrarResultado();
}

function mostrarResultado() {
    document.getElementById("muneco").classList.add("hidden");
    document.getElementById("mensaje").classList.add("hidden");
    document.getElementById("submensaje").style.display = 'none';
    document.getElementById("outputText").style.display = "block"; // Mostrar textarea
    document.getElementById("copiarBtn").classList.remove("hidden");
}

function mostrarMuneco() {
    document.getElementById("muneco").classList.remove("hidden");
    document.getElementById("mensaje").classList.remove("hidden");
    document.getElementById("submensaje").style.display = 'block';
    document.getElementById("outputText").style.display = "none"; // Ocultar textarea
    document.getElementById("copiarBtn").classList.add("hidden");
}


function copiarTexto() {
    let texto = document.getElementById("outputText");
    texto.select();
    texto.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}
