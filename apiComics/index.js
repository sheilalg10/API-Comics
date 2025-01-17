const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors());

const routes = require("./routes/router");
app.use("/apiComics", routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor Express en el puerto ${PORT}`);
});