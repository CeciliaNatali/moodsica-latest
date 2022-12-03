<script>
export default {
  name: "AcercaDe",
  props: {},
  methods: {},
};
</script>

<template>
  <div class="acercaDe">
    <h1>¡Bienvenido a Moodsica!</h1>
    <ul>
      Moodsica es una aplicación que te permitirá filtrar canciones según el
      mood que tú quieras.
      <br /><br />
      Si te sientes feliz 😁, enojado 😡, enamorado 😍, relax😎, etc. y quieres
      escuchar canciones que vayan de la mano de tu mood del momento.
      <br />
      ¡Este es el lugar perfecto para tí!
    </ul>
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
