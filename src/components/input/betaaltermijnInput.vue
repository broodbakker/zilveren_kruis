<script>
export default {
    props: {
        label: String
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
                <label for="betaal-termijn" class="input__title">
                    {{ label }}
                </label>
                <select
                    id="betaal-termijn"
                    class="form-control"
                    v-on:input="handleEvent($event)"
                >
                    <option termijn="12">per maand</option>
                    <option termijn="4">per kwartaal</option>
                    <option selected termijn="1">per jaar</option>
                </select>
            </div>
        </div>
    </div>
</template>
