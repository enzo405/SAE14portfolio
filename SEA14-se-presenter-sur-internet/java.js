function spoiler(){
  let popupdiv = document.createElement("div")
  popupdiv.innerHTML = "<div class=\"modal\">\n" +
      "  <div class=\"modal-content\">\n" +
      "    <span class=\"close-btn\">&times;</span>\n" +
      "    <img src=video/spoiler_gif.gif </img>\n" +
      "  </div>\n" +
      "</div>"
  popupdiv.classList.add("popup");
  popupdiv.id="popup";
  document.body.prepend(popupdiv);
  let element = document.getElementById("popup");
  element.addEventListener("click", onclick);
}

function onclick(){
  let element = document.getElementById("popup");
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

function txtitalique(){
  let popupdiv = document.createElement("div")
  popupdiv.innerHTML = "<div class=\"modal\">\n" +
      "  <div class=\"modal-content\">\n" +
      "    <span class=\"close-btn\">&times;</span>\n" +
      "    <img src=video/txt-italique.gif </img>\n" +
      "  </div>\n" +
      "</div>"
  popupdiv.classList.add("popup");
  popupdiv.id="popup";
  document.body.prepend(popupdiv);
  let element = document.getElementById("popup");
  element.addEventListener("click", onclick);
}

function onclick(){
  let element = document.getElementById("popup");
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

function txtgras(){
  let popupdiv = document.createElement("div")
  popupdiv.innerHTML = "<div class=\"modal\">\n" +
      "  <div class=\"modal-content\">\n" +
      "    <span class=\"close-btn\">&times;</span>\n" +
      "    <img src=video/txt-gras.gif </img>\n" +
      "  </div>\n" +
      "</div>"
  popupdiv.classList.add("popup");
  popupdiv.id="popup";
  document.body.prepend(popupdiv);
  let element = document.getElementById("popup");
  element.addEventListener("click", onclick);
}

function onclick(){
  let element = document.getElementById("popup");
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

function txtig(){
  let popupdiv = document.createElement("div")
  popupdiv.innerHTML = "<div class=\"modal\">\n" +
      "  <div class=\"modal-content\">\n" +
      "    <span class=\"close-btn\">&times;</span>\n" +
      "    <img src=video/txt-italique-gras.gif </img>\n" +
      "  </div>\n" +
      "</div>"
  popupdiv.classList.add("popup");
  popupdiv.id="popup";
  document.body.prepend(popupdiv);
  let element = document.getElementById("popup");
  element.addEventListener("click", onclick);
}

function onclick(){
  let element = document.getElementById("popup");
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

function blocktext(){
  let popupdiv = document.createElement("div")
  popupdiv.innerHTML = "<div class=\"modal\">\n" +
      "  <div class=\"modal-content\">\n" +
      "    <span class=\"close-btn\">&times;</span>\n" +
      "    <img src=video/blocktext.gif </img>\n" +
      "  </div>\n" +
      "</div>"
  popupdiv.classList.add("popup");
  popupdiv.id="popup";
  document.body.prepend(popupdiv);
  let element = document.getElementById("popup");
  element.addEventListener("click", onclick);
}

function onclick(){
  let element = document.getElementById("popup");
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}