let div__input = document.getElementById("div__input");
let div__button = document.getElementById("div__button");
let main__section = document.getElementById("main__section");
let section__img = document.getElementById("section__img");
let section__text = document.getElementById("section__text");
let img__section = document.getElementById("img__section");
let hero = document.getElementById("hero");
let name_hero = document.getElementById("name_hero");
let first_appearance = document.getElementById("first_appearance");
let year_publication = document.getElementById("year_publication");
let publisher = document.getElementById("publisher");
let btn_data = document.getElementById("btn_data");
let btn = document.createElement("A");

let heroes = [];


const getFetchSupers = async () => {
  let response = await fetch(
    `http://localhost:3000/apiComics/comics/superhero/${div__input.value}`
  );
  let data = await response.json();
  console.log(data)
  showCharacter(data[0]);
};

const showCharacter = (heroe) => {

  img__section.src = heroe.imgfontpage;

  hero.textContent = heroe.superhero;
  name_hero.textContent = heroe.full_name;

  let div_aparicion = document.createElement("DIV");
  div_aparicion.setAttribute("class","div_aparicion");

  let div_titulo = document.createElement("DIV");
  div_titulo.setAttribute("class","div_titulo");

  first_appearance.textContent = heroe.title;

  let div = document.createElement("DIV");
  div.setAttribute("class", "div");

  let div_anio = document.createElement("DIV");
  div_anio.setAttribute("class","div_anio");

  year_publication.textContent = heroe.year_publication;

  let div_publisher = document.createElement("DIV");
  div_publisher.setAttribute("class","div_publisher");

  publisher.textContent = heroe.publisher;

  btn.setAttribute("id", "btn");
  btn.href = "./pages/datospersonaje.html";
  btn.textContent = "Datos Personaje";

  section__img.appendChild(img__section);
  section__text.appendChild(hero);
  section__text.appendChild(name_hero);

  section__text.appendChild(div_aparicion);
  div_aparicion.appendChild(div_titulo);
  div_titulo.appendChild(first_appearance);
  div_aparicion.appendChild(div);
  div.appendChild(div_anio);
  div_anio.appendChild(year_publication);
  div.appendChild(div_publisher);
  div_publisher.appendChild(publisher);
  btn_data.appendChild(btn);
  section__text.appendChild(btn_data);
  main__section.appendChild(section__img);
  main__section.appendChild(section__text);
};

let datos;

const cargardatos = () =>{
  let comic = {
    super: hero.textContent,
    nombre: name_hero.textContent
  }

  let comics = JSON.parse(localStorage.getItem("comic"));

  if(!comics){
    datos = [];
  }

  datos.push(comic);
  localStorage.setItem("datos",JSON.stringify(comic));
}

div__button.addEventListener("click", getFetchSupers);
btn.addEventListener("click",cargardatos);
