const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));


/* Para el 3er sprint */

const rutas = require('./routes/main');
app.use(rutas);


/* SERVER UP */
const PORT = 4000;
const linkcito = 'http://127.0.0.1:' + PORT;
app.listen(PORT, () =>
    console.log('¡Up!\nListo para usar en ', linkcito)
);

