<template>
    <video autoplay loop muted>
        <source src="@/assets/home/video.mp4" type="video/mp4">
    </video>
    <div class="categories d-flex justify-content-center">
        <div class="category col-12 col-md-6 col-lg-3" v-for="(value, key) in data" :key="key" @click="goToItem(key)">
            <img :src="require(`../assets/home/${key}.webp`)" :alt="key">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data: null
        }
    },
    methods:{
        goToItem(itemId){
            this.$router.push('/items/' + itemId);
        }
    },
    mounted(){
        this.data = this.$store.state.data;
    }
}
</script>

<style lang="scss" scoped>

    video{
        margin: 0;
        object-fit: initial;
        width: 100%;
        height: 70vh;
    }

    .categories{
        width: 100%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;

        .category {
            width: auto;
            height: auto;
            margin: 5px;
            cursor: pointer;
            padding: 0;

            img{
                width: 300px;
                height: 400px;
                margin: 0 auto;
            }
        }
    }
    

</style>