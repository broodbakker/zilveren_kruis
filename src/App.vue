<template>
    <div id="app" class="main-placeholder">
        <!-- HEADER -->
        <NavBar />
        <!-- CONTENT HERE -->
        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>
                    <h2>Gegevens</h2>
                    <div class="form-group">
                        <h3>Reden van aanmelding</h3>
                        <div class="form-input my-4">
                            <label id="aanmeldreden-label" class="input__title">
                                Wat is de reden van uw aanvraag?
                            </label>
                            <div class="input__group">
                                <select
                                    class="form-control"
                                    v-model="event.aanvraagReden"
                                >
                                    <option>
                                        Nieuwe werkgever met collectiviteit bij
                                        Zilveren Kruis
                                    </option>
                                    <option selected>
                                        Overstappen per 1-1-2023 naar Zilveren
                                        Kruis
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <h3>Persoonlijke gegevens</h3>
                        <CustomInput
                            label="Naam"
                            htmlFor="input-name"
                            type="text"
                            v-on:handleEvent="handleNaam($event)"
                        />
                        <CustomInput
                            htmlFor="input-infixes"
                            label="Tussenvoegsels"
                            type="text"
                            v-on:handleEvent="handleTussenvoegsels($event)"
                        />
                        <CustomInput
                            htmlFor="input-lastname"
                            label="Achternaam"
                            type="text"
                            v-on:handleEvent="handleAchternaam($event)"
                        />
                        <GeslachtInput
                            label="Geslacht"
                            v-on:handleEvent="handleGeslacht($event)"
                        />
                        <CustomInput
                            htmlFor="input-birthdate"
                            label="Geboortedatum"
                            type="date"
                            v-on:handleEvent="handleGeboortedatum($event)"
                        />
                        <BsnInput
                            label="Burgerservicenummer"
                            type="text"
                            v-on:handleEvent="handleBSN($event)"
                            v-on:handleBlur="handleValidBSN($event)"
                            :isInvalid="event.burgerservicenummer.isInvalid"
                        />
                    </div>

                    <h2 class="mt-5">Verzekering</h2>
                    <div class="form-group">
                        <h3>Basisverzekering</h3>
                        <p>
                            In Nederland is de basisverzekering verplicht.
                            Iedereen wordt voor de basisverzekering
                            geaccepteerd. De overheid bepaalt welke zorg hierin
                            zit en dit is dus bij elke verzekeraar hetzelfde.
                        </p>
                        <div class="input__group">
                            <label class="input__title">
                                Kies uw basisverzekering
                            </label>
                            <BasisVerzekeringInput
                                v-on:handleEvent="
                                    handleBasisVerzekering($event)
                                "
                                :prices="[1393.26, 1483.54, 1624.62]"
                            />
                        </div>
                    </div>
                    <BetaaltermijnInput
                        label="Kies je betaaltermijn"
                        v-on:handleEvent="handleBetaaltermijn($event)"
                    />
                    <div class="form-group">
                        <h3>Eigen risico</h3>
                        <EigenRisicoInput
                            label="Kies de hoogste van het eigen risico"
                            v-on:handleEvent="handleEigenRisico($event)"
                            :isInvalid="!event.basisVerzekering.hasClicked"
                        />
                        <div
                            class="input__feedback invalid-feedback mt-1"
                            aria-live="polite"
                            v-if="!event.basisVerzekering.hasClicked"
                        >
                            <span
                                >Je kan alleen een eigen risico kiezen als als
                                je een basisVerzekering hebt gekozen</span
                            >
                        </div>
                        <div
                            class="input__feedback invalid-feedback mt-1"
                            aria-live="polite"
                        ></div>
                    </div>
                    <div class="form-group">
                        <h3>Aanvullende verzekering</h3>
                        <p>
                            Onze aanvullende verzekeringen kennen ruim 100
                            verschillende vergoedingen. De hoogte van de
                            vergoeding verschilt per pakket.hoogte van de
                            vergoeding verschilt per pakket
                        </p>

                        <AanvullendeVerzekeringInput
                            label="Kies uw aanvullende verzekering"
                            v-on:handleEvent="
                                handleAanvullendeVerzekering($event)
                            "
                            :prices="[0, 21.38, 85.06, 198.63, 359.73]"
                        />
                    </div>
                    <TandartsVerzekeringInput
                        v-on:handleEvent="handleTandartsVerzekering($event)"
                        label="Kies uw tandartsverzekering"
                        :prices="[0, 80.28, 221.65, 449.36]"
                    />
                </div>
            </div>
        </div>
        <IngevuldeGegevens
            :event="this.event"
            :getVolledigeNaam="getVolledigeNaam"
            :validBSN="validBSN"
            :getTotalePremie="getTotalePremie"
        />
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
import IngevuldeGegevens from '@/components/ingevuldeGegevens';
import CustomInput from '@/components/input/customInput';
import BsnInput from '@/components/input/BsnInput';
import GeslachtInput from '@/components/input/geslachtInput';
import BasisVerzekeringInput from '@/components/input/basisVerzekeringInput';
import BetaaltermijnInput from '@/components/input/betaaltermijnInput';
import EigenRisicoInput from '@/components/input/eigenRisicoInput';
import AanvullendeVerzekeringInput from '@/components/input/aanvullendeVerzekeringInput';
import TandartsVerzekeringInput from '@/components/input/tandartsVerzekeringInput';

export default {
    components: {
        NavBar,
        IngevuldeGegevens,
        Footer,
        CustomInput,
        BsnInput,
        GeslachtInput,
        BasisVerzekeringInput,
        BetaaltermijnInput,
        EigenRisicoInput,
        AanvullendeVerzekeringInput,
        TandartsVerzekeringInput
    },
    name: 'App',
    data() {
        return {
            event: {
                aanvraagReden: '',
                naam: '',
                tussenvoegsels: '',
                achternaam: '',
                geslacht: '',
                geboortedatum: '',
                burgerservicenummer: {
                    name: '',
                    isInvalid: false
                },
                basisVerzekering: {
                    name: 'Nog geen keuze gemaakt',
                    price: 0,
                    hasClicked: false
                },
                betaaltermijn: {
                    name: 'per jaar',
                    termijn: 1
                },
                eigenRisico: {
                    name: '€ 385 - verplicht eigen risico',
                    price: 0
                },
                aanvullendeVerzekering: {
                    name: 'Geen aanvullende verzekering geselecteerd',
                    price: 0
                },
                tandartsVerzekering: {
                    name: 'Geen tandartsverzekering geselecteerd',
                    price: 0
                }
            }
        };
    },
    methods: {
        handleGeboortedatum: function (e) {
            this.event.geboortedatum = e.target.value
                .split('-')
                .reverse()
                .join('-');
        },
        handleBSN: function (e) {
            this.event.burgerservicenummer = {
                ...this.event.burgerservicenummer,
                name: e.target.value
            };
        },
        handleValidBSN: function (e) {
            const name = parseInt(e.target.value);

            const regexPattern = /^\d{8,9}$/;
            const isInvalid = !regexPattern.test(name);

            this.event.burgerservicenummer = {
                ...this.event.burgerservicenummer,
                isInvalid
            };
        },
        handleBasisVerzekering: function (prop) {
            this.event.basisVerzekering = {
                name: prop.event.target.value,
                price: prop.price,
                hasClicked: true
            };
        },
        handleBetaaltermijn: function (e) {
            const termijn = parseFloat(
                event.target.options[
                    event.target.options.selectedIndex
                ].getAttribute('termijn')
            );
            this.event.betaaltermijn = {
                name: e.target.value,
                termijn
            };
        },
        handleEigenRisico: function (e) {
            const price = parseFloat(
                event.target.options[
                    event.target.options.selectedIndex
                ].getAttribute('price')
            );
            this.event.eigenRisico = {
                name: e.target.value,
                price
            };
        },
        handleAanvullendeVerzekering: function (e) {
            const price = parseFloat(
                event.target.options[
                    event.target.options.selectedIndex
                ].getAttribute('price')
            );
            this.event.aanvullendeVerzekering = {
                name: e.target.value,
                price
            };
        },
        handleTandartsVerzekering: function (e) {
            const price = parseFloat(
                event.target.options[
                    event.target.options.selectedIndex
                ].getAttribute('price')
            );
            this.event.tandartsVerzekering = {
                name: e.target.value,
                price
            };
        },
        handleNaam: function (event) {
            this.event.naam = event.target.value;
        },
        handleTussenvoegsels: function (event) {
            this.event.tussenvoegsels = event.target.value;
        },
        handleAchternaam: function (event) {
            this.event.achternaam = event.target.value;
        },
        handleGeslacht: function (event) {
            this.event.geslacht = event.target.value;
        }
    },
    computed: {
        getVolledigeNaam: function () {
            return `${this.event.naam} ${this.event.tussenvoegsels} ${this.event.achternaam}`;
        },
        validBSN: function () {
            const regexPattern = /^\d{9}$/;
            const bsn = this.event.burgerservicenummer.name;

            return regexPattern.test(bsn) ? bsn : '';
        },
        getTotalePremie: function () {
            const basisVerzekering = this.event.basisVerzekering.price;
            const korting = this.event.eigenRisico.price;

            const aanvullend = this.event.aanvullendeVerzekering.price;
            const tandarts = this.event.tandartsVerzekering.price;

            const totaal = this.event.basisVerzekering.hasClicked
                ? basisVerzekering + korting + aanvullend + tandarts
                : 0;
            return (
                Math.round(
                    (totaal / this.event.betaaltermijn.termijn +
                        Number.EPSILON) *
                        100
                ) / 100
            );
        }
    }
};
</script>

<style lang="scss"></style>
