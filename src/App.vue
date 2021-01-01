<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Head";
export default {
  components: {
    Header,
  },
  name: "App",
};
</script>

