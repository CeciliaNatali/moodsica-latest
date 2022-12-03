<script>
export default {
  name: "RegistroComponent",
  props: {},
  data() {
    return {
      nUsuario: "",
      nContrasenna: "",
      nEmail: "",
      success: false,
      registroAttempt: false,
    };
  },
  methods: {
    onUsuarioInput(e) {
      this.loginAttempt = false;
      this.nUsuario = e.target.value;
    },
    onContrasennaInput(e) {
      this.loginAttempt = false;
      this.nContrasenna = e.target.value;
    },
    onEmailInput(e) {
      this.loginAttempt = false;
      this.nEmail = e.target.value;
    },
    onRegistro() {
      const url = "http://localhost:5000/registro/async";

      const body = {
        usuario: this.nUsuario,
        email: this.nEmail,
        contrasenna: this.nContrasenna,
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
          this.registroAttempt = true;
          //this.success = data.success ? true : false;
          this.success = data.success;
          if (this.success) {
            this.$router.push({ path: "/ingreso" });
          }
        });
    },
  },
};
</script>

<template>
  <div class="registro">
    <h1>Crear una nueva cuenta</h1>
    <label for="nUsuario">Usuario</label>
    <br />
    <input
      v-bind:value="nUsuario"
      v-on:input="onUsuarioInput"
      name="nUsuario"
      id="nUsuario"
      required
    />
    <br />
    <label for="nEmail">Email</label>
    <br />
    <input
      v-bind:value="nEmail"
      v-on:input="onEmailInput"
      type="email"
      name="nEmail"
      id="nEmail"
      required
    />
    <br />
    <label for="nContrasenna">Contraseña</label>
    <br />
    <input
      v-bind:value="nContrasenna"
      v-on:input="onContrasennaInput"
      type="password"
      name="nContrasenna"
      id="nContrasenna"
      required
    />
    <br /><br />
    <button v-on:click="onRegistro">Registrar</button>
    <br />
    <div v-if="success && registroAttempt" id="success">¡Registro exitoso!</div>
    <div v-if="!success && registroAttempt" id="fail">
      Fallo al registrarse.
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
