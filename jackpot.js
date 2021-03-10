function solucao(resultado1, resultado2, resultado3) {
	// seu código aqui
    const ganhou = true;
    if (resultado1 === resultado2 && resultado1 === resultado3){
        console.log(ganhou);
    } else {
        console.log(!ganhou);
    }
}