const express = require('express')
const path = require('path')
const app = express()
const userRoutes = require('./src/routes/userRoutes')

// Middleware para analisar requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs') // Configurar o mecanismo de visualização como 'ejs'
app.set('views', path.join(__dirname, 'src', 'public', 'view')) // Definir o diretório onde estão os arquivos de visualização

app.use(userRoutes)

app.get('/', (req, res) => {
    res.render('index'); // Não precisa incluir a extensão '.ejs'
})

// Rota auth
app.post('/auth', async (req, res) => {
    console.log('ok')
    var {client_secret, client_id, grant_type, code, redirect_url} = req.body

    try {
        const response = await fetch("https://bytebi.kommo.com/oauth2/access_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "client_id": client_id,
                "client_secret": client_secret,
                "grant_type": grant_type,
                "code": code,
                "redirect_uri": redirect_url
            })
        });

        const data = await response.json()
        console.log(data) // Converte a resposta para JSON
        res.status(200).redirect('/') // Envia o JSON como resposta para o Postman
    } catch (err) {
        console.error("Error occurred:", err)
        res.status(500).json({ error: "Failed to fetch ticket" }) // Envia um erro para o Postman
    }

})

// Iniciar o servidor
app.listen(8000, () => {
    console.log('Server ON!')
})
