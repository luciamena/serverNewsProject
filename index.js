require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: true }));
//app.use(cors());


app.use(cors({
    origin: "http://localhost:4200", // aplicación de react con la que conecta
    credentials: true
  }));
require('./src/routes')(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
