<template>
  <div class="contenToggle" :class="{ line: text }">
    <label v-if="text" class="label"><slot></slot></label>
    <label class="togglemode" :class="{ darkMode: dark, on: check }">
      <input type="checkbox" @change="insertValue()" v-model="check" />
      <span>{{ value }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "togglemode",
  data() {
    return {
      check: false,
      value: this.val1,
    };
  },
  props: ["dark", "text", "val1", "val2"],
  methods: {
    insertValue() {
      if (this.dark) {
        localStorage.setItem("darkTheme", this.check);
      } else if (this.text) {
        if (!this.check) {
          this.value = this.val1;
        } else {
          this.value = this.val2;
        }
      }
    },
  },
  created() {
    let darkState = JSON.parse(localStorage.getItem("darkTheme"));
    const $selectors = document.querySelectorAll("[data-dark]");
    $selectors.forEach((el) => el.classList.add("dark-theme"));
    if (this.dark) {
      if (darkState === null) {
        this.check = false;
      } else {
        this.check = darkState;
      }
    }
  },
};
</script>

<style scoped>
.contenToggle {
  display: flex;
  justify-content: space-between;
}

.label {
  color: #898989;
  font-size: 14px;
  font-weight: 500;
}

.line {
  border-bottom: 1px solid #d2d2d2;
  padding-bottom: 10px;
  margin-bottom: 20px;
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
  align-items: center;
  display: flex;
  justify-content: center;
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
