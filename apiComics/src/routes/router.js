const express = require("express");
const router = express.Router();
const comicsdata = require("../data/comics.json");

//Todos los comics 
router.get("/comics", (req,res) => res.send(comicsdata));

//Comics por nombre de personaje
router.get("/comics/superhero/:superhero", (req, res) =>{
    const { superhero } = req.params;
    const comic = comicsdata.comics.filter((comic) =>
        comic.superhero.includes(superhero));
    res.send(comic);
});

//Comics por nombre real del personaje
router.get("/comics/name/:name", (req, res) =>{
    const { name } = req.params;
    const comic = comicsdata.comics.filter((comic) =>
        comic["full-name"].includes(name));
    res.send(comic);
});

//Comics por editorial
router.get("/comics/publisher/:publisher", (req,res) =>{
    const { publisher } = req.params;
    let comicsresult = [];
    comicsresult = comicsdata.comics.filter((comic) =>{
        return comic.publisher == publisher;
    })

    res.send(comicsresult);
})

module.exports = router;