<script>
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";
import SourceList from "@/news/components/source-list.component.vue";

export default {
  name: 'App',
  components: {
    LanguageSwitcher,
    SourceList
  },
  data() {
    return {
      drawerVisible: false
    }
  },
  methods: {
    toggleSidebar() {
      this.drawerVisible = !this.drawerVisible;
    },
    setSource(source) {
      this.toggleSidebar();
      console.log(source);
    }
  }
}
</script>

<template>
  <div class="card flex justify-center">
    <div>
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="catchup" @click="toggleSidebar"/>
          <source-list v-model:visible="drawerVisible" v-on:source-selected="setSource" />
        </template>
        <template #end>
          <language-switcher></language-switcher>
        </template>
      </pv-menubar>
    </div>

  </div>
  <main>
    <pv-card>
      <template #header>
        <img alt="user header" src="./assets/images/profile-pic.png">
      </template>
      <template #title>
        Advanced Card
      </template>
      <template #content>
        {{ $t('card-content') }}
      </template>
      <template #footer>
        <pv-button :label="$t('submit')" icon="pi pi-check"/>
        <pv-button :label="$t('read-more')" class="p-button-secondary" icon="pi pi-times" label="Cancel"
                   style="margin-left: .5em"/>
      </template>
    </pv-card>
  </main>

</template>

<style scoped>
</style>
