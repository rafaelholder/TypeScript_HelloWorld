// Init project 
// console.log('express + ts')

// 2- Init express
import express from 'express';

const app = express();

// 3- route with POST
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("HEllo express duda gotosa");
});

// Routes
app.post('/api/product', (req, res) => {
    console.log(req.body);

    return res.send("Produto added");
})
app.listen(3000, () =>{
    console.log('Aplicação ts + express funcionando!')
})