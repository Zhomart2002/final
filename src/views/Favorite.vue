<template>
    <div class="body">
        <div class="name">Favorites</div>
        <div v-if="this.$store.state.favorites.length != 0" class="favorite">
            <favorite-card
                v-for="(item, idx) in this.$store.state.favorites"
                :key="idx"
                :item="item"
            ></favorite-card>
        </div>
        <div v-else>Favorites is empty</div>
    </div>
</template>

<script>
import FavoriteCard from "../components/FavoriteCard.vue";

export default {
    data() {
        return {
        };
    },
    methods: {},
    components: { FavoriteCard }
};
</script>

<style lang="scss" scoped>
.body {
    padding: 5px;
    text-align: center;
    .name {
        margin: 5px 0;
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
        padding: 5px;
    }

    .favorite {
		display: flex;
		justify-content: center;
		flex-direction: column;
}
}
</style>
