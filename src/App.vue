<template>
  <MenuBar title="Valko Medical" />
  <router-view />
  <NavBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MenuBar from "@/components/MenuBar.vue";

export default {
  components: {
    NavBar,
    MenuBar,
  },
};
</script>

<style>
/*************  variables ************/
:root {
  /*********** Colors ************/
  --primary-color: #008afc;
  --second-color: #67bd31;
  --bg: #fbfbfe;
  --bg-container: var(--bg);
  --bg-border: #eff3f5;
  --bg-toggle: var(--primary-color);
  --bg-toggle-slider: #fbfbfe;
  /********* Dark Color **********/
  --bg-dm: #192229;
  --bg-dm-container: #212e36;
  --bg-dm-border: #2a3b47;
  --bg-dm-toggle: #094977;
  --bg-dm-toggle-slider: #121a21;
  /********** sizes **************/
  --container-width: 1200px;
  --font-size: 16px;
  --main-font: sans-serif;
}

/************ reseteos **************/
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

/*********** App ******************/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
