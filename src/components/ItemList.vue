<template>
  <div class="itemlist">
    <label class="item" :class="{ active: check }">
      <input
        v-model="check"
        type="checkbox"
        name="{{serial}}"
        value="{{serial}}"
      />
      <div class="cel1">{{ serial }}</div>
      <div class="cel2">{{ cliente }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    serial: {
      type: String,
      default: "0",
    },
    cliente: {
      type: String,
      default: "Valko",
    },
  },
  data() {
    return {
      check: false,
    };
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  text-align: left;
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid var(--border-list);
  cursor: pointer;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.item:hover,
.active {
  background-color: var(--bg-list);
}

.item input {
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
}

.item span {
  display: block;
}

.item .cel1 {
  width: 25%;
}

.item .cel2 {
  width: 75%;
}
</style>
