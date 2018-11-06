<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-6">
          <h1>Vue</h1>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-sm-6 smallpad"><button type="button" id="run" class="btn btn-primary btn-block" @click="run">Criar 1000 linhas</button></div>
            <div class="col-sm-6 smallpad"><button type="button" id="runlots" class="btn btn-primary btn-block" @click="runLots">Criar 10000 Linhas</button></div>
            <div class="col-sm-6 smallpad"><button type="button" id="add" class="btn btn-primary btn-block" @click="add">Mais 1000 linhas</button></div>
            <div class="col-sm-6 smallpad"><button type="button" id="update" class="btn btn-primary btn-block" @click="atualiza">Atualizar cada 10ª Linha</button></div>
            <div class="col-sm-6 smallpad"><button type="button" id="clear" class="btn btn-primary btn-block" @click="limpar">Limpar</button></div>
            <div class="col-sm-6 smallpad"><button type="button" id="swaprows" class="btn btn-primary btn-block" @click="inverteLinhas">Inverter Linhas</button></div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-hover table-striped test-data" @click="handleClick">
      <tbody>
        <tr v-for="item in linhas" :class="{'danger' : item.id == selecionado}">
          <td class="col-md1">{{ item.id }}</td>
          <td class="col-md-4">
              <a data-action="select" :data-id="item.id">{{ item.label }}</a>
          </td>
          <td class="col-md-1">
              <a>
                  <span class="glyphicon glyphicon-remove" aria-hidden="true" data-action="remove" :data-id="item.id"></span>
              </a>
          </td>
          <td class="col-md-6"></td>
        </tr>
      </tbody>
    </table>
    <span class="reloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
  </div>
</template>
<script>
import { Armazena } from './store'

var armazena = new Armazena();

var tempoInicial;
var ultimaMedicao;
var inicioMedicao = function (nome) {
    tempoInicial = performance.now();
    ultimaMedicao = nome;
}
var pararMedicao = function () {
    var ultima = ultimaMedicao;
    if (ultimaMedicao) {
        window.setTimeout(function () {
            ultimaMedicao = null;
            var parada = performance.now();
            console.log(`${ultima} demorou ${parada - tempoInicial}`);
        }, 0)
    }
}
export default {
    data: () => ({
        linhas: armazena.data,
        selecionado: armazena.selecionado
    }),
    methods: {
        handleClick (e) {
            const { action, id } = e.target.dataset
            if (action && id) {
                this[action](id)
            }
        },
        add() {
            inicioMedicao("add")
            armazena.add();
            this.sync();
            pararMedicao();
        },
        remove(id) {
            inicioMedicao("remove")
            armazena.delete(id)
            this.sync();
            pararMedicao();
        },
        seleciona(id) {
            inicioMedicao("select");
            armazena.seleciona();
            this.sync();
            pararMedicao();
        },
        run() {
            inicioMedicao("run");
            armazena.run();
            this.sync();
            pararMedicao();
        },
        atualiza() {
            inicioMedicao("update");
            armazena.atualiza();
            this.sync();
            pararMedicao();
        },
        runLots() {
            inicioMedicao("roda varios");
            armazena.runLots();
            this.sync();
            pararMedicao();
        },
        limpar() {
            inicioMedicao("limpar");
            armazena.limpar();
            this.sync();
            pararMedicao();
        },
        inverteLinhas() {
            inicioMedicao("Inverter linha");
            armazena.inverteLinhas();
            this.sync();
            pararMedicao();
        },
        sync() {
            this.linhas = Object.freeze(armazena.data);
            this.selecionado = armazena.selecionado;
        }
    }
}
</script>
