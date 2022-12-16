const elsoGomb = document.getElementById("gomb"); // rolam
const masodikGomb = document.getElementById("gomb2"); // oneletrajz
const harmadikGomb = document.getElementById("gomb3"); // projektek
const negyedikGomb = document.getElementById("gomb4"); // elerhetosegek


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {

  if (window.innerWidth > 1290) {
    if (document.body.scrollTop > 228 || document.documentElement.scrollTop > 228) {
      elsoGomb.style.bottom =  "150px";
      elsoGomb.style.display = "block";
    } else {
      elsoGomb.style.display = "none";
    }

    if (document.body.scrollTop >= 1530 || document.documentElement.scrollTop >= 1530) {
      masodikGomb.style.bottom =  "100px";
      masodikGomb.style.display = "block";
    } else {
      masodikGomb.style.display = "none";
    }

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180 &&
      !(document.body.scrollTop > 1530 || document.documentElement.scrollTop > 1530)) {
        harmadikGomb.style.bottom =  "100px";
        harmadikGomb.style.display = "block";
    }else if (document.body.scrollTop > 162 || document.documentElement.scrollTop > 162 &&
      (document.body.scrollTop > 3270 || document.documentElement.scrollTop > 3270)) {
        harmadikGomb.style.bottom =  "100px";
        harmadikGomb.style.display = "block";
    }else {
      harmadikGomb.style.display = "none";
    }

    if (document.body.scrollTop > 128 || document.documentElement.scrollTop > 128 &&
      !(document.body.scrollTop > 3270 || document.documentElement.scrollTop > 3270)) {
        negyedikGomb.style.bottom =  "50px";
        negyedikGomb.style.display = "block";
    }else {
      masodikGomb.style.bottom =  "50px";
      negyedikGomb.style.display = "none";
    }
  } else {
    elsoGomb.style.display = "none";
    masodikGomb.style.display = "none";
    harmadikGomb.style.display = "none";
    negyedikGomb.style.display = "none";
  }
}

let foSzamlalo = -1;
let szamlalo = 0;
lapozas(true,'potty',0,'lapozoOldalak');
lapozas(true,'potty2',0,'lapozoOldalak2');
lapozas(true,'potty3',0,'lapozoOldalak3');
lapozas(true,'potty4',0,'lapozoOldalak4');
lapozas(true,'potty5',0,'lapozoOldalak5');
lapozas(true,'potty6',0,'lapozoOldalak6');
lapozas(true,'potty8',0,'lapozoOldalak8');
timeout();
function timeout() {
  setTimeout(function () {
    szamlalo = foSzamlalo+1;
    if ( szamlalo == 5) {
      szamlalo = 0;
    }
    lapozas(true,'potty',szamlalo,'lapozoOldalak');
    lapozas(true,'potty2',szamlalo,'lapozoOldalak2');
    lapozas(true,'potty3',szamlalo,'lapozoOldalak3');
    lapozas(true,'potty4',szamlalo,'lapozoOldalak4');
    lapozas(true,'potty5',szamlalo,'lapozoOldalak5');
    lapozas(true,'potty6',szamlalo,'lapozoOldalak6');
    lapozas(true,'potty8',szamlalo,'lapozoOldalak8');
    szamlalo++;
    timeout();
  }, 6000);
}

function lapozas(irany, gomb, hanyadik, kep) { // true bal - false jobb

  let i;
  let foszamlaloMasolat = foSzamlalo;
  let kepek = document.getElementsByClassName(kep);
  let pottys = document.getElementsByClassName(gomb); 

  if ( hanyadik < 10) {
    foSzamlalo = hanyadik-1;
  } else {
    foSzamlalo=foSzamlalo;
  } 

  for (i = 0; i < kepek.length; i++) {
    kepek[i].style.display = "none";  
  }
  for (i = 0; i < pottys.length; i++) {
    pottys[i].className = pottys[i].className.replace(" jelenlegi", "");
  } 

  if (!irany) {
    foSzamlalo--;
  }else {
    foSzamlalo++;
  } 

  if (foSzamlalo == kepek.length) {
    foSzamlalo = 0;
  } else if (foSzamlalo == -1) {
    foSzamlalo = 4;
  } 

  kepek[foSzamlalo].style.display = "block";  
  pottys[foSzamlalo].className += " jelenlegi";

  if (irany && foszamlaloMasolat > hanyadik) {
    lapozasAnimacio(true,kep);
  }else if (!irany && foszamlaloMasolat < hanyadik) {
    lapozasAnimacio(false,kep);
  } else {
    lapozasAnimacio(false,kep);
  }
}

function lapozasAnimacio(irany,kep) { // true bal - false jobb

  const kepe = document.getElementsByClassName(kep);

  if (irany) {
    kepe[foSzamlalo].style.animation = "slide2 5.9s linear forwards";
  } else {
    kepe[foSzamlalo].style.animation = "slide 5.9s linear forwards";
  }
}

// const el3 = document.querySelector("#Kontakt");

// el3.addEventListener("mousemove", (e) => {
//   el3.style.backgroundPositionX =  -e.offsetX + "px";
//   el3.style.backgroundPositionY =  -e.offsetY + "px";
// });

const modal = document.getElementById("nagyKepDiv");
const modalImg = document.getElementById("img01");
let melyikKep = document.getElementById("img01");


function nagyitas(kep) {

  let nagyitando = document.getElementById(kep);
  melyikKep = nagyitando;

  modal.style.paddingTop = window.innerHeight/2-275 + "px";

  modal.style.display = "block";
  modalImg.src = nagyitando.src;
  elsoGomb.style.display = "none";
  masodikGomb.style.display = "none";
  harmadikGomb.style.display = "none";
  negyedikGomb.style.display = "none";

  document.body.classList.add("neGorgess");
}

function nagyLapozas(merre) { // true bal - false jobb
  let kepek = [];
  let index = 0;

  let kep = melyikKep.src.slice(0, -7);

  if (kep.slice(-3) == "PAI") {
    for (let i=1; i < 3; i++) {
      let utvonal = melyikKep.src.slice(0, -6)+i+".webp";
      kepek.push(utvonal);
    }
  } else {
    for (let i=1; i < 6; i++) {
      let utvonal = melyikKep.src.slice(0, -6)+i+".webp";
      kepek.push(utvonal);
    }
  }
  
  if (modalImg.src == kepek[0]) {
    index = 0;
  }else if (modalImg.src == kepek[1]) {
    index = 1;
  }else if (modalImg.src == kepek[2]) {
    index = 2;
  }else if (modalImg.src == kepek[3]) {
    index = 3;
  }else if (modalImg.src == kepek[4]) {
    index = 4;
  }

  if (merre && index > 0) {
    modalImg.src = kepek[index-1];
    index--;
  } else if (!merre && index < 4 && kep.slice(-3) != "PAI") {
    modalImg.src = kepek[index+1];
    index++;
  } else if (!merre && index < 1 && kep.slice(-3) == "PAI") {
    modalImg.src = kepek[index+1];
    index++;
  }
}

const bezaras = document.getElementById("bezar");

bezaras.onclick = function() { 
  modal.style.display = "none";
  if (window.innerWidth > 1290) {
    elsoGomb.style.display = "block";
    masodikGomb.style.display = "block";
    negyedikGomb.style.display = "block";
  }

  document.body.classList.remove("neGorgess");
};