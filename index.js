const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = process.env.PORT || 8000;
const cors = require('cors');

const app = express();

app.use(cors());
app.listen(PORT, () => console.log(`Server up on PORT ${PORT}`));
app.use(express.json());

app.get('/', function (req, res) {
    res.json('This is the webscraper homepage.')
})

app.post('/test', async (req, res) => {
    let name = req.body
    axios(name.url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        var pageTitle = "";
        $("Title", html).each(function(){
           pageTitle = $(this).text();
        })
        res.send(pageTitle);
    }).catch(err => console.log(err));
    
})