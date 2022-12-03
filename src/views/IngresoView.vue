<script>
export default {
  name: "IngresoView",
  data() {
    return {
      usuario: "",
      contrasenna: "",
      success: false,
      loginAttempt: false,
    };
  },
  methods: {
    onUsuarioInput(e) {
      this.loginAttempt = false;
      this.usuario = e.target.value;
    },
    onContrasennaInput(e) {
      this.loginAttempt = false;
      this.contrasenna = e.target.value;
    },
    onIngresar() {
      const url = "http://localhost:5000/ingreso/async";

      const body = {
        usuario: this.usuario,
        contrasenna: this.contrasenna,
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
          this.loginAttempt = true;
          //this.success = data.success ? true : false;
          this.success = data.success;
          if (this.success) {
            sessionStorage.setItem("usuario", this.usuario);
            this.$emit("ingreso-usuario");
            this.$router.push({ path: "/cuenta/buscador" });
          }
        });
    },
  },
};
</script>

<template>
  <div class="ingreso">
    <h1>Ingresa</h1>
    <label for="usuario">Usuario</label>
    <br />
    <input
      v-bind:value="usuario"
      v-on:input="onUsuarioInput"
      name="usuario"
      id="usuario"
      required
    />
    <br />
    <label for="contrasenna">Contraseña</label>
    <br />
    <input
      v-bind:value="contrasenna"
      v-on:input="onContrasennaInput"
      type="password"
      name="contrasenna"
      id="contrasenna"
      required
    />
    <br /><br />
    <button v-on:click="onIngresar">Ingresar</button>
    <br />
    <div v-if="success && loginAttempt" id="success">¡Bienvenido!</div>
    <div v-if="!success && loginAttempt" id="fail">
      Usuario y/o contraseña incorrectos.
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
