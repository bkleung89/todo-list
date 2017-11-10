const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../public'))); // ???

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => res.send('got a POST request'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
