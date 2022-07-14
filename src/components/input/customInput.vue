<script>
export default {
    props: {
        label: String,
        type: String,
        htmlFor: String
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
            <label :for="`${htmlFor}`" class="`input__title">
                {{ label }}
            </label>
            <input
                :id="`${htmlFor}`"
                class="input__field form-control"
                v-bind:type="type"
                v-on:input="handleEvent($event)"
            />
        </div>
    </div>
</template>
