const express = require('express');
const app = express();

const PORT = 3000;

app.use("/public", express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html"); 
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
