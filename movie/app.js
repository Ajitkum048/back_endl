var express = require("express");
var app = express();
var request = require("request");

app.get("/result", function(req, res) {
    Request("http://www.omdbapi.com/?s=california", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});
var port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));