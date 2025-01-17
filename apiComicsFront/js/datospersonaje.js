let container = document.getElementById("container");
let main = document.getElementById("main");
let main__section = document.getElementById("main__section");
let main__div = document.getElementById("main__div");
let section__text = document.getElementById("section__text");
let section__img = document.getElementById("section__img");
let btn_data = document.getElementById("btn_data");
let btn_inicio = document.createElement("A");

const datas = JSON.parse(localStorage.getItem("datos"));

const getFetchSuper = () => {
  fetch(
    `https://www.superheroapi.com/api.php/3804377639848629/search/${datas.super}`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response.results);
      descargardatos(response.results);
    });
};

const descargardatos = (results) => {
  console.log(datas);

  let fragment = document.createDocumentFragment();

  results.map((result) => {
    if (result.biography["full-name"] == datas.nombre && result.name == datas.super) {
      let img = document.createElement("IMG");
      img.setAttribute("class", "img__section");
      img.src = result.image.url;

      let title = document.createElement("H1");
      title.setAttribute("class", "hero");
      title.textContent = result.name;

      let name = document.createElement("H2");
      name.setAttribute("class", "name_hero");
      name.textContent = result.biography["full-name"];

      // DATOS DE APARIENCIA
      let title_aparicencia = document.createElement("H2");
      title_aparicencia.setAttribute("class", "title__section");
      title_aparicencia.textContent = "Apariencia";

      let div__apariencia = document.createElement("DIV");
      div__apariencia.setAttribute("class", "div__apariencia");

      let div__text = document.createElement("DIV");
      div__text.setAttribute("class", "div__text");

      let p_genero = document.createElement("P");
      p_genero.setAttribute("class", "p__registro");
      p_genero.textContent = "Género: ";

      let span__genero = document.createElement("SPAN");
      span__genero.setAttribute("class", "span__registro");
      span__genero.textContent = result.appearance.gender;

      let p_raza = document.createElement("P");
      p_raza.setAttribute("class", "p__registro");
      p_raza.textContent = "Raza: ";

      let span__raza = document.createElement("SPAN");
      span__raza.setAttribute("class", "span__registro");
      span__raza.textContent = result.appearance.race;

      let p_color = document.createElement("P");
      p_color.setAttribute("class", "p__registro");
      p_color.textContent = "Color de Ojos: ";

      let span__color = document.createElement("SPAN");
      span__color.setAttribute("class", "span__registro");
      span__color.textContent = result.appearance["eye-color"];

      let div__text1 = document.createElement("DIV");
      div__text1.setAttribute("class", "div__text1");

      let p_pelo = document.createElement("P");
      p_pelo.setAttribute("class", "p__registro");
      p_pelo.textContent = "Color de Pelo: ";

      let span__pelo = document.createElement("SPAN");
      span__pelo.setAttribute("class", "span__registro");
      span__pelo.textContent = result.appearance["hair-color"];

      let p_altura = document.createElement("P");
      p_altura.setAttribute("class", "p__registro");
      p_altura.textContent = "Altura: ";

      let span__altura = document.createElement("SPAN");
      span__altura.setAttribute("class", "span__registro");
      span__altura.textContent = result.appearance.height[1];

      let p_peso = document.createElement("P");
      p_peso.setAttribute("class", "p__registro");
      p_peso.textContent = "Peso: ";

      let span__peso = document.createElement("SPAN");
      span__peso.setAttribute("class", "span__registro");
      span__peso.textContent = result.appearance.weight[1];

      // DATOS DE BIOGRAFIA
      let title_biografia = document.createElement("H2");
      title_biografia.setAttribute("class", "title__section");
      title_biografia.textContent = "Biografia";

      let div__biografia = document.createElement("DIV");
      div__biografia.setAttribute("class", "div__biografia");

      let p_bando = document.createElement("P");
      p_bando.setAttribute("class", "p__registro");
      p_bando.textContent = "Bando: ";

      let span__bando = document.createElement("SPAN");
      span__bando.setAttribute("class", "span__registro");
      span__bando.textContent = result.biography.alignment;

      let p_lugar_nacimiento = document.createElement("P");
      p_lugar_nacimiento.setAttribute("class", "p__registro");
      p_lugar_nacimiento.textContent = "Lugar de Nacimiento: ";

      let span__lugar_nacimiento = document.createElement("SPAN");

      if (result.biography["place-of-birth"] == "-") {
        span__lugar_nacimiento.setAttribute("class", "span__registro");
        span__lugar_nacimiento.textContent = "Desconocido";
      } else {
        span__lugar_nacimiento.setAttribute("class", "span__registro");
        span__lugar_nacimiento.textContent = result.biography["place-of-birth"];
      }

      // ESTADISTICAS DEL PERSONAJE
      let title_estadisticas = document.createElement("H2");
      title_estadisticas.setAttribute("class", "title__section");
      title_estadisticas.textContent = "Estadisticas";

      let div__estadisticas = document.createElement("DIV");
      div__estadisticas.setAttribute("class", "div__estadisticas");

      let div__text2 = document.createElement("DIV");
      div__text2.setAttribute("class", "div__text2");

      let p_combate = document.createElement("P");
      p_combate.setAttribute("class", "p__registro");
      p_combate.textContent = "Combate: ";

      let span__combate = document.createElement("SPAN");
      span__combate.setAttribute("class", "span__registro");
      span__combate.textContent = result.powerstats.combat;

      let p_durabilidad = document.createElement("P");
      p_durabilidad.setAttribute("class", "p__registro");
      p_durabilidad.textContent = "Durabilidad: ";

      let span__durabilidad = document.createElement("SPAN");
      span__durabilidad.setAttribute("class", "span__registro");
      span__durabilidad.textContent = result.powerstats.durability;

      let p_inteligencia = document.createElement("P");
      p_inteligencia.setAttribute("class", "p__registro");
      p_inteligencia.textContent = "Inteligencia: ";

      let span__inteligencia = document.createElement("SPAN");
      span__inteligencia.setAttribute("class", "span__registro");
      span__inteligencia.textContent = result.powerstats.intelligence;

      let div__text3 = document.createElement("DIV");
      div__text3.setAttribute("class", "div__text3");

      let p_fuerza = document.createElement("P");
      p_fuerza.setAttribute("class", "p__registro");
      p_fuerza.textContent = "Fuerza: ";

      let span__fuerza = document.createElement("SPAN");
      span__fuerza.setAttribute("class", "span__registro");
      span__fuerza.textContent = result.powerstats.power;

      let p_velocidad = document.createElement("P");
      p_velocidad.setAttribute("class", "p__registro");
      p_velocidad.textContent = "Velocidad: ";

      let span__velocidad = document.createElement("SPAN");
      span__velocidad.setAttribute("class", "span__registro");
      span__velocidad.textContent = result.powerstats.speed;

      let p_fortaleza = document.createElement("P");
      p_fortaleza.setAttribute("class", "p__registro");
      p_fortaleza.textContent = "Fortaleza: ";

      let span__fortaleza = document.createElement("SPAN");
      span__fortaleza.setAttribute("class", "span__registro");
      span__fortaleza.textContent = result.powerstats.strength;

      // TRABAJO DEL PERSONAJE
      let title_trabajo = document.createElement("H2");
      title_trabajo.setAttribute("class", "title__section");
      title_trabajo.textContent = "Ocupacion";

      let div__trabajo = document.createElement("DIV");
      div__trabajo.setAttribute("class", "div__trabajo");

      let p_ocupacion = document.createElement("P");
      p_ocupacion.setAttribute("class", "p__registro");
      p_ocupacion.textContent = "Trabajo: ";

      let span__ocupacion = document.createElement("SPAN");
      if (result.work.occupation == "-") {
        span__ocupacion.setAttribute("class", "span__registro");
        span__ocupacion.textContent = "Desconocido";
      } else {
        span__ocupacion.setAttribute("class", "span__registro");
        span__ocupacion.textContent = result.work.occupation;
      }
      
      let p_base = document.createElement("P");
      p_base.setAttribute("class", "p__registro");
      p_base.textContent = "Base: ";

      let span__base = document.createElement("SPAN");
      if (result.work.base == "-") {
        span__base.setAttribute("class", "span__registro");
        span__base.textContent = "Desconocido";
      } else {
        span__base.setAttribute("class", "span__registro");
        span__base.textContent = result.work.base;
      }
      

      // BOTON DE VOLVER
      btn_inicio.setAttribute("id", "btn");
      btn_inicio.href = "../index.html";
      btn_inicio.textContent = "Volver Inicio";

      // DATOS GENERALES
      main__section.appendChild(title);
      main__section.appendChild(name);
      section__img.appendChild(img);
      
      // DATOS DE LA APARIENCIA DEL PERSONAJE
      section__text.appendChild(title_aparicencia);
      section__text.appendChild(div__apariencia);
      div__apariencia.appendChild(div__text);
      div__text.appendChild(p_genero);
      p_genero.appendChild(span__genero);
      div__text.appendChild(p_raza);
      p_raza.appendChild(span__raza);
      div__text.appendChild(p_color);
      p_color.appendChild(span__color);

      div__apariencia.appendChild(div__text1);
      div__text1.appendChild(p_pelo);
      p_pelo.appendChild(span__pelo);
      div__text1.appendChild(p_altura);
      p_altura.appendChild(span__altura);
      div__text1.appendChild(p_peso);
      p_peso.appendChild(span__peso);

      // DATOS DE BIOGRAFIA
      section__text.appendChild(title_biografia);
      section__text.appendChild(div__biografia);
      div__biografia.appendChild(p_bando);
      p_bando.appendChild(span__bando);
      div__biografia.appendChild(p_lugar_nacimiento);
      p_lugar_nacimiento.appendChild(span__lugar_nacimiento);

      // DATOS DE ESTADISTICAS
      section__text.appendChild(title_estadisticas);
      section__text.appendChild(div__estadisticas);
      div__estadisticas.appendChild(div__text2);
      div__text2.appendChild(p_combate);
      p_combate.appendChild(span__combate);
      div__text2.appendChild(p_durabilidad);
      p_durabilidad.appendChild(span__durabilidad);
      div__text2.appendChild(p_inteligencia);
      p_inteligencia.appendChild(span__inteligencia);

      div__estadisticas.appendChild(div__text3);
      div__text3.appendChild(p_fuerza);
      p_fuerza.appendChild(span__fuerza);
      div__text3.appendChild(p_velocidad);
      p_velocidad.appendChild(span__velocidad);
      div__text3.appendChild(p_fortaleza);
      p_fortaleza.appendChild(span__fortaleza);

      // DATOS DE TRABAJO
      section__text.appendChild(title_trabajo);
      section__text.appendChild(div__trabajo);
      div__trabajo.appendChild(p_ocupacion);
      p_ocupacion.appendChild(span__ocupacion);
      div__trabajo.appendChild(p_base);
      p_base.appendChild(span__base);

      // INTRODUCCION DE LOS DATOS EN LOS SECTIONS
      btn_data.appendChild(btn_inicio);
      main__div.appendChild(section__img);
      main__div.appendChild(section__text);
      container.appendChild(btn_data);
      main__section.appendChild(main__div);
      fragment.appendChild(main__section)
    }
  });

  main.appendChild(fragment);
};

const borrarLocalStorage = () => {
  localStorage.clear();
};

document.addEventListener("DOMContentLoaded", getFetchSuper);
btn_inicio.addEventListener("click", borrarLocalStorage);
