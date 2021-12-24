<template>
    <div class="body">
        <div class="name">Basket</div>
        <div v-if="this.$store.state.basket.length != 0" class="basket">
            <basket-card
                v-for="(item, idx) in this.$store.state.basket"
                :key="idx"
                :item="item"
            ></basket-card>
        </div>
        <div v-else>Basket is empty</div>
    </div>
</template>

<script>
import BasketCard from "../components/BasketCard.vue";

export default {
    data() {
        return {
        };
    },
    methods: {},
    components: { BasketCard }
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

    .basket {
		display: flex;
		justify-content: center;
		flex-direction: column;
}
}
</style>
