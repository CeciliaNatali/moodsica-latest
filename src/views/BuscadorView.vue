<script>
export default {
  name: "BuscadorComponent",
  props: {},
  data() {
    return {
      nombreUsuario: "",
      success: false,
      tag: "",
      yearmin: "",
      yearmax: "",
      lista: "",
    };
  },
  created() {
    this.nombreUsuario = sessionStorage.getItem("usuario");
  },
  methods: {
    onSalir() {
      this.$emit("salida-usuario");
      sessionStorage.removeItem("usuario");
      this.$router.push({ path: "/ingreso" });
    },
    onEliminarCuenta() {
      this.$router.push({ path: "/cuenta/eliminar" });
    },
    onActualizarContra() {
      this.$router.push({ path: "/cuenta/actualizar" });
    },
    onTagInput(e) {
      this.tag = e.target.value;
    },
    onYearminInput(e) {
      this.yearmin = e.target.value;
    },
    onYearmaxInput(e) {
      this.yearmax = e.target.value;
    },
    onBuscar() {
      const url = "http://localhost:5000/cuenta/buscador";

      const body = {
        tag: this.tag,
        yearmin: this.yearmin,
        yearmax: this.yearmax,
        success: false,
      };

      console.log(this.tag)
      console.log(this.yearmax)
      console.log(this.yearmin)

      fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
          this.success = data.success;
          this.lista = JSON.stringify(data);
          console.log(this.lista);
          if (this.success) {
            sessionStorage.setItem("lista", this.lista);
            sessionStorage.setItem("jLista", data);
            this.$router.push({ path: "/cuenta/lista" });
          }
        });
    },
  },
};
</script>

<template>
  <div class="buscador">
    <h1>¡Bienvenido {{ nombreUsuario }}! 🎵</h1>
    <h2>Buscador</h2>
    <label for="tag">Mood</label><br />
    <input v-on:input="onTagInput" name="tag" id="tag" required /><br />

    <label for="yearmin">Año mínimo</label><br />
    <input
      v-on:input="onYearminInput"
      type="text"
      name="yearmin"
      id="yearmin"
      required
    /><br />

    <label for="yearmax">Año máximo</label><br />
    <input
      v-on:input="onYearmaxInput"
      type="text"
      name="yearmax"
      id="yearmax"
      required
    /><br />
    <br /><br />
    <button @click.stop.prevent="onBuscar">Buscar</button>

    <button @click="onSalir">Salir</button>
    <button @click="onEliminarCuenta" style="margin: 10px">
      Eliminar Cuenta
    </button>
    <button @click="onActualizarContra">Actualizar contraseña</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
