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
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">{{ label }}</label>
            <div class="form-row">
                <div class="radio custom-radio radio__option">
                    <input
                        id="man"
                        class="radio__input custom-control-input"
                        type="radio"
                        name="geslacht"
                        v-on:input="handleEvent($event)"
                        value="man"
                    />
                    <label class="radio__label custom-control-label" for="man">
                        Man
                    </label>
                </div>
                <div class="radio custom-radio radio__option">
                    <input
                        id="vrouw"
                        class="radio__input custom-control-input"
                        type="radio"
                        name="geslacht"
                        v-on:input="handleEvent($event)"
                        value="vrouw"
                    />
                    <label
                        class="radio__label custom-control-label"
                        for="vrouw"
                    >
                        Vrouw
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
