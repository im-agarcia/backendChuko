const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const logger = require('morgan')
const cors = require('cors')

//importar rutas

const users = require('./routes/userRoutes')
const userRoutes = require('./routes/userRoutes')

const port = process.env.PORT || 3000
app.set('port', port)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(cors())
app.disable('x-poweres-by')
app.set('port',port)

//llamado de las rutas
userRoutes(app)

server.listen(process.env.PORT, 'backendchuko-production.up.railway.app' || 'localhost', function() {
    console.log('aplicacion de Node en port: '+ port + ' Inicializado...')
})

app.get('/',(req, res) =>{
    res.send('Ruta raiz del backend')
} )

app.get('/test',(req, res) =>{
    res.send('Ruta del TEST')
} )

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(err.status || 500).send(err.stack)
})