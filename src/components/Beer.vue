<template>
  <div class="content">  
    <div class="beer">
      <p>Случайное пиво на сегодня!</p>
      <h2>{{ beer.name }}</h2>
      <p><strong>Тип: </strong>{{ beer.style }}</p>
      <p><strong>Бренд: </strong>{{ beer.brand }}</p>
      <p><strong>Градусы: </strong>{{ beer.alcohol }}</p>
      <div class="beer__button">
        <button v-on:click="fetchBeer">Выбрать другое</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    beer: [],
  }),
  mounted() {
    this.fetchBeer();
  },
  methods: {
    fetchBeer() {
      this.axios
        .get(`https://random-data-api.com/api/beer/random_beer`)
        .then((response) => (this.beer = response.data))
    },
  },
};
</script>