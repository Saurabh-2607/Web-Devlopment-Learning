const express = require('express');
const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World I am saurbah Sharma');
});

app.listen(port, function() {
  console.log(`Server is listening on port ${port}`);
});
