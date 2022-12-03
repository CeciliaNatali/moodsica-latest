<script>
export default {
  name: "listaComponent",
  props: {},
  data() {
    return {
      lista: "", 
    };
  },
  created() {
    this.lista = sessionStorage.getItem("lista");


  },
  methods: {
    onAtras() {
      this.$router.push({ path: "/cuenta/buscador" });
    },
  },
};
</script>



<template>
  <div class="lista">
    <h1>Lista de canciones</h1>
    <u1>{{ lista }}</u1>
  <br />
  <br />
    <button @click="onAtras">Volver al buscador</button>
  </div>
</template>



<style>
h1 {
  text-align: center;
}
ul {
  text-align: center;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
