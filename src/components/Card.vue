<template>
  <div class="card">
    <img
      :src="require(`../assets/data/items/${category}/${id}.jpg`)"
      alt="photo"
    />
    <div class="name">
      {{ item.name }}
    </div>
    <div class="price">
      {{ item.price }}
    </div>
    <div class="bottom">
      <button
        type="button"
        class="like btn btn-outline-danger"
        :class="{'liked': this.liked}"
        @click="like"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          class="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
          ></path>
        </svg>
      </button>
      <button class="open btn btn-primary btn-sm" @click="openItem">Open</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    like() {
      this.liked = !this.liked;
      this.$store.dispatch(this.liked ? "addFavorite" : "removeFavorite", this.item);
    },
    openItem(){
      this.$router.push(`/items/${this.category}/${ this.id}`);
    }
  },
  props: ["id", "item", "category"],
  mounted() {
    this.liked = this.$store.getters.hasFavorite(this.item);
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 265px;
  min-height: 410px;
  margin: 7px;

  img {
    width: 100%;
    height: 350px;
    border-bottom: 1px solid rgb(151, 149, 149);
  }

  .price {
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid rgb(151, 149, 149);
    color: rgb(253, 47, 47);
  }

  .name {
    text-align: center;
    font-weight: bold;
  }

  .bottom {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 0;

    .open {
      height: 100%;
      width: 110px;
    }
    button{
        box-shadow: none;
    }

    .like {
      height: 100%;
      margin: 0;
      padding: 0;
      width: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .liked{
        background-color: crimson;
    }

    img {
      width: 30px;
      height: 30px;
      display: inline-block;
      background-color: crimson;
    }
  }
}
</style>