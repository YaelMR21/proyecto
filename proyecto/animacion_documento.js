const modalidadSelect = document.getElementById("modalidad");
const container = document.getElementById("documentosContainer");

modalidadSelect.addEventListener("change", function(){
    const modalidad = this.value;
    container.innerHTML = "";

    let documentos = [];

    if(modalidad === "experiencia"){
        documentos = [
            "Certificado de Estudios - CERTIFICADO DE ESTUDIOS_NombreCompleto",
            "Kardex Legalizado - KARDEX_NombreCompleto",
            "Constancia de Prácticas - PRÁCTICAS_NombreCompleto",
            "Certificado de Servicio Social - SERVICIO SOCIAL_NombreCompleto",
            "Liberación Laboratorios y Almacén",
            "Liberación Memoria de Experiencia Profesional",
            "Solicitud de Titulación",
            "Asignación de Jurado"
        ];
    }

    if(modalidad === "ceneval"){
        documentos = [
            "Certificado de Estudios",
            "Kardex Legalizado",
            "Constancia de Prácticas",
            "Certificado de Servicio Social"
        ];
    }

    if(modalidad === "automatica"){
        documentos = [
            "Certificado de Estudios",
            "Kardex Legalizado",
            "Constancia de Prácticas",
            "Certificado de Servicio Social",
            "Liberación de Laboratorios"
        ];
    }

    if(modalidad === "maestria"){
        documentos = [
            "Certificado de Estudios",
            "Kardex Legalizado",
            "Constancia de Prácticas",
            "Certificado de Servicio Social",
            "Dictamen de Compatibilidad",
            "Carta Pasante",
            "Comprobante 50% Maestría",
            "Carta de Buen Desempeño"
        ];
    }

    if(modalidad === "tesis"){
        documentos = [
            "Certificado de Estudios",
            "Kardex Legalizado",
            "Constancia de Prácticas",
            "Certificado de Servicio Social",
            "Liberación de Laboratorios",
            "Liberación de Tesis",
            "Solicitud de Titulación",
            "Asignación de Jurado",
            "Autorización de Impresión"
        ];
    }

    if(modalidad !== ""){
        documentos.forEach((doc, index)=>{
            const card = document.createElement("div");
            card.classList.add("documento-card","fade-in");

            card.innerHTML = `
                <h3>${index + 1}. ${doc}</h3>
                <small>Formato requerido: PDF</small>
                <input type="file" accept=".pdf">
            `;

            container.appendChild(card);
        });

        const foto = document.createElement("div");
        foto.classList.add("documento-card","fade-in");
        foto.innerHTML = `
            <h3>Fotografía Digital</h3>
            <small>Formato requerido: JPEG - FOTO_NombreCompleto</small>
            <input type="file" accept=".jpg,.jpeg">
        `;
        container.appendChild(foto);
    }
});
