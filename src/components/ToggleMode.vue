<template>
  <div class="contenToggle" :class="{ line: text }">
    <label v-if="text" class="label"><slot></slot></label>
    <label class="togglemode" :class="{ darkMode: dark, on: check }">
      <input v-model="check" type="checkbox" @change="insertValue()" />
      <span>{{ value }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Togglemode",
  props: {
    dark: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    val1: {
      type: String,
      default: "",
    },
    val2: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      check: false,
      value: this.val1,
    };
  },
  created() {
    let darkState = JSON.parse(localStorage.getItem("darkTheme"));
    if (this.dark) {
      if (darkState === null) {
        this.check = false;
      } else {
        this.check = darkState;
      }
    }
  },
  mounted() {
    if (this.val1 !== "") {
      this.$emit("value", this.val1);
    } else {
      this.$emit("value", 0);
    }
  },
  methods: {
    insertValue() {
      if (this.dark) {
        localStorage.setItem("darkTheme", this.check);
        document.documentElement.setAttribute("data-dark", this.check);
      } else if (this.text) {
        if (!this.check) {
          this.value = this.val1;
          if (this.val1 !== "") {
            this.$emit("value", this.val1);
          } else {
            this.$emit("value", 0);
          }
        } else {
          this.value = this.val2;
          if (this.val2 !== "") {
            this.$emit("value", this.val2);
          } else {
            this.$emit("value", 1);
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.contenToggle {
  display: flex;
  justify-content: space-between;
}

.label {
  color: var(--bg-stroke);
  font-size: 14px;
  font-weight: 500;
}

.line {
  border-bottom: 1px solid var(--bg-border);
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.togglemode {
  width: 42px;
  height: 1rem;
  background-color: var(--toggle);
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
  background: var(--toggle-slider);
  position: absolute;
  cursor: inherit;
  box-sizing: content-box;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.25s, transform 0.25s;
  border: 1px solid var(--toggle);
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  align-items: center;
  display: flex;
  justify-content: center;
}

.togglemode.on {
  background-color: var(--toggle-on);
}

.togglemode.on span {
  border-color: var(--toggle-on);
}

/** para usar como Toggle Dark **/

.darkMode {
  background-color: var(--toggle-on);
}

.darkMode span {
  background: var(--toggle-slider) url(~@/assets/sun.svg) no-repeat 50%;
  border-color: var(--toggle-on);
}

.darkMode.on {
  background-color: var(--toggle-on);
}

.darkMode.on span {
  background: var(--toggle-slider-on) url(~@/assets/moon.svg) no-repeat 50%;
  border-color: var(--toggle-on);
}

.on span {
  left: 100%;
  transform: translate(-100%, -50%);
}
</style>
