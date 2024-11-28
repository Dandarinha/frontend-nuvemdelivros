async function enviaFormulario() {
    const dadosAluno = {
        "nome": document.querySelectorAll('input')[0].value,
        "sobrenome": document.querySelectorAll('input')[1].value,
        "dataNascimento": document.querySelectorAll('input')[2].value,
        "endereco": document.querySelectorAll('input')[3].value,
        "email": document.querySelectorAll('input')[4].value,
        "celular": document.querySelectorAll('input')[5].value,
    }

    try {
        const url = "http://localhost:3332/novo/aluno";
        const respostaServdidor = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dadosAluno)
        });

        console.log(!respostaServdidor.ok);

        if(!respostaServdidor.ok) {
            alert('algum erro no servidor');
        }

        alert('aluno cadastrado com sucesso');
    } catch (error) {
        alert(error);
    }
}
