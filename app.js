//create express app
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./config/axios');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/province', async (req, res) => {
    try {
        const { data } = await api.get('/province');
        res.status(200).json(data.rajaongkir.results);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/city', async (req, res) => {
    try {
        const { data } = await api.get('/city');
        res.status(200).json(data.rajaongkir.results);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/cost', async (req, res) => {
    try {
        const { data } = await api.post('/cost', req.body);
        res.status(200).json(data.rajaongkir.results);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Cities service listening at http://localhost:${port}`);
});
