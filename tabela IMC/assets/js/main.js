function calculadoraImc() {
    const form = document.querySelector("#form");
    const res = document.querySelector("#res")

    function receberResuldo(evento) {
        evento.preventDefault();

        const peso = Number(document.querySelector("#peso").value);
        const alturaInput = Number(document.querySelector("#altura").value);

        if (peso <= 0) {
            const mensagemErro = "Peso iválido.";
            res.innerHTML = `<p>${mensagemErro}</p>`;
            res.classList.remove("result-valid"); // Remova a classe de resultado válido, se aplicável
            res.classList.add("result-invalid"); // Adicione a classe de resultado inválido 
            return;
        }

        const altura = parseFloat(alturaInput);
        if (isNaN(altura) || altura <= 0) {
            const mensagemErro = "Altura inválida.";
            res.innerHTML = `<p>${mensagemErro}</p>`;
            res.classList.remove("result-valid"); // Remova a classe de resultado válido, se aplicável
            res.classList.add("result-invalid"); // Adicione a classe de resultado inválido
            return;
        }


        const imc = peso / (altura * altura)


        if (imc <= 18.5) {
            res.innerHTML = `<P>Seu IMC ${imc.toFixed(2)} (Abaixo do peso)</p>`
            window.location.href = "peso-baixo.html";
        } else if (imc > 18.5 && imc <= 24.9) {
            res.innerHTML = `<P>Seu IMC ${imc.toFixed(2)} (Peso normal)</p>`
            window.location.href.replace = "peso-normal.html";
        } else if (imc > 25 && imc <= 29.9) {
            res.innerHTML = `<P>Seu IMC ${imc.toFixed(2)} (Sobrepeso)</p>`
            window.location.href = "sobrepeso.html";
        } else if (imc > 30 && imc <= 34.9) {
            res.innerHTML = `<P>Seu IMC ${imc.toFixed(2)} (Obesidade grau 1)</p>`
            window.location.href = "obesidade-grau1.html"
        } else if (imc > 35 && imc <= 39.9) {
            res.innerHTML = `<P>Seu IMC ${imc.toFixed(2)} (Obesidade grau 2)</p>`
            window.location.href = "Obesidade-grau2.html";
        } else if (imc > 40) {
            res.innerHTML = `<P>Seu IMC ${imc.toFixed(2)} (Obesidade grau 3)</p>`
            window.location.href = "Obesidade-grau3.html";
        }

        res.classList.remove("result-invalid"); // Remova a classe de resultado inválido, se aplicável
        res.classList.add("result-valid"); // Adicione a classe de resultado válido
    }

    form.addEventListener('submit', receberResuldo)

}
calculadoraImc()