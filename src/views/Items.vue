<template>
  <div class="name">
    {{name}}
  </div>
  <div class="block">
    <card v-for="(item, idx) in items" :category="id" :id="(idx+1)" :item="item" :key="idx" ></card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  data() {
    return {
      items: [],
      id: 0,
      name: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    const category = this.$store.getters.getCategory(this.id);
    this.name = category.name;
    this.items = category.items;
  },
  components: { Card },
};
</script>

<style lang="scss" scoped>
.name{
  text-align: center;
  margin: 0;
  padding: 7px;
  background-color: cornsilk;
  color: rgb(145, 105, 240);
  font-size: 20px;
  font-weight: 700;
}
.block {
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>