// Express web server
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Eduardo Cortez");
});

const port = 4000;
 
app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));
