const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;


app.use('/pages', express.static(path.join(__dirname, 'pages')));


app.listen(port, () => {
  console.log("Listening on port : " + port);
});