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
  mounted() {
    let darkState = JSON.parse(localStorage.getItem("darkTheme"));
    document.documentElement.setAttribute("data-dark", darkState);
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
  --bg-button: var(--primary-color);
  --bg-list: var(--primary-color);
  --border-list: var(--second-color);
  --bg-border: #d2d2d2;
  --bg-stroke: #2a3b47;
  --text-color: #000000;

  --toggle: #898989;
  --toggle-slider: #fbfbfe;
  --toggle-on: var(--primary-color);
  /********** sizes **************/
  --container-width: 1200px;
  --font-size: 16px;
  --main-font: sans-serif;
}

[data-dark="true"] {
  /********* Dark Color **********/
  --primary-color: #898989;
  --second-color: #fbfbfe;
  --bg: #192229;
  --bg-container: #212e36;
  --bg-button: #094977;
  --bg-list: #008afc;
  --border-list: #67bd31;
  --bg-border: #2a3b47;
  --bg-stroke: var(--primary-color);
  --text-color: var(--second-color);

  --toggle-slider-on: #121a21;
  --toggle-on: #094977;
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
  background-color: var(--bg);
  min-height: 100vh;
}

h2 {
  color: var(--second-color);
}
</style>
