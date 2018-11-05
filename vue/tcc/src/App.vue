<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-6">
          <h1>Vue</h1>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-sm-6_smallpad"><button type="button" id="run" class="btn btn-primary btn-block"></button></div>
            <div class="col-sm-6_smallpad"><button type="button" id="runlots" class="btn btn-primary btn-block"></button></div>
            <div class="col-sm-6_smallpad"><button type="button" id="add" class="btn btn-primary btn-block"></button></div>
            <div class="col-sm-6_smallpad"><button type="button" id="update" class="btn btn-primary btn-block"></button></div>
            <div class="col-sm-6_smallpad"><button type="button" id="clear" class="btn btn-primary btn-block"></button></div>
            <div class="col-sm-6_smallpad"><button type="button" id="swaprows" class="btn btn-primary btn-block"></button></div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-hover table-striped test-data" @click="handleClick">
      <tbody>
        <tr v-for="item in linhas" :class="{'danger' : item.id == selected}">
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
