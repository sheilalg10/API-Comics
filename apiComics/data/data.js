const fs = require("fs");

const saveToDataBase = (comic) =>{
    fs.writeFileSync("./src/data/comics.json",JSON.stringify(comic,null,2),{
        encoding:"utf-8"
    })
}

module.exports = saveToDataBase;