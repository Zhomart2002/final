<template>
  <div class="card">
    <div class="left">
      <div class="name">Item: {{ item.name }}</div>
      <div class="price">Price: {{ item.price }}</div>
      <div class="count">Count: {{ item.count }}</div>
    </div>
    <div class="remove" @click="remove">Remove</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item"],
  methods: {
      remove(){
          this.$store.dispatch('removeFavorite', this.item);
      }
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  min-width: 250px;
  margin: 5px auto;

  .left {
    text-align: left;
    padding: 5px;
  }

  .remove {
    padding: 2px;
    user-select: none;
    background-color: rgb(248, 86, 86);
    cursor: pointer;
    &:hover{
        background-color: hsl(0, 100%, 50%);
    }
  }
}
</style>