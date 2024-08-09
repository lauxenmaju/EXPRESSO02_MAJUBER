const express = require('express')
const app= express()

app.listen(3000,()=>{
    console.log('olá povo abençoado,servidor no ar')
})

//dados de clientes
const clientes=[
    {id:1,nome:'Maju',telefone:'41991952292', email:'maju@gmail.com'},
    {id:2,nome:'Ber',telefone:'4198100910', email:'ber@gmail.com'},
    {id:3,nome:'Madu',telefone:'4155555555', email:'madu@gmail.com'},
    {id:4,nome:'Caue',telefone:'4144444444', email:'cacacref@gmail.com'},
    {id:5,nome:'Bea',telefone:'4166666666', email:'bea@gmail.com'}
]

//rotas
app.get('/',(req,res)=>{
    res.send('API de clientes');

})

//rota 2- o total de clientes

app.get('/total_clientes',(req,res)=>{
    res.send('Total de clientes:'+clientes.length);
})

//rota 3 - apresentar dados de um cliente especifico
app.get('/clientes/:id',(req,res)=>{
    const cliente = clientes.find(c =>c.id === parseInt(req.params.id));
    
    //se o cliente não existe
    if(!cliente) res.status(404).send('Cliente não encontrado!');

    //se o cliente existe
    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone}, email: ${cliente.email} `);

})

