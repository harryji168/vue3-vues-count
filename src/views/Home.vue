<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--<h1>Mi contador: {{ $store.state.contador }}</h1>-->
    <h1 :style="colorContador">{{ titulo }} : {{ contador }}</h1>
    <!--
    <button @click="incrementar">Incrementar</button>
    <button @click="accionIncrementar">Incrementar con accion</button>
    -->
    <BtnDisminuir />
    <hr />
    <BtnAccion :estado="true" :numero="20" />
    <BtnAccion :estado="false" :numero="20" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import BtnDisminuir from "@/components/BtnDisminuir";
import BtnAccion from "@/components/BotonAccion";

export default {
  name: "Home",
  components: { BtnDisminuir, BtnAccion },
  data() {
    return {
      titulo: "Mi contador vuex",
    };
  },
  computed: {
    ...mapState(["contador"]),
    colorContador() {
      return [this.contador > 100 ? { color: "green" } : { color: "red" }];
    },
  },
  methods: {
    ...mapMutations(["incrementar"]),
    ...mapActions(["accionIncrementar"]),
  },
};
</script>
