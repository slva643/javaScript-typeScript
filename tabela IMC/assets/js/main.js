function imc() {
    const form = document.getSelection("form");
    const res = document.getSelection("res")

    function receberResuldo(evento) {
        evento.preventDefaut();

        const peso = document.getSelection("ipeso");
        const altura = document.getSelection("ialtura");

        const imc = peso / (altura * altura)

        if (imc <= 18.5) {
            res.innerHTML = `<P>Seu IMC ${imc} (Abaixo do peso)</p>`
        } else if (imc > 18.5 && imc <= 24.9) {
            res.innerHTML = `<P>Seu IMC ${imc} (Peso normal)</p>`
        }
    }
   
    form.addEventListener('submit', receberResuldo)

}
imc()