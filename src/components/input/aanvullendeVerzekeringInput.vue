<script>
export default {
    props: {
        label: String,
        prices: Array
    },
    methods: {
        handleEvent: function (event) {
            this.$emit('handleEvent', event);
        }
    }
};
</script>

<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label for="aanvullende-verzekering" class="input__title">
                {{ label }}
            </label>
            <select id="aanvullende-verzekering" class="form-control" v-on:input="handleEvent($event)">
                <option selected :price="prices[0]">
                    Geen aanvullende verzekering geselecteerd
                </option>
                <option :price="prices[1]">
                    Aanvullend 1 - € {{ prices[1] }} per jaar
                </option>
                <option :price="prices[2]">
                    Aanvullend 2 - € {{ prices[2] }} per jaar
                </option>
                <option :price="prices[3]">
                    Aanvullend 3 - € {{ prices[3] }} per jaar
                </option>
                <option :price="prices[4]">
                    Aanvullend 4 - €{{ prices[4] }} per jaar
                </option>
            </select>
        </div>
    </div>
</template>
