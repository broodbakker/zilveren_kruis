<script>
export default {
    props: {
        label: String,
        type: String,
        isInvalid: Boolean
    },
    methods: {
        handleEvent: function (event) {
            this.$emit('handleEvent', event);
        },
        handleBlur: function (event) {
            this.$emit('handleBlur', event);
        }
    }
};
</script>

<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label for="bsn-input" class="input__title">
                {{ label }}
            </label>
            <input
                id="bsn-input"
            aria-errormessage="msgID"
             aria-invalid="true"
                class="input__field form-control"
                :class="{ 'is-invalid': isInvalid }"
                v-bind:type="type"
                v-on:input="handleEvent($event)"
                v-on:blur="handleBlur($event)"
            />
        </div>
        <div
            class="input__feedback invalid-feedback mt-1"
            aria-live="polite"
            v-if="isInvalid"
        >
            <span
            id="msgID" >
                Helaas is het ingevoerde burgerservicenummer niet geldig.
                Probeer het opnieuw.
            </span>
        </div>
    </div>
</template>
