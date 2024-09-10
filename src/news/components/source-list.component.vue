<script>

import SourceItem from "./source-item.component.vue";
import {NewsApiService} from "@/news/services/news-api.service.js";
import {Source} from "@/news/model/source.entity.js";

export default {
  name: "source-list",
  components: {SourceItem},
  props: {
  },
  data() {
    return {
      visible: false,
      sources: [],
      error: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    this.newsApi.getSources()
        .then(response => {
          this.sources = response.data.sources.map(source => new Source(source));
          this.sources.forEach(source => {
            source.urlToLogo = this.newsApi.getUrlToLogo(source);
            console.log('source data');
            console.log(response.data.sources);
            console.log('sources:', this.sources);
          });
        })
        .catch(e => this.error.push(e));
  },
  methods: {
    onSourceSelected(source) {
      this.$emit('source-selected', source);
    },
    isVisible() {
      return this.visible;
    },
    toggleSidebar2(){
      this.$props.visible = !this.$props.visible;
    }
  }
}

</script>

<template>
  <pv-drawer v-model:visible="visible" header="CATCHUP">
    <source-item v-for="source in sources"
                 :key="source.id"
                 :source="source"
                 @source-selected="onSourceSelected(source)"></source-item>
  </pv-drawer>

</template>

<style scoped>

</style>