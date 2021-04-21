<template>
  <div class="recibir">
    <h2>Balones llegando de Planta.</h2>
    <ItemList
      v-for="n in 15"
      :key="n"
      serial="123456"
      cliente="Wladimir Perez"
    />
  </div>
</template>
<script>
import ItemList from "@/components/ItemList.vue";

export default {
  name: "Recibir",
  components: {
    ItemList,
  },
};
</script>
