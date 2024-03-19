const express = require('express');
const app = express();
const PORT =  3500;





app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

app.listen( process.env.PORT || PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`);
});
