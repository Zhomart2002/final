<template>
  <div class="body">
    <div class="image">
      <img
        :src="
          require(`../assets/data/items/${this.category}/${this.itemId}.jpg`)
        "
        alt="photo"
      />
    </div>
    <div class="character">
      <div class="name">{{ item.name }}</div>
      <div class="price">{{ item.price }}</div>
      <hr />
      <div class="brand">Бренд: <b>TMara</b></div>
      <hr />
      <div class="table">
        <table class="table table-hover table-bordered">
          <tbody>
            <tr>
              <th scope="col" class="table-primary">XS</th>
              <td scope="row">1 шт</td>
            </tr>
            <tr>
              <th scope="col" class="table-primary">S</th>
              <td scope="row">9 шт</td>
            </tr>
            <tr>
              <th scope="col" class="table-primary">M</th>
              <td scope="row">2 шт</td>
            </tr>
            <tr>
              <th scope="col" class="table-primary">L</th>
              <td scope="row">4 шт</td>
            </tr>
            <tr>
              <th scope="col" class="table-primary">XXL</th>
              <td scope="row">5 шт</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr>
      <div class="sizes">
        <div>Выберите размер</div>
        <div class="size">
          <input type="checkbox" name="XS" class="checkbox" />
          <label for="XS">XS</label>
        </div>
        <div class="size">
          <input type="checkbox" name="S" class="checkbox" />
          <label for="S">S</label>
        </div>
        <div class="size">
          <input type="checkbox" name="M" class="checkbox" />
          <label for="M">M</label>
        </div>
        <div class="size">
          <input type="checkbox" name="L" class="checkbox" />
          <label for="L">L</label>
        </div>
        <div class="size">
          <input type="checkbox" name="XXL" class="checkbox" />
          <label for="XXL">XXL</label>
        </div>
      </div>
      <hr>
      <div class="counter">
        <label for="count">Кол: </label>
        <input type="number" name="count" :value="item.count" />
      </div>
      <div class="actions">
        <button
          class="btn btn-sm acive"
          :class="{
            'btn-outline-primary': !inFavorite,
            'btn-primary': inFavorite,
          }"
          @click="addFavorite"
        >
          Favorite
        </button>
        <button
          class="btn btn-sm"
          :class="{ 'btn-outline-danger': !inBasket, 'btn-danger': inBasket }"
          @click="addBasket"
        >
          Basket
        </button>
      </div>
      <hr>
      <div class="info">
        <li v-for="(text, index) in item.about" :key="index">{{ text }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: null,
      itemId: null,
      category: null,
      inFavorite: false,
      inBasket: false,
    };
  },
  created() {
    this.category = this.$route.params.id;
    this.itemId = this.$route.params.itemId;
    this.item = this.$store.getters.getItem(this.category, this.itemId);
    this.inFavorite = this.$store.getters.hasFavorite(this.item);
    this.inBasket = this.$store.getters.hasBasket(this.item);
  },
  methods: {
    addFavorite() {
      this.$store.dispatch(
        !this.inFavorite ? "addFavorite" : "removeFavorite",
        this.item
      );
      this.inFavorite = !this.inFavorite;
    },
    addBasket() {
      this.$store.dispatch(
        !this.inBasket ? "addBasket" : "removeBasket",
        this.item
      );
      this.inBasket = !this.inBasket;
    },
  },
};
</script>

<style scoped lang="scss">
.body {
  background-color: white;
  padding: 5px;
  margin: 10px auto;
  max-width: 1200px;
  border-radius: 5px;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  .image {
    flex: 2;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .character {
    flex: 3;

    .name {
      font-size: 23px;
      font-weight: 600;
    }

    .price {
      color: #ff5700;
      font-size: 30px;
      font-weight: 700;
    }

    .brand {
      font-size: 18px;
    }

    table{
      width: 100px;
      font-size: 15px;
      margin: 10px 0 5px 0;
    }

    .size{
      label{
        font-size: 17px;
        font-weight: 600;
        margin-left: 2px;
      }
    }

    .counter{
      display: flex;
      align-items: center;
      margin: 5px 0 5px 0;
      label{
        margin-right: 2px;
      }

      input{
        text-align: center;
        width: 40px;
      }
    }
  }

  .info {
    font-size: 15px;
  }

  .actions {
    button {
      box-shadow: none;
    }
    
  }

  hr{
    margin: 2px;
  }
}
</style>