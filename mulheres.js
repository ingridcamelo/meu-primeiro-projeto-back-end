const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ingrid Camelo',
        imagem: 'https://avatars.githubusercontent.com/u/151796627?v=4',
        minibio: 'Desenvolvedora em formação'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://avatars.githubusercontent.com/u/151796627?v=4',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres'), mostraMulheres)
app.listen(porta, mostraPorta)