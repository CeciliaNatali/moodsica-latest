<script>
export default {
  name: "listaComponent",
  props: {},
  methods: {},
};
</script>

<template>
  <div class="lista">
    <h1>Lista de canciones</h1>
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
