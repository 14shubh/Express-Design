const express = require('express')
const app = express()
const path = require('path');
const routeIndex = require('./routes/route-index');
const port = 3001

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(routeIndex);