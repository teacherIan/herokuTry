const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Sent');
});

app.listen(process.env.PORT || 4000);
