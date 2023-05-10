const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/../views/index.html'))
})

app.post('/post-test', (req, res) =>{
    console.log('Got body:', req.body);
    res.render(path.join(__dirname+'/../views/page_info'), { context: req.body });
})

app.listen(8080, () => console.log(`Started Server at http://localhost:8080`));


