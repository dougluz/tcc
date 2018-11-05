"use strict";

var tempoInicial;
var ultimaMedicao;
var inicioMedicao = function(nome) {
  tempoInicial = performance.now();
  ultimaMedicao = name;
};
var pararMedicao = function() {
  var ultimo = ultimaMedicao;
  if (ultimaMedicao) {
    window.setTimeout(function() {
      ultimaMedicao = null;
      var parar = performance.now();
      var duracao = 0;
      console.log(`${ultimo} demorou`(parar - tempoInicial));
    }, 0);
  }
};

function _random(max) {
  return Math.round(Math.random() * 1000) % max;
}

const template = document.createElement("tr");
template.innerHTML =
  "<td class='col-md-1'></td><td class='col-md-4'><a class='lbl'></a></td><td class='col-md-1'><a class='remove'><span class='remove glyphicon glyphicon-remove' aria-hidden='true'></span></a></td><td class='col-md-6'></td>";

class Armazena {
  constructor() {
    this.data = [];
    this.backup = null;
    this.selecionado = null;
    this.id = 1;
  }
  buildData(count = 1000) {
    var adjetivos = ["adorável", "afável", "afetivo", "agradável", "ajuizado", "alegre", "altruísta", "amável", "amigável", "amoroso", "aplicado", "assertivo", "atencioso", "atento", "autêntico", "aventureiro", "bacana", "benévolo", "bondoso", "brioso", "calmo", "carinhoso", "carismático", "caritativo", "cavalheiro", "cívico", "civilizado", "companheiro", "compreensivo", "comunicativo", "confiante", "confiável", "consciencioso", "corajoso", "cordial", "cortês", "credível", "criativo", "criterioso", "cuidadoso", "curioso", "decente", "decoroso", "dedicado", "descontraído", "desenvolto", "determinado", "digno", "diligente", "disciplinado", "disponível", "divertido", "doce", "educado", "eficiente", "eloquente", "empático", "empenhado", "empreendedor", "encantador", "engraçado", "entusiasta", "escrupuloso", "esforçado", "esmerado", "esperançoso", "esplêndido", "excelente", "extraordinário", "extrovertido", "feliz", "fiel", "fofo", "forte", "franco", "generoso", "gentil", "genuíno", "habilidoso", "honesto", "honrado", "honroso", "humanitário", "humilde", "idôneo", "imparcial", "independente", "inovador", "íntegro", "inteligente", "inventivo", "justo", "leal", "legal", "livre", "maduro", "maravilhoso", "meigo", "modesto", "natural", "nobre", "observador", "organizado", "otimista", "ousado", "pacato", "paciente", "perfeccionista", "perseverante", "persistente", "perspicaz", "ponderado", "pontual", "preocupado", "preparado", "prestativo", "prestável", "proativo", "produtivo", "prudente", "racional", "respeitador", "responsável", "sábio", "sagaz", "sensato", "sensível", "simpático", "sincero", "solícito", "solidário", "sossegado", "ternurento", "tolerante", "tranquilo", "transparente", "valente", "valoroso", "verdadeiro", "zeloso"];
    var cor = ["Abóbora", "Açafrão", "Amarelo", "Âmbar", "Ameixa", "Amêndoa", "Ametista", "Anil", "Azul", "Bege", "Bordô", "Branco", "Bronze", "Cáqui", "Caramelo", "Carmesim", "Carmim", "Castanho", "Cereja", "Chocolate", "Ciano ", "Cinza", "Cinzento", "Cobre", "Coral", "Creme", "Damasco", "Dourado", "Escarlate", "Esmeralda", "Ferrugem", "Fúcsia", "Gelo", "Grená", "Gris", "Índigo", "Jade", "Jambo", "Laranja", "Lavanda", "Lilás ", "Limão", "Loiro", "Magenta", "Malva", "Marfim", "Marrom", "Mostarda", "Negro", "Ocre", "Oliva", "Ouro", "Pêssego", "Prata", "Preto", "Púrpura", "Rosa", "Roxo", "Rubro", "Salmão", "Sépia", "Terracota", "Tijolo", "Turquesa", "Uva", "Verde", "Vermelho", "Vinho", "Violeta"];
    var nomes = ["abajur", "abre-latas", "açucareiro", "agulha", "alfinete", "algema", "alicate", "almofada", "âncora", "anel", "antena", "anzol", "apagador", "apito", "apontador", "aquecedor", "arco ", "aro", "aspirador", "azulejo", "acia", "balança", "banco", "bengala", "berço", "berimbau", "bicicleta", "bidê", "bigorna", "binóculo", "biruta", "bisturi", "boia ", "cabide", "cadeado", "cadeira", "caderno", "cajado", "cálice", "caneta", "canivete", "capa", "capacete", "castiçal", "cata-vento", "celular", "chicote", "chinelo", "chupeta", "clipe", "colchão", "colher", "copo ", "dado", "dardo", "dedal", "dentadura", "desentupidor", "desfibrilador", "desodorante", "despertador", "detergente", "diadema", "diamante", "diapasão", "diário", "dicionário", "dinamite", "espada", "espanador", "espelho", "esponja", "espremedor", "esquadro", "estátua ", "esteira", "fogão", "foguete", "foice", "folha", "frasco ", "freezer", "gargantilha", "garrafa", "gaveta", "geladeira", "gorro", "gramofone", "grampeador", "grampo", "granada", "gravata", "grelha", "grinalda", "guarda-chuva", "guarda-sol", "incenso", "ingresso", "inseticida", "interfone", "interruptor", "ioiô", "isca", "karaokê", "kart", "ketchup", "kilt", "kit", "L", "lâmina", "lâmpada", "lança", "lancheira", "lantejoula", "lanterna", "lápis", "lapiseira", "lata", "lenço", "lençol", "lente", "leque", "liquidificador", "livro", "lixa ", "luminária", "luneta", "lustre", "luva", "M", "maçaneta", "maçarico", "machado", "maiô", "mala", "mamadeira", "manequim", "mangueira", "manivela", "máquina", "marreta", "martelo", "máscara", "medalha", "megafone", "meia", "microfone", "microscópio ", "mochila", "mola", "N", "nadadeira ", "narguilé", "navalha", "nave", "navio", "nebulizador", "notebook", "novelo", "O", "oboé", "óculos ", "odre", "oftalmoscópio", "olho mágico", "ombreira", "orelhão ", "órgão", "ouro ", "OVNI", "ovo", "oxigenador", "P", "pá", "paliteiro ", "pandeiro", "panela", "pano", "papel", "parafuso", "paraquedas", "piano", "picareta", "pinça", "pincel", "pingente", "pistola", "placa", "pote", "prancha", "prateleira", "prato", "pulseira", "Q", "quadriciclo", "quadro", "quadro negro", "quebra-cabeça", "quebra-nozes", "queijeira", "quepe ", "quimono", "R", "rádio ", "ralador", "ralo", "raquete", "ratoeira", "reco-reco", "rede", "régua", "relógio", "remo", "retrovisor", "revista", "revólver", "rímel", "roda", "rodo", "rolamento", "roleta", "rolha", "rolo ", "S", "sabonete", "saca-rolhas", "sacola", "saleiro", "sandália", "sanfona", "sapato", "saxofone", "scanner", "secador", "selim", "seringa", "serpentina", "serrote", "sino", "sirene", "skate", "sofá", "sombrinha", "spray", "T", "tábua", "tabuleiro", "taça", "tamanco", "tambor ", "tampa", "teclado", "telefone", "telescópio", "televisão", "telha", "tênis", "termômetro", "tesoura", "tigela", "tijolo", "touca", "trampolim", "travesseiro", "troféu", "U", "ukulele", "ultraleve", "umbral ", "umidificador", "unha postiça", "uniforme", "urinol", "urna", "urso de pelúcia", "V", "válvula", "vaporizador", "vara ", "varal", "vareta", "varinha", "vaso", "vassoura", "vela", "velocímetro", "ventilador", "vídeo", "vidro ", "viola", "violão", "violino", "violoncelo", "viseira", "vitrola", "volante", "W", "wafer", "walkie-talkie", "walkman", "webcam ", "X", "xadrez", "xale", "xampu", "xarope", "xequerê", "xícara ", "xilofone", "xilogravura", "Y", "yacht ", "yagi", "yen", "Z", "zabumba", "zambê", "zarabatana", "zinco ", "zíper"];
    var data = [];
    for (var i = 0; i < count; i++) 
        data.push({id: this.id++, label: adjetivos[_random(adjetivos.length)] + " " + cor[_random(cor.length)] + " " + nomes[_random(nomes.length)] });
    return data;
  }
  attData(mod = 10) {
    for (let i = 0; i < this.data.length; i + 10) {
        this.data[i].label += " atualizado";
    }
  }
  deleta(id) {
    const idx = this.data.findIndex(d => d.id==id);
    this.data = this.data.filter((e,i)=>i!=idx);
    return this;
  }
  run() {
    this.data = this.buildData();
    this.selecionado = null
  }
  add() {
      this.data = this.data.concat(this.buildData(1000));
      this.selecionado = null;
  }
  atualiza() {
      this.attData();
      this.selecionado = null;
  }
  seleciona(id) {
      this.selecionado = id;
  }
  escondeTodos() {
      this.backup = this.data;
      this.data = [];
      this.selecionado = null
  }
  mostraTodos() {
      this.data = this.backup;
      this.backup = null;
      this.selecionado = null
  }
  runLots() {
      this.data = this.buildData(10000);
      this.selecionado = null;
  }
  inverteLinhas() {
      if (this.data.length > 998) {
          var a = this.data[1];
          this.data[1] = this.data[998];
          this.data[998] = a;
      }
     }
  }

  var getIdPai = function (elem) {
      while (elem) {
          if (elem.tagName==="TR") {
              return elem.data_id;
          }
          elem = elem.parentNode;
      }
      return undefined;
  }

  class Main {
      constructor(props) {
          this.armazena = new Armazena();
          this.seleciona = this.seleciona.bind(this);
          this.deleta = this.deleta.bind(this);
          this.add = this.add.bind(this);
          this.run = this.run.bind(this);
          this.atualiza = this.atualiza.bind(this);
          this.inicio = 0;
          this.linhas = [];
          this.data = [];
          this.linhaSelecionada = undefined;

          document.getElementById("main").addEventListener('click', e => {
              if (e.target.matches('#add')) {
                e.preventDefault();
                this.add();
              }
              else if (e.target.matches('#run')) {
                  e.preventDefault();
                  this.run()
              }
              else if (e.target.matches('#update')) {
                  e.preventDefault();
                  this.atualiza();
              }
              else if (e.target.matches('#hideall')) {
                  e.preventDefault();
                  this.mostraTodos();
              }
              else if (e.target.matches('#runlots')) {
                  e.preventDefault();
                  this.runLots();
              }
              else if (e.target.matches('#clear')) {
                  e.preventDefault();
                  this.limpa();
              }
              else if (e.target.matches('#swaprows')) {
                  e.preventDefault();
                  this.inverteLinhas();
              }
              else if (e.target.matches('.remove')) {
                  e.preventDefault();
                  let id = getIdPai(e.target);
                  let idx = this.FindIdx(id);
                  this.delete(idx);
              }
              else if (e.target.matches('')) {
                  e.preventDefault();
                  let id = getIdPai(e.target);
                  let idx = this.FindIdx(id);
                  this.seleciona(idx);
              }
          });
          this.tbody = document.getAnimations("tbody"); 
      }
  }


