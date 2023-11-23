const express = require("express")
const exphbs =require("express-handlebars")

const app = express()

//configurando handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine' , 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

//aquivos publicos ficaram na pasta pública
app.use(express.static("public"))

app.listen(3000,() =>{
    console.log("Servidor rodando na porta 3000!")
})