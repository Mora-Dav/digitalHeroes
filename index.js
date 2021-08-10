const express = require ('express');
const fs = require ('fs');

const app = express();
const port = 3000 ;
const heroes =JSON.parse (fs.readFileSync('./data/heroes.json', 'utf-8'));



app.listen(port, ()=> {
    console.log('listening at http://localhost:3000')
});

app.get('/',(req, res) => {
    res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
});

app.get('/heroes', (req, res ) => {
    res.send(heroes)
});

app.get('/heroes/:id', (req, res ) => {
    const id = req.params.id
    const heroe = heroes.filter((heroe) => {
        return heroe.id==id
    })
    res.send(heroe)
})