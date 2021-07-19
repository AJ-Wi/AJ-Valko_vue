<template>
  <div>
    <label class="item-checkList" :class="{ 'is-Active': checked }">
      <input
        v-model="checked"
        type="checkbox"
        :name="itemid"
        @change="select(itemid)"
      />
      <div class="item-id">{{ itemid }}</div>
      <div class="iten-content">{{ itemcontent }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckList",
  props: {
    itemid: {
      type: String,
      default: "0",
    },
    itemcontent: {
      type: String,
      default: "Valko Medical",
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    select($i) {
      this.$store.commit("selectSend", $i);
    },
  },
};
</script>

<style scoped>
.item-checkList {
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

.item-checkList:hover,
.is-Active {
  background-color: var(--bg-list);
}

input {
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
}

.item-id {
  flex-grow: 1;
}

.iten-content {
  flex-grow: 3;
}
</style>
