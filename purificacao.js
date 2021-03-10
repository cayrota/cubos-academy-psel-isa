function solucao(stringCorrompida) {
	// seu código aqui
    let nomePurificado = [], i = 0;
    for(let c of stringCorrompida) {
        if (c !== "!" && c !== "@" && c !== "#" && c !== "$" && c !== "%" && c !== "&" && c !== "*" && c !== "(" && c !== ")") {
            nomePurificado[i] = c;
            i++
        } else {
            continue;
        }
    }
    let stringPurificada = "";
    for (let a of nomePurificado){
        stringPurificada += a;
    }
    console.log(stringPurificada);
}