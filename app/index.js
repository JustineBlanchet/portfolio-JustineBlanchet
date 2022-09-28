const express = require('express');
const router = require('./routers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

app.use(router);
app.use((_, res) => {
    res.status(404).render('404')
})

module.exports = app;