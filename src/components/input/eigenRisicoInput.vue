<script>
export default {
    props: {
        label: String,
        isInvalid: Boolean
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
            <label for="eigen-risico" class="input__title">
                Kies de hoogste van het eigen risico
            </label>
            <select
                id="eigen-risico"
                :disabled="isInvalid"
                :class="{ 'is-invalid': isInvalid }"
                class="form-control"
                v-on:input="handleEvent($event)"
            >
                <option price="0">€ 385 - verplicht eigen risico</option>
                <option price="-22">€ 885 - korting van € 22 per jaar</option>
            </select>
        </div>
    </div>
</template>
