<template>
  <button @click="accionBoton({ estado: estado, numero: numero })">
    {{ textoBoton }}
  </button>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    estado: Boolean,
    numero: Number,
  },
  computed: {
    textoBoton() {
      return this.estado ? "Aumentar" : "Disminuir";
    },
  },
  methods: {
    ...mapActions(["accionBoton"]),
  },
};
</script>
