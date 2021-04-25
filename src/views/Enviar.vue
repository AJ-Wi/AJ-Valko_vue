<template>
  <div class="enviar">
    <h2>Balones a Enviar a Planta.</h2>
    <ItemList
      v-for="n in 30"
      :key="n"
      serial="123456"
      cliente="Wladimir Perez"
    />
  </div>
</template>
<script>
import ItemList from "@/components/ItemList.vue";

export default {
  name: "Enviar",
  components: {
    ItemList,
  },
};
</script>
