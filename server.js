const express = require('express');
const app = express();
const path = require('path');


app.use('/pages', express.static(path.join(__dirname, 'pages')));


app.listen(5000, () => {
  console.log("Listening on port : 5000");
});