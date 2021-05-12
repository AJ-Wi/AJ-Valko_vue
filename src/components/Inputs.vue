<template>
  <div class="control-inputs">
    <label
      :for="name"
      class="labels"
      :class="{
        label_focus: focus,
        label_active: active,
      }"
    >
      <slot></slot>
    </label>
    <input
      :id="name"
      v-model="valor"
      :type="type"
      :name="name"
      class="inputs"
      required
      @focus="focus = true"
      @blur="focus = false"
      @focusout="inputActive()"
    />
    <svg
      v-if="password()"
      class="eye"
      width="9.1000004mm"
      height="4.0999999mm"
      viewBox="0 0 9.1000004 4.0999999"
      @click="show()"
    >
      <g
        id="eye"
        opacity="0.70"
        onmouseover="style.cursor = 'pointer'"
        transform="matrix(0.34314006,0,0,-0.34314006,-59.306829,213.04539)"
      >
        <path
          fill="#000000"
          d="m 172.93714,614.56132 c 7.7627,-6.37089 16.19199,-8.44598 26.29954,0.2944 -9.95952,9.14763 -18.42421,6.71039 -26.29954,-0.2944 z"
        />
        <path
          transform="scale(1,-1)"
          fill="#ffffff"
          d="m 190.707,-614.91534 a 4.6200819,4.6200819 0 0 1 -4.62005,4.62008 4.6200819,4.6200819 0 0 1 -4.62012,-4.62 4.6200819,4.6200819 0 0 1 4.61996,-4.62017 4.6200819,4.6200819 0 0 1 4.62021,4.61992"
        />
        <path
          transform="scale(1,-1)"
          fill="#000000"
          d="m 188.93274,-615.16846 a 2.8458455,3.0237105 0 0 1 -2.83784,3.0237 2.8458455,3.0237105 0 0 1 -2.8538,-3.0067 2.8458455,3.0237105 0 0 1 2.82181,-3.0406 l 0.024,3.0236 z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      valor: "",
      focus: false,
      active: false,
      types: ["password", "email", "number", "search", "tel", "url"],
    };
  },
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapMutations([]),
    inputActive() {
      let i = document.querySelector("#" + this.name);
      if (i.value) {
        this.active = true;
        this.$emit("value", this.valor);
        this.value = "";
      } else {
        this.active = false;
      }
    },
    show() {
      let input = document.querySelector("#" + this.name);
      if (input.type === "password") {
        input.type = "text";
      } else if (input.type === "text") {
        input.type = "password";
      }
    },
    filterType() {
      var result = "text";
      for (let i of this.types) {
        if (this.type === i) {
          result = i;
        }
      }
      return result;
    },
    password() {
      if (this.type === "password") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.control-inputs {
  position: relative;
  text-align: left;
}

.inputs {
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  width: 100%;
  display: block;
  border: none;
  padding: 5px 0;
  border-bottom: solid 1px var(--bg-border);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(to bottom, var(--bg) 96%, var(--bg-list) 96%);
  background-position: -1920px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-size: 14px;
  font-weight: 500;
  color: var(--second-color);
}

.inputs:focus {
  background-position: 0 0;
  box-shadow: none;
  outline: 0;
}

.labels {
  color: var(--bg-stroke);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  margin: 10px 0 10px;
  display: inline-block;
  transform: translateY(-5px);
  position: absolute;
}

.label_focus,
.label_active {
  transform: translateY(-20px);
  font-size: 10px;
}

.eye {
  position: absolute;
  width: 13.12%;
  top: 0;
  right: 15px;
  z-index: 100;
}
</style>
