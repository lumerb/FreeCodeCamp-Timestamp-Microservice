const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./route.js');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => {
    res.send('you')
});

app.listen(3000, () => {
    console.log('Listening at port 3000');
})