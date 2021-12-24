<template>
  <div class="body">
    <div class="languages">
      <input type="radio" id="kz" value="kazakh" v-model="lang" checked />
        <label for="one">Kazakh</label>
      <input type="radio" id="ru" value="russian" v-model="lang" />
        <label for="two">Russian</label>
      <input type="radio" id="en" value="english" v-model="lang" />
        <label for="two">English</label>
    </div>
    <div class="about">
        <p v-if="lang==='kazakh'">Бұл проектті жасаған - <i>Жомарт</i>.</p>
        <p v-else-if="lang==='russian'">Этот проект сделано от <i>Жомарта</i>.</p>
        <p v-else>This project made by <i>Zhomart</i>.</p>
        <hr>
        <p>SDU final project</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "kazakh"
    };
  },
};
</script>
<style scoped lang="scss">

  .body{
    text-align: center;

    input[type=radio]{
      margin-left: 5px;
    }

    .languages{

    }

    .about{
      margin-top: 20px;
      text-align: center;
      hr{
        width: 150px;
        display: inline-block;
      }
    }
  }

</style>