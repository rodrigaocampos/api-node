const express = require('express') // importando o express
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//iniciando o app
const app = express() // chamando o express para app

// iniciando o DB
mongoose.Promise = global.Promise
mongoose.connect(
    //"mongodb://localhost:27017/nodepi", { useNewUrlParser: true, useUnifiedTopology: true  }
    "mongodb://ds013951.mlab.com:13951/nodeapi"
).then(() => {
    console.log('MongoDB Conectado!!!')
}).catch((err) => {
    console.log('Houve um erro: ' + err)
})


// requeire nos models
//require('./src/models/Product')
requireDir("./src/models") // usando a lib require-dir para agilizar o processo

const Product = mongoose.model('Product')


// primeira rota
app.get('/', (req, res) => {
    Product.create( {
        title: 'React native',
        description: 'Build native apps',
        url: 'www.facebook.com'
    } )
    
    return res.send("Hello world")
})

app.listen(8080) // informando que o meu servidor irá estar na porta 3001
