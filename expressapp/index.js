const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.send('Hello World!');
});

//bye route
app.get("/bye", function(req, res) {
    res.send("OK Then bye good night");
});

//dog route
app.get("/dog", function(req, res) {
    res.send("Meaow meawo wasup");
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));