const express = require('express');
const app = express();
const PORT = process.env.PORT||3000
app.listen(PORT,()=>console.log('listening to 4000'));
app.use(express.static('public'));
