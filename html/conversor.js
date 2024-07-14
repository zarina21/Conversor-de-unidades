function convertorLongitud() {   
    const inputValue = document.getElementById("inputLongitud").value;
    const unit = document.getElementById("Longitud").value;
    const MetrosAKm = unit === "MetrosAKm";
    const MetrosAMillas = unit === "MetrosAMillas";
    const KmAMetros = unit === "KmAMetros";
    const KmAMillas = unit === "KmAMillas";
    const MillasAKm = unit === "MillasAKm";
    const MillasAMetros = unit === "MillasAMetros";
    let result = 0;
    let convertido = "medida";
    if (MetrosAKm === true){
        result = inputValue * 1000;
        convertido = "Km"
    } else if (MetrosAMillas === true){
        result = inputValue / 1609;
        convertido = "Millas"
    } else if (KmAMetros === true){
        result = inputValue / 1000;
        convertido = "Metros"
    } else if (KmAMillas === true){
        result = inputValue / 1.609;
        convertido = "Millas"
    } else if (MillasAKm === true){
        result = inputValue * 1.609;
        convertido = "Km"
    } else if(MillasAMetros === true){
        result = inputValue * 1609;
        convertido = "Metros"
    }
    document.getElementById("resultadoLongitud").innerHTML = result + " " + convertido;
}

function convertorVolumen() {   
    const inputValue = document.getElementById("inputVolumen").value;
    const unit = document.getElementById("Volumen").value;
    const LitrosAKl = unit === "LitrosAKl";
    const LitrosAGalon = unit === "LitrosAGalon";
    const klALitros = unit === "klALitros";
    const klAGalon = unit === "klAGalon";
    const GalonAKl = unit === "GalonAKl";
    const GalonALitros = unit === "GalonALitros";
    let result = 0;
    let convertido = "medida";
    if (LitrosAKl === true){
        result = inputValue * 1000;
        convertido = "Kl"
    } else if (LitrosAGalon === true){
        result = inputValue / 1609;
        convertido = "Galon"
    } else if (klALitros === true){
        result = inputValue / 1000;
        convertido = "Litros"
    } else if (klAGalon === true){
        result = inputValue / 1.609;
        convertido = "Galon"
    } else if (GalonAKl === true){
        result = inputValue * 1.609;
        convertido = "Kl"
    } else if(GalonALitros === true){
        result = inputValue * 1609;
        convertido = "Litros"
    }
    document.getElementById("resultadoVolumen").innerHTML = result + " " + convertido;
}

function convertorMasa() {   
    const inputValue = document.getElementById("inputMasa").value;
    const unit = document.getElementById("Masa").value;
    const GramosAKg = unit === "GramosAKg";
    const GramosAOz = unit === "GramosAOz";
    const kgAGramos = unit === "kgAGramos";
    const KgAOz = unit === "KgAOz";
    const OzAKg = unit === "OzAKg";
    const OzAGramos = unit === "OzAGramos";
    let result = 0;
    let convertido = "medida";
    if (GramosAKg === true){
        result = inputValue * 1000;
        convertido = "Kg"
    } else if (GramosAOz === true){
        result = inputValue / 28.35;
        convertido = "Onzas"
    } else if (kgAGramos === true){
        result = inputValue / 1000;
        convertido = "Gramos"
    } else if (KgAOz === true){
        result = inputValue * 35.274;
        convertido = "Onzas"
    } else if (OzAKg === true){
        result = inputValue / 35.274;
        convertido = "Kg"
    } else if(OzAGramos === true){
        result = inputValue * 28.35;
        convertido = "Gramos"
    }
    document.getElementById("resultadoMasa").innerHTML = result + " " + convertido;
}

