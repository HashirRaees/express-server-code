const express = require('express');
const app = express();
const PORT = 3000 || process.env.port;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) =>{
 res.send('Hello world')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})