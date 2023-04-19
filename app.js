import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});

app.use(express.static('dist'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});