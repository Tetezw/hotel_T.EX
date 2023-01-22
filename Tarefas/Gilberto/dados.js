let anterior,
  checkIn,
  checkOut,
  dataCheckIn,
  dataCheckOut,
  adultos,
  quarto,
  divQuarto,
  h3,
  checkBoxes,
  label,
  serviçosNovos;

/* Resumo */
anterior = 1;
document.querySelectorAll("input[type=radio]").forEach((n, i) => {
  n.onclick = function () {
    /*Alteração do background */
    if (n.checked) {
      divQuarto = document.querySelector(
        `.todos-os-quartos-reserva .quarto-box:nth-of-type(${
          i + 1
        }) .quarto-reserva`
      );
      document
        .querySelector(
          `.todos-os-quartos-reserva .quarto-box:nth-of-type(${
            i + 1
          }) .quarto-reserva`
        )
        .classList.add("background-blue");
      document
        .querySelector(
          `.todos-os-quartos-reserva .quarto-box:nth-of-type(${
            anterior + 1
          }) .quarto-reserva`
        )
        .classList.remove("background-blue");
      anterior = i;
    }
    /*Inserção do quarto no Resumo*/
    quarto = divQuarto.querySelector("h3").textContent;
    document.getElementById("rQuarto").innerText = quarto;
  };
});

/* Check in, Check out e numero de adultos */
checkIn = document.getElementById("check-in");
checkOut = document.getElementById("check-out");
adultos = document.getElementById("adultos");

/* Check in */
function puxarCheckIn() {
  data = new Date(checkIn.value);
  dataCheckIn = {
    dia: data.getUTCDate().toString().padStart(2, "0"),
    mes: (data.getUTCMonth() + 1).toString().padStart(2, "0"),
    ano: data.getUTCFullYear(),
  };
  document.getElementById(
    "rCheckin"
  ).innerText = `${dataCheckIn.dia}/${dataCheckIn.mes}/${dataCheckIn.ano}`;
  console.log(dataCheckIn);
}

/*Check out*/
function puxarCheckOut() {
  data = new Date(checkOut.value);
  dataCheckOut = {
    dia: data.getUTCDate().toString().padStart(2, "0"),
    mes: (data.getUTCMonth() + 1).toString().padStart(2, "0"),
    ano: data.getUTCFullYear(),
  };
  console.log(dataCheckOut);
  document.getElementById(
    "rCheckout"
  ).innerText = `${dataCheckOut.dia}/${dataCheckOut.mes}/${dataCheckOut.ano}`;
}

/*Numero de adultos*/
function puxaAdultos() {
  document.getElementById("rPessoas").innerText = adultos.value
}

/*Serviços*/

checkBoxes = document.querySelectorAll("input[type=checkbox]");
adicionarServiços = document.querySelector(".servicos-modal-footer");
serviços = [];

adicionarServiços.addEventListener("click", function () {
  checkBoxes.forEach((b) => {
    if (b.checked) {      
      label = document.querySelector(`label[for=${b.id}]`);
      serviços.push({
      serviço : label.textContent,
      valor : label.nextElementSibling.textContent
      })      
    }
  });
  console.log(serviços);
  serviços.forEach(item =>{
    console.log(item.serviço, item.valor)
})
});


checkIn.onchange = puxarCheckIn;
checkOut.onchange = puxarCheckOut;
adultos.onchange = puxaAdultos;
