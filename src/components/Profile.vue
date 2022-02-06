<template>
  <div class="profile">
    <div>
      <h2>{{ character.first_name }} {{ character.last_name }}</h2>
      <p><strong>Дата рождения: </strong>{{ character.date_of_birth }}</p>
      <p><strong>Работа: </strong>{{ character.employment.title }}</p>
      <p>
        <strong>Место проживания: </strong>{{ character.address.city }}
        {{ character.address.state }} {{ character.address.street_address }}
      </p>
      <p><strong>Телефон: </strong>{{ character.phone_number }}</p>
      <p><strong>Почта: </strong>{{ character.email }}</p>
      <button v-on:click="fetchChar">Обновить персонажа</button>
    </div>
    <div>
      <img :src="character.avatar" alt="user" class="rounded-circle avatar" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["character", "fetchChar"],
};
</script>