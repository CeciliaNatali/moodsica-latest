<template>
  <div class="borraCuenta">
    <h1>Borrar Cuenta</h1>
    <label for="vUsuario">Usuario</label>
    <br />
    <input
      v-bind:value="vUsuario"
      v-on:input="onUsuarioInput"
      name="vUsuario"
      id="vUsuario"
      required
    />
    <br />
    <label for="vContrasenna">Contraseña</label>
    <br />
    <input
      v-bind:value="vContrasenna"
      v-on:input="onContrasennaInput"
      type="password"
      name="vContrasenna"
      id="vContrasenna"
      required
    />
    <br /><br />
    <button v-on:click="onEliminar">Borrar</button>
    <br />
    <div v-if="success && deleteAttempt" id="success">Usuario eliminado :(</div>
    <div v-if="!success && deleteAttempt" id="fail">
      Error al eliminar al usuario :D
    </div>
  </div>
</template>

<script>
export default {
  name: "EliminarCuenta",
  props: {},
  data() {
    return {
      vUsuario: "",
      vContrasenna: "",
      success: false,
      deleteAttempt: false,
    };
  },
  methods: {
    onUsuarioInput(e) {
      this.deleteAttempt = false;
      this.vUsuario = e.target.value;
    },
    onContrasennaInput(e) {
      this.deleteAttempt = false;
      this.vContrasenna = e.target.value;
    },
    onEliminar() {
      const url = "http://localhost:5000/cuenta/eliminar";
      const body = {
        usuario: this.vUsuario,
        contrasenna: this.vContrasenna,
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
          this.deleteAttempt = true;
          //this.success = data.success ? true : false;
          this.success = data.success;
          if (this.success) {
            sessionStorage.removeItem("usuario");
            this.$router.push({ path: "/registro" });
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#success {
  color: greenyellow;
}
#fail {
  color: red;
}
</style>
