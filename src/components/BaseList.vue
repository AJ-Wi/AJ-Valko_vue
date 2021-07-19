<template>
  <div>
    <label class="item-list">
      <div class="item-id">{{ itemid }}</div>
      <div class="itrm-content">{{ itemcontent }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseList",
  props: {
    itemid: {
      type: String,
      default: "0",
    },
    itemcontent: {
      type: String,
      default: "AJ Software",
    },
  },
};
</script>

<style scoped>
.item-list {
  display: flex;
  align-items: center;
  text-align: left;
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid var(--border-list);
  padding: 0 5px;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.item-id {
  flex-grow: 1;
}

.item-content {
  flex-grow: 9;
}
</style>
