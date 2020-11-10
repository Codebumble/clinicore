<template>
  <div id="app">{{data}}</div>
</template>
<script>
const axios = require("axios");
export default {
  name: "App",
  data() {
    return {
      data: {}
    };
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const { data } = await axios.get("https://api.agify.io/?name=michael");
      this.data = data;
    }
  }
};
</script>
