
const express = require('express')
const mongoose= require('mongoose')
const url = 'mongodb+srv://Deep:Djk0b9SGoTBoAK1N@cluster0.igd6ncm.mongodb.net/market?retryWrites=true&w=majority';
const app =express()

mongoose.connect(url,{
    useNewUrlParser:true,

}).then(()=>{
    console.log("connected...");
}).catch((err)=>console.log(err));

app.use(express.json())

const items_categoryrouter= require('./routers/items_category')
app.use('/item',items_categoryrouter)

app.listen(9000,()=>{
    console.log('server started')
})


