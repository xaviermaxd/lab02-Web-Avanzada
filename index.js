const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.sendFile('./scripts/index.html', {
        root: __dirname
    })
})


app.get('/contacto', (req, res) => { 
    res.json({
        name: 'Empresa abc',
        direction: 'ubicado en la avenida.....',
        phone: '999-999-999'
    });
});

app.get('/formulario', (req, res) => { 
    res.sendFile('./scripts/formulario.html', {
        root: __dirname
    })
});

app.post('/formulario', (req, res) => { 
    console.log(req.body);
    res.send('Reclamo guardado!!!');
});


app.get('/usuario', (req, res) => { 
    res.sendFile('./scripts/usuario.html', {
        root: __dirname
    })
});

app.put('/usuario', (req, res) => { 
    res.send('Peticion Actualizacion de datos de usaurio');
});

app.use((req,res) => {
    res.status(404).send('No se encontro tu pagina....!!!')
})

app.listen(3000)
console.log(`Server on port ${3000}`)