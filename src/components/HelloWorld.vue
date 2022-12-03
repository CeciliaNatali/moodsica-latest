<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="greetings">
    <h1 class="pink">{{ msg }}</h1>
    <h2>
      Escucha tus emociones
      <br />
    </h2>
    <h3>
      Gracias a
      <a
        href="https://musicoveryb2b.mystrikingly.com/"
        target="_blank"
        rel="noopener"
        >Musicovery's API</a
      >
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 800;
  font-size: 5.5rem;
  top: -10px;
}

h2 {
  font-size: 1.8rem;
  text-align: center;
}

h3 {
  font-size: 0.9rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
