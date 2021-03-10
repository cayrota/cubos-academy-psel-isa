function solucao(palpite, palavra) {
	// seu código aqui
    let acertos = 0;
    for (let l of palavra) {
        if (l === palpite) {
            acertos++;
        } else {
            continue;
        }
    }
    console.log(acertos);
}