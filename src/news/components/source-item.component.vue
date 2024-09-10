<script>

import {Source} from "@/news/model/source.entity.js";

export default {
  name:  "Source-item",
  props: {
    source: {
      type: Source,
      required: true
    }
  },
  methods: {
    onSourceSelected() {
      this.$emit("source-selected", this.source);
    }
  }
}
</script>

<template>

  <div class="m-4">
    <div @click="onSourceSelected()"></div>
    <span>
      <pv-avatar :aria-label="source.name"
                 :image="source.urlToLogo"
                 shape="circle" />
    </span>
    <span>
      {{ source.name }}
    </span>
  </div>
</template>

<style scoped>

</style>