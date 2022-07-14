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
    <div class="form-group">
        <div class="form-input my-4">
            <div class="input__group">
                <label for="tandarts-verzekering" class="input__title">
                    {{ label }}
                </label>
                <select id="tandarts-verzekering" class="form-control" v-on:input="handleEvent($event)">
                    <option selected :price="prices[0]">
                        Geen tandartsverzekering geselecteerd
                    </option>
                    <option :price="prices[1]">
                        Tand 1 - € {{ prices[1] }} per jaar
                    </option>
                    <option :price="prices[2]">
                        Tand 2 - € {{ prices[2] }} per jaar
                    </option>
                    <option :price="prices[3]">
                        Tand 3 - € {{ prices[3] }} per jaar
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
