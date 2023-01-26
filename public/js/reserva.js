/* Demanda Reservas */

/************************
 * ID dos Elementos
 *************************/

// Geral
let quarto = null;

// Modal
const modal__overlay = document.getElementById("modal__overlay");

// Modal Serviços
const botoes__checkbox = document.querySelectorAll("input[type=checkbox]");
const modal__servicos = document.getElementById("modal__servicos");
const btn__fechar__servicos = document.getElementById("btn__fechar__servicos");
const btn__sair__servicos = document.getElementById("btn__sair__servico");

// Modal Detalhes
const modal__detalhes = document.getElementById("modal__detalhes");
const btn__sair__detalhes = document.getElementById("btn__sair__detalhes");
const btn__fechar__detalhes = document.getElementById("btn__fechar__detalhes");

// Resumo da Reserva
const btn__add__servicos = document.getElementById(
  "botao__adicionar__servicos"
);
const btn__ver__reserva = document.getElementById("botao__detalhes__reserva");
const btn__confirmar__reserva = document.getElementById(
  "botao__confirmar__reserva"
);

// Formulário
const form__check_in = document.getElementById("check-in");
const form__check_out = document.getElementById("check-out");
const form__adultos = document.getElementById("adultos");
const botoes__radio = document.querySelectorAll("input[type=radio]");

// Resumo da Reserva
const vAcomodacao = document.getElementById("vAcomodacao");
const vPessoas = document.getElementById("vPessoas");
const vCheckin = document.getElementById("vCheckin");
const vCheckout = document.getElementById("vCheckout");

// Detalhes
const dImagem = document.getElementById("dImagem");
const dQuarto = document.getElementById("dQuarto");
const dPreco = document.getElementById("dPreco");
const dCheckin = document.getElementById("dCheckin");
const dCheckout = document.getElementById("dCheckout");
const dPessoas = document.getElementById("dPessoas");
const dServicos = document.getElementById("dServicos");
const dTotal = document.getElementById("dTotal");

/************************
 * Acomodações
 *************************/

const dados_quartos = [
  {
    id: 1,
    nome: "Quarto Executivo",
    texto:
      "Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, escrivaninha e banheiro privativo.",
    imagem: "reserva1.png",
    preco: 500,
  },
  {
    id: 2,
    nome: "Quarto Deluxe",
    texto:
      "Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar e banheiro privativo.",
    imagem: "reserva2.png",
    preco: 500,
  },
  {
    id: 3,
    nome: "Quarto Família",
    texto:
      "Um quarto espaçoso com duas camas de casal e duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, área de estar separada e banheiro privativo.",
    imagem: "reserva3.png",
    preco: 500,
  },
];

/************************
 * Funções
 *************************/

function abrirModalServico() {
  modal__overlay.classList.remove("hidden");
  modal__servicos.classList.remove("hidden");
}

function abrirModalDetalhes() {
  modal__overlay.classList.remove("hidden");
  modal__detalhes.classList.remove("hidden");
}

function fecharModal() {
  modal__overlay.classList.add("hidden");
  modal__detalhes.classList.add("hidden");
  modal__servicos.classList.add("hidden");
}

function obterServicosSelecionados() {
  const servicos_adicionados = [];

  botoes__checkbox.forEach((item) => {
    if (item.checked) {
      servicos_adicionados.push({ nome: item.name, preco: item.value });
    }
  });

  return servicos_adicionados;
}

function formatarDataBR(data) {
  const inData = data
    ? new Date(data).toISOString()
    : new Date(Date.now()).toISOString();
  const sData = inData.slice(0, 10);

  const dia = sData.split("-")[2];
  const mes = sData.split("-")[1];
  const ano = sData.split("-")[0];

  return `${dia}-${mes}-${ano}`;
}

function formatarDataUS(data) {
  const inData = data
    ? new Date(data).toISOString()
    : new Date(Date.now()).toISOString();
  const sData = inData.slice(0, 10);

  const dia = sData.split("-")[2];
  const mes = sData.split("-")[1];
  const ano = sData.split("-")[0];

  return `${ano}-${mes}-${dia}`;
}

function selecionarQuarto() {
  let anterior = 1;
  botoes__radio.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (item.checked) {
        document
          .querySelector(
            `.todos-os-quartos-reserva .quarto-box:nth-of-type(${
              i + 1
            }) .quarto-reserva`
          )
          .classList.add(`quarto-selecionado`);
        item.setAttribute("checked", "checked");
        quarto = i;
      }
      document
        .querySelector(
          `.todos-os-quartos-reserva .quarto-box:nth-of-type(${
            anterior + 1
          }) .quarto-reserva`
        )
        .classList.remove(`quarto-selecionado`);
      anterior = i;
      item.removeAttribute("checked", "checked");
      return quarto;
    });
  });
}

function salvarLocalStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function recuperarLocalStorage(chave) {
  const dados = localStorage.getItem(chave)
    ? JSON.parse(localStorage.getItem(chave))
    : null;
  return dados;
}

function capturarDadosDaReserva() {
  const checkin = form__check_in.value;
  const checkout = form__check_out.value;
  const nPessoas = form__adultos.value;
  const acomodacao = quarto;
  const servicos = obterServicosSelecionados();

  if (!checkin) {
    alert(`Selecione a data do check-in.`);
    form__check_in.focus();
    return;
  }

  if (!checkout) {
    alert(`Selecione a data do check-out.`);
    form__check_out.focus();
    return;
  }

  if (!nPessoas) {
    alert(`Selecione o número de hóspedes.`);
    form__adultos.focus();
    return;
  }

  if (acomodacao === null) {
    alert(`Selecione um quarto.`);
    return;
  }

  if (!servicos.length) {
    const decisao = confirm("Deseja adicionar algum serviço extra?");

    if (decisao) {
      abrirModalServico();
      return;
    }
  }

  const vAcomodacao = dados_quartos.find((item) => item.id === acomodacao + 1);

  const reserva = {
    check_in: checkin,
    check_out: checkout,
    adultos: nPessoas,
    quarto: vAcomodacao.nome,
    descricao: vAcomodacao.texto,
    imagem: vAcomodacao.imagem,
    preco: vAcomodacao.preco,
    idQuarto: vAcomodacao.id,
    servicos: [...obterServicosSelecionados()],
  };

  salvarLocalStorage("reserva", reserva);
  alert("Reserva realizada com sucesso!");
  carregarDadosDaReserva("reserva");
  return reserva;
}

function carregarDadosFormulario(obj) {
  form__check_in.value = formatarDataUS(obj.check_in);
  form__check_out.value = formatarDataUS(obj.check_out);
  form__adultos.value = obj.adultos;
  botoes__radio[obj.idQuarto - 1].checked = true;
  document
    .querySelector(
      `.todos-os-quartos-reserva .quarto-box:nth-of-type(${obj.idQuarto}) .quarto-reserva`
    )
    .classList.add(`quarto-selecionado`);
}

function carregarDadosResumo(obj) {
  vAcomodacao.innerText = obj.quarto;
  vPessoas.innerText = obj.adultos;
  vCheckin.innerText = formatarDataBR(obj.check_in);
  vCheckout.innerText = formatarDataBR(obj.check_out);
}

function carregarDadosServicos(obj) {
  obj.servicos.forEach((item, i) => {
    if (item.nome === botoes__checkbox[i].name) {
      botoes__checkbox[i].checked = true;
    }
  });
}

function ajustarNomeServico(nome) {
  const removerTraco = nome.replace("_", " ");
  const primeiraLetraMaiuscula =
    removerTraco.charAt(0).toUpperCase() + removerTraco.slice(1);
  return primeiraLetraMaiuscula;
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

function carregarDadosDetalhes(obj) {
  dImagem.style.cssText = `background: url("./../../../public/images/${obj.imagem}"); background-size:cover; background-position:center;background-repeat:no-repeat`;
  dQuarto.innerText = obj.quarto;
  dPreco.innerText = formatarMoeda(obj.preco);
  dCheckin.innerText = formatarDataBR(obj.check_in);
  dCheckout.innerText = formatarDataBR(obj.check_out);
  dPessoas.innerText = obj.adultos;

  let servicoTotal = 0;
  let listaServicos = "";
  obj.servicos.forEach((item) => {
    servicoTotal += Number(item.preco);
    listaServicos += `\n ✅ ${ajustarNomeServico(item.nome)}: ${formatarMoeda(
      Number(item.preco)
    )}`;
  });
  dServicos.innerText = listaServicos;
  dTotal.innerText = formatarMoeda(servicoTotal + obj.preco * obj.adultos);
}

function carregarDadosDaReserva(chave) {
  const dados_reserva = recuperarLocalStorage(chave);

  if (dados_reserva !== null) {
    btn__confirmar__reserva.classList.add("hidden");
    btn__ver__reserva.classList.remove("hidden");
    // Formulário
    carregarDadosFormulario(dados_reserva);
    // Resumo da Reserva
    carregarDadosResumo(dados_reserva);
    // Serviços
    carregarDadosServicos(dados_reserva);
    // Detalhes
    carregarDadosDetalhes(dados_reserva);
  } else {
    btn__confirmar__reserva.classList.remove("hidden");
    btn__ver__reserva.classList.add("hidden");
  }
}

/************************
 * Atribuir Eventos
 *************************/
selecionarQuarto();
carregarDadosDaReserva("reserva");

btn__add__servicos.addEventListener("click", abrirModalServico);
btn__ver__reserva.addEventListener("click", abrirModalDetalhes);

[
  btn__fechar__servicos,
  btn__fechar__detalhes,
  btn__sair__detalhes,
  btn__sair__servicos,
].forEach((item) => {
  item.addEventListener("click", fecharModal);
});

btn__confirmar__reserva.addEventListener("click", capturarDadosDaReserva);

console.log("Olá");
