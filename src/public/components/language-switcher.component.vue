<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es', 'fr'],
      language: 'en'
    }
  }
}
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="languages"></pv-select-button>
</template>

<style scoped>

</style>