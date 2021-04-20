<template>
  <div class="contenToggle">
    <label class="togglemode" :class="{ darkMode: dark, on: check }">
      <input type="checkbox" v-model="check" />
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "togglemode",
  data() {
    return {
      check: false,
    };
  },
  props: ["dark"],
};
</script>

<style scoped>
.contenToggle {
  display: flex;
}
.togglemode {
  width: 42px;
  height: 1rem;
  background-color: #898989;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
}

.togglemode input {
  opacity: 0;
}

.togglemode span {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fbfbfe;
  position: absolute;
  cursor: inherit;
  box-sizing: content-box;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.25s, transform 0.25s;
  border: 1px solid #898989;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}

.togglemode.on {
  background-color: #008afc;
}

.togglemode.on span {
  border-color: #008afc;
}

/** para usar como Toggle Dark **/

.darkMode {
  background-color: #008afc;
}

.darkMode span {
  background: #fbfbfe url(~@/assets/sun.svg) no-repeat 50%;
  border-color: #008afc;
}

.darkMode.on {
  background-color: #094977;
}

.darkMode.on span {
  background: #121a21 url(~@/assets/moon.svg) no-repeat 50%;
  border-color: #094977;
}

.on span {
  left: 100%;
  transform: translate(-100%, -50%);
}
</style>
