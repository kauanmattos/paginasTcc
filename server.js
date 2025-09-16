const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = 3000;
const methodOverride = require('method-override');

// Middleware para processar dados JSON e formúlarios 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method')); // Middleware para suportar métodos HTTP alternativos

// Configuração da URL de conexão com o MongoDB
const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'livraria';
const collectionName = 'livros';

// Rota para exibir a página inicial 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/cadastro.html');
})

// Rota para lidar com a submissão do formúlario de cadastro 
app.post('/cadastro', async (req, res) => {
    const novoLivro = req.body; // Dados do livro enviados pelo formulário 

    // Conectar ao MongoDB
    const client = new MongoClient(url);

    try {
        await client.connect();

        const db = client.db(dbName);
        const colection = db.collection(collectionName);

        // Inserir novo livro no banco de dados
        const result = await collection.insertOne(novoLivro);
    }
})