const express = require('express');// puxando o express
const server = express(); // definindo o express
const port = 3000; // definindo a porta

server.use(express.json());

const products = [{
    id: 12,
    product_name: 'Iphone3'
}];

server.post('/create', (req, res) => { //Cadastrar produtos
    let id = Math.random().toString(16).slice(2);
    const { product_name } = req.body;
    const newProduct = {id: id, product_name: product_name};

    products.push(newProduct);

    res.status(200).json(newProduct);
});

server.put('/update', (req, res) => { // Atualizar usurários
    const productName = req.query.product_name;
    const updateproduct = {
        id: req.body.id,
        product_name: req.body.product_name 
    };
    
    const index = products.findIndex(updateproduct => updateproduct.product_name === productName);

    if(index === -1){
        return res.status(404).send("Usuário não encontrado");
    }
    products[index] = updateproduct;
    return res.status(200).send("Usuário atualizado com sucesso")
}) 

server.delete('/delete', (req, res) => { // Deletar usuários 
    const productName = req.query.product_name;

    const index = products.findIndex(x => x.product_name === productName);

    if(index === -1) {
        return res.status(404).send("Usuário não encontrado.");
    }

    products.splice(index, 1);
    console.log(products);

    res.status(200).send("Usuário deletado com sucesso.");
}) 

server.delete('/delete', (req, res) => { // Deletar produtos 
    const product = req.query.productName;

    const index = product.findIndex(x => x.productName === productName);

    if(index === -1) {
        return res.status(404).send("Usuário não encontrado.");
    }

    products.splice(index, 1);
    console.log(products);

    res.status(200).send("Usuário deletado com sucesso.");
});

server.get('/getProduct', (req, res) => {
    return res.status(200).json(products);
});

server.get('/getProduct/:id', (req, res) => {
    return res.status(200).json(products);
});

server.listen(port, () => console.log('Running on port 3000')); //Colocar o servidor no ar