<template>
  <div class="nav">
    <img src="@/assets/jomazon.png" alt="Jomazon" id="logo" @click="goTo('/')"/>

    <div class="right">
      <div class="ico" @click="goTo('/basket')">
        <img src="@/assets/basket.jpg" alt="Wish" width="18" height="18" />
        Basket
      </div>

      <div class="ico" @click="goTo('/favorite')">
        <img src="@/assets/star.png" alt="Favorites" width="18" height="18" />
        Favorites
      </div>

      <div v-if="!this.$store.state.isLoggedIn" class="status" @click="goTo('/login')">
        Log in
      </div>
      <div v-else class="status" @click="logout">
        {{ this.$store.state.username }}
      </div>
    </div>
  </div>

  <div class="content">
    <router-view></router-view>
  </div>

  <div class="footer">
    <div class="left">
      <router-link to="/about" class="btn btn-outline-primary btn-sm shadow-none">About</router-link>
      <router-link to="/feedback" class="btn btn-outline-primary btn-sm shadow-none">Feedback</router-link>
      <router-link to="/contact" class="btn btn-outline-primary btn-sm shadow-none">Contact</router-link>
    </div>
    <div class="right">By Jomazon corparation</div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      if (confirm('Do you want to log out'))
        this.$store.dispatch("logOut");
    },
    goTo(path){
      this.$router.push(path);
    }
  },
};
</script>

<style lang="scss">
$orange: #ff9a00;

html,
body {
  padding: 0;
  height: 100%;
  margin: 0;
  background-color: rgb(240, 238, 238);
}

.nav {
  background-color: #1f2134;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
  height: 55px;

  #logo {
    width: 144px;
    height: 30px;
    margin-left: 15px;
    cursor: pointer;
  }

  .right {
    display: inline-flex;
    align-items: center;

    .ico {
      display: flex;
      flex-direction: column;
      margin: 0 5px;
      color: white;
      cursor: pointer;
      font-size: 15.5px;
      padding: 3px;

      img {
        margin: 0 auto;
      }

      &:hover {
        color: #eec94e;
      }
    }

    .status {
      display: flex;
      align-items: center;
      text-align: center;
      color: white;
      font-size: 17px;
      margin: 0 15px;
      cursor: pointer;
      background: #ff9a00;
      border-radius: 8px;
      padding: 3px 8px;
      font-weight: bold;
    }
  }
}
.content{
  min-height: calc(100vh - 55px);
  padding-bottom: 45px;
}
.footer{
  height: 45px;
  margin-top: -45px;
  width: 100%;
  background-color: #fad58b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;

  .left,
  .right{
    padding: 5px;
    margin: 0 2px;
  }

  .btn{
    margin: 0 3px;
  }
}
</style>