<template>
  <div class="enviar">
    <h2>Balones a Enviar a Planta.</h2>
    <ItemList
      v-for="n in data"
      :key="n"
      :serial="n.serial"
      :cliente="n.nombre"
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
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.getFetch();
  },
  methods: {
    async getFetch() {
      // GET fetch con headers
      const requestOptions = {
        method: "get",
        origin: "localhost:8080",
        headers: {
          "Content-Type": "application/json",
          Authorization: "769fb7afe1e40d4bbbabf39905a4865d",
        },
      };
      const response = await fetch(
        "http://localhost:5555/APIs/AJ-dev-api/v1/balones/enviar",
        requestOptions
      );
      const data = await response.json();
      this.data = data.response;
      console.log(data.response);
    },
  },
  /*postFetch() {
    // POST request using fetch with set headers
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "769fb7afe1e40d4bbbabf39905a4865d",
          "My-Custom-Header": "foobar",
        },
        body: JSON.stringify({ title: "Vue POST Request Example" }),
      };
      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then((response) => response.json())
        .then((data) => (this.postId = data.id));
  },*/
};
</script>
