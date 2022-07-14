<script>
export default {
    props: {
        getVolledigeNaam: String,
        validBSN: String,
        getTotalePremie: Number,
        event: {
            aanvraagReden: String,
            naam: String,
            tussenvoegsels: String,
            achternaam: String,
            geslacht: String,
            geboortedatum: String,
            burgerservicenummer: {
                name: String,
                isInvalid: {
                    type: Boolean,
                    required: true,
                    default: false
                }
            },
            basisVerzekering: {
                name: {
                    type: String,
                    required: true,
                    default: 'Nog geen keuze gemaakt'
                },
                price: {
                    type: Number,
                    required: true,
                    default: 0
                },
                hasClicked: {
                    type: Boolean,
                    required: true,
                    default: false
                }
            },
            betaaltermijn: {
                name: {
                    type: String,
                    required: true,
                    default: 'per jaar'
                },
                termijn: {
                    type: Number,
                    required: true,
                    default: 4
                }
            },
            eigenRisico: {
                name: String,
                price: {
                    type: Number,
                    required: true,
                    default: '€ 385 - verplicht eigen risico'
                }
            },
            aanvullendeVerzekering: {
                name: {
                    type: String,
                    required: true,
                    default: 'Geen aanvullende verzekering geselecteerd'
                },
                price: {
                    type: Number,
                    required: true,
                    default: 0
                }
            },
            tandartsVerzekering: {
                name: {
                    type: String,
                    required: true,
                    default: 'Geen tandartsverzekering geselecteerd'
                },
                price: {
                    type: Number,
                    required: true,
                    default: 0
                }
            }
        }
    }
};
</script>

<template>
    <div class="ml-4">
        <h2 class="mt-5">Controleren</h2>
        <div class="form-group">
            <h3>Gekozen pakket</h3>
        </div>

        <div class="form-group">
            <p>Basisverzekering: {{ event.basisVerzekering.name }}</p>
        </div>
        <div class="form-group">
            <p>Eigen risico: {{ event.eigenRisico.name }}</p>
        </div>
        <div class="form-group">
            <p>
                Aanvullende verzekering:
                {{ event.aanvullendeVerzekering.name }}
            </p>
        </div>

        <div class="form-group">
            <p>
                Tandartsverzekering:
                {{ event.tandartsVerzekering.name }}
            </p>
        </div>
        <div class="form-group">
            <h3>Totaalpremie</h3>
        </div>
        <div class="form-group">
            <p>
                Totale premie {{ event.betaaltermijn.name }}: €
                {{ getTotalePremie }}
            </p>
        </div>

        <div class="form-group">
            <h3>Adres en contactgegevens</h3>
            <div class="form-group">
                <p>Volledige naam: {{ getVolledigeNaam }}</p>
            </div>
            <div class="form-group">
                <p>Geslacht: {{ event.geslacht }}</p>
            </div>

            <div class="form-group">
                <p>Geboortedatum: {{ event.geboortedatum }}</p>
            </div>

            <div class="form-group">
                <p>
                    Burgerservicenummer:
                    {{ validBSN }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
