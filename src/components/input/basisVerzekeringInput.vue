<script>
export default {
    props: {
        prices: Array
    },
    methods: {
        handleEvent: function (event, price) {
            this.$emit('handleEvent', { event, price });
        }
    }
};
</script>

<template>
    <div class="form-row">
        <div class="radio__tile">
            <div class="radio custom-radio radio__option">
                <input
                    value="Basis Budget"
                    type="radio"
                    name="radio-insurance"
                    id="radio-insurance-basis-budget"
                    class="radio__input custom-control-input"
                    v-on:input="handleEvent($event, prices[0])"
                />
                <label
                    for="radio-insurance-basis-budget"
                    class="radio__label custom-control-label"
                >
                    <p class="radio__description">Basis Budget</p>
                    <p class="radio__price">€ {{ prices[0] }} per jaar</p>
                </label>
            </div>
        </div>
        <div class="radio__tile radio__tile--choice">
            <div class="badge radio__tile-badge">Meest gekozen</div>
            <div class="radio custom-radio radio__option">
                <input
                    value="Basis Zeker"
                    type="radio"
                    name="radio-insurance"
                    id="radio-insurance-basis-zeker"
                    class="radio__input custom-control-input"
                    v-on:input="handleEvent($event, prices[1])"
                />
                <label
                    for="radio-insurance-basis-zeker"
                    class="radio__label custom-control-label"
                >
                    <p class="radio__description">Basis Zeker</p>
                    <p class="radio__price">€ {{ prices[1] }} per jaar</p>
                </label>
            </div>
        </div>
        <div class="radio__tile">
            <div class="radio custom-radio radio__option">
                <input
                    value="Basis Exclusief (Restitutie)"
                    type="radio"
                    name="radio-insurance"
                    id="radio-insurance-basis-exclusief-(restitutie)"
                    class="radio__input custom-control-input"
                    v-on:input="handleEvent($event, prices[0])"
                />
                <label
                    for="radio-insurance-basis-exclusief-(restitutie)"
                    class="radio__label custom-control-label"
                >
                    <p class="radio__description">
                        Basis Exclusief (Restitutie)
                    </p>
                    <p class="radio__price">€ {{ prices[2] }} per jaar</p>
                </label>
            </div>
        </div>
    </div>
</template>
