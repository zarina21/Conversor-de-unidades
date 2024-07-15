function convertorLongitud() {   
    const inputValue = document.getElementById("inputLongitud").value;
    const unit = document.getElementById("Longitud").value;
    //colocamos las constantes de las distintas conversiones
    //metros
    const MetrosAKm = unit === "MetrosAKm";
    const MetrosAMillas = unit === "MetrosAMillas";
    const MetrosAPies = unit === "MetrosAPies";
    const MetrosAcm = unit === "MetrosAcm";
    const MetrosAYardas = unit === "MetrosAYardas";
    //km
    const KmAMetros = unit === "KmAMetros";
    const KmAMillas = unit === "KmAMillas";
    //millas
    const MillasAKm = unit === "MillasAKm";
    const MillasAMetros = unit === "MillasAMetros";
    // <p> resultado, medida </p> ejemplo: "10 km"
    let result = 0;  
    let convertido = "medida"; 
    //calculadora longitud
    //metros
    if (MetrosAKm === true){ 
        result = inputValue * 1000;
        convertido = "Km"
    } else if (MetrosAMillas === true){
        result = inputValue / 1609;
        convertido = "Millas"
    } else if (MetrosAPies === true){
        result = inputValue *3.281;
        convertido = "Pies" 
    } else if (MetrosAcm ===true){
        result = inputValue * 100;
        convertido = "cm"
    //km
    } else if (KmAMetros === true){
        result = inputValue / 1000;
        convertido = "Metros"
    } else if (KmAMillas === true){
        result = inputValue / 1.609;
        convertido = "Millas"
    //millas
    } else if (MillasAKm === true){
        result = inputValue * 1.609;
        convertido = "Km"
    } else if(MillasAMetros === true){
        result = inputValue * 1609;
        convertido = "Metros"
    //pies
    //cm
    //mm
    //yardas
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
//gramos
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

