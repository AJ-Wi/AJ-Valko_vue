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
      :type="type"
      :name="name"
      :id="name"
      class="inputs"
      @focus="focus = true"
      @blur="focus = false"
      @focusout="inputActive()"
      required
    />
    <svg
      v-if="password()"
      class="eye"
      @click="show()"
      width="9.1000004mm"
      height="4.0999999mm"
      viewBox="0 0 9.1000004 4.0999999"
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
export default {
  data() {
    return {
      focus: false,
      active: false,
      types: ["password", "email", "number", "search", "tel", "url"],
    };
  },
  props: ["type", "name"],
  methods: {
    inputActive() {
      let i = document.querySelector("#" + this.name);
      if (i.value) {
        this.active = true;
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
  border-bottom: solid 1px #d2d2d2;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 96%,
    #0000ff 96%
  );
  background-position: -1920px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-size: 14px;
  font-weight: 100;
}

.inputs:focus {
  background-position: 0 0;
  box-shadow: none;
  outline: 0;
}

.labels {
  color: #898989;
  font-size: 14px;
  font-weight: 300;
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
