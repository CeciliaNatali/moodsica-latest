<script>
export default {
  name: "ActualizarComponent",
  props: {},
  data() {
    return {
      usuario: "",
      viejaContra: "",
      nuevaContra: "",
      actualizarAttempt: false,
      success: false,
    };
  },
  methods: {
    onUsuarioInput(e) {
      this.actualizarAttempt = false;
      this.usuario = e.target.value;
    },
    onViejaContraInput(e) {
      this.actualizarAttempt = false;
      this.viejaContra = e.target.value;
    },
    onNuevaContraInput(e) {
      this.actualizarAttempt = false;
      this.nuevaContra = e.target.value;
    },
    onActualizar() {
      const url = "http://localhost:5000/cuenta/actualizar";

      const body = {
        usuario: this.usuario,
        viejaContra: this.viejaContra,
        nuevaContra: this.nuevaContra,
      };

      fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.actualizarAttempt = true;
          //this.success = data.success ? true : false;
          this.success = data.success;
          if (this.success) {
            this.$router.push({ path: "/cuenta/buscador" });
          }
        });
    },
  },
};
</script>

<template>
  <div class="actualizar">
    <h1>Actualizar contraseña</h1>
    <label for="usuario">Usuario</label><br />
    <input
      v-on:input="onUsuarioInput"
      name="usuario"
      id="usuario"
      required
    /><br />

    <label for="viejaContra">Antigua Contraseña</label><br />
    <input
      v-on:input="onViejaContraInput"
      name="viejaContra"
      id="viejaContra"
      required
    /><br />

    <label for="nuevaContra">Nueva Contraseña</label><br />
    <input
      type="password"
      v-on:input="onNuevaContraInput"
      name="nuevaContra"
      id="nuevaContra"
      required
    />
    <br /><br />
    <button v-on:click="onActualizar">Actualizar</button>
    <div v-if="!success && actualizarAttempt" id="fail">
      Usuario y/o Contraseña inválidos.
    </div>
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
