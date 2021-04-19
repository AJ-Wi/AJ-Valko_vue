<template>
  <div id="menubar">
    <h1>{{ title }}</h1>
    <ToggleMode />
  </div>
</template>

<script>
import ToggleMode from "@/components/ToggleMode.vue";
//768 cambio de vista a deskptop
export default {
  name: "MenuBar",
  components: {
    ToggleMode,
  },
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menubar {
  position: sticky;
  top: 0;
  height: 3rem;
  padding: 0.3rem;
  display: flex;
  background: var(--bg);
  color: var(--second-color);
  border-bottom: 1px solid var(--bg-border);
  z-index: 999;
  align-items: center;
}

#menubar h1 {
  margin: 0 auto;
  text-align: center;
}
</style>
