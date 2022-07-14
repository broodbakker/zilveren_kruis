/**
 * @jest-environment jsdom
 */
import Form from '../../src/App.Vue';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

const setup = () => {
    const utils = render(Form);
    const inputNaam = screen.getByLabelText('Naam', { selector: 'input' });
    const inputTussenVoegsel = screen.getByLabelText('Tussenvoegsels', {
        selector: 'input'
    });
    const inputAchternaam = screen.getByLabelText('Achternaam', {
        selector: 'input'
    });
    const inputGeboortedatum = screen.getByLabelText('Geboortedatum', {
        selector: 'input'
    });
    const inputAanvullendeVerzekering = screen.getByRole('combobox', {
        name: /kies uw aanvullende verzekering/i
    });
    const optionAanvullend1 = screen.getByRole('option', {
        name: /aanvullend 1 - € 21\.38 per jaar/i
    });
    const optionAanvullend2 = screen.getByRole('option', {
        name: /aanvullend 2 - € 85\.06 per jaar/i
    });
    const optionAanvullend3 = screen.getByRole('option', {
        name: /aanvullend 3 - € 198\.63 per jaar/i
    });
    const optionAanvullend4 = screen.getByRole('option', {
        name: /aanvullend 4 - €359\.73 per jaar/i
    });
    const inputBasisverzekeringBudget = screen.getByRole('radio', {
        name: /basis budget € 1393\.26 per jaar/i
    });
    const inputBasisverzekeringBasis = screen.getByRole('radio', {
        name: /basis zeker € 1483\.54 per jaar/i
    });
    const inputBasisverzekeringZeker = screen.getByRole('radio', {
        name: /basis zeker € 1483\.54 per jaar/i
    });
    const inputBetaaltermijn = screen.getByRole('combobox', {
        name: /kies je betaaltermijn/i
    });
    const optionTermijnMaand = screen.getByRole('option', {
        name: /per maand/i
    });
    const optionTermijnKwartaal = screen.getByRole('option', {
        name: /per kwartaal/i
    });
    const optionTermijnJaar = screen.getByRole('option', {
        name: 'per jaar'
    });
    const inputBSN = screen.getByRole('textbox', {
        name: /burgerservicenummer/i
    });
    const inputEigenRisico = screen.getByRole('combobox', {
        name: /kies de hoogste van het eigen risico/i
    });
    const optionEigenRisicoVerplicht = screen.getByRole('option', {
        name: /€ 385 - verplicht eigen risico/i
    });
    const optionEigenRisicoKorting = screen.getByRole('option', {
        name: /€ 885 - korting van € 22 per jaar/i
    });
    const inputGeslachtMan = screen.getByRole('radio', {
        name: /man/i
    });
    const inputGeslachtVrouw = screen.getByRole('radio', {
        name: /vrouw/i
    });
    const inputTandartsVerzekering = screen.getByRole('combobox', {
        name: /kies uw tandartsverzekering/i
    });
    const optionTandarts1 = screen.getByRole('option', {
        name: /tand 1 - € 80\.28 per jaar/i
    });
    const optionTandarts2 = screen.getByRole('option', {
        name: /tand 2 - € 221\.65 per jaar/i
    });
    const optionTandarts3 = screen.getByRole('option', {
        name: /tand 3 - € 449\.36 per jaar/i
    });

    return {
        ...utils,
        inputNaam,
        inputTussenVoegsel,
        inputAchternaam,
        inputGeboortedatum,
        inputAanvullendeVerzekering,
        inputBasisverzekeringBudget,
        inputBasisverzekeringBasis,
        inputBasisverzekeringZeker,
        inputBetaaltermijn,
        inputBSN,
        inputEigenRisico,
        optionEigenRisicoVerplicht,
        optionEigenRisicoKorting,
        inputGeslachtMan,
        inputGeslachtVrouw,
        inputTandartsVerzekering,
        optionAanvullend1,
        optionAanvullend2,
        optionAanvullend3,
        optionAanvullend4,
        optionTandarts1,
        optionTandarts2,
        optionTandarts3,
        optionTermijnMaand,
        optionTermijnKwartaal,
        optionTermijnJaar
    };
};

describe('form', () => {
    const user = userEvent.setup();

    it('renders input Components', () => {
        const {
            inputNaam,
            inputTussenVoegsel,
            inputAchternaam,
            inputGeboortedatum,
            inputAanvullendeVerzekering,
            inputBasisverzekeringBudget,
            inputBasisverzekeringBasis,
            inputBasisverzekeringZeker,
            inputBetaaltermijn,
            inputBSN,
            inputEigenRisico,
            optionEigenRisicoVerplicht,
            optionEigenRisicoKorting,
            inputGeslachtMan,
            inputGeslachtVrouw,
            inputTandartsVerzekering,
            optionAanvullend1,
            optionAanvullend2,
            optionAanvullend3,
            optionAanvullend4,
            optionTandarts1,
            optionTandarts2,
            optionTandarts3,
            optionTermijnMaand,
            optionTermijnKwartaal,
            optionTermijnJaar
        } = setup();

        expect(inputNaam).toBeInTheDocument();
        expect(inputTussenVoegsel).toBeInTheDocument();
        expect(inputAchternaam).toBeInTheDocument();
        expect(inputGeboortedatum).toBeInTheDocument();
        expect(inputAanvullendeVerzekering).toBeInTheDocument();
        expect(inputBasisverzekeringBudget).toBeInTheDocument();
        expect(inputBasisverzekeringBasis).toBeInTheDocument();
        expect(inputBasisverzekeringZeker).toBeInTheDocument();
        expect(inputBetaaltermijn).toBeInTheDocument();
        expect(inputBSN).toBeInTheDocument();
        expect(inputAchternaam).toBeInTheDocument();
        expect(inputGeslachtMan).toBeInTheDocument();
        expect(inputGeslachtVrouw).toBeInTheDocument();
        expect(inputTandartsVerzekering).toBeInTheDocument();
        expect(inputEigenRisico).toBeInTheDocument();
        expect(optionEigenRisicoVerplicht).toBeInTheDocument();
        expect(optionEigenRisicoKorting).toBeInTheDocument();
        expect(optionAanvullend1).toBeInTheDocument();
        expect(optionAanvullend3).toBeInTheDocument();
        expect(optionAanvullend2).toBeInTheDocument();
        expect(optionAanvullend4).toBeInTheDocument();
        expect(optionTandarts1).toBeInTheDocument();
        expect(optionTandarts2).toBeInTheDocument();
        expect(optionTandarts3).toBeInTheDocument();
        expect(optionTermijnMaand).toBeInTheDocument();
        expect(optionTermijnKwartaal).toBeInTheDocument();
        expect(optionTermijnJaar).toBeInTheDocument();
    });

    describe('on input', () => {
        it('show text volledige naam', async () => {
            const { inputNaam, inputTussenVoegsel, inputAchternaam } = setup();

            await user.type(inputNaam, 'Martijn');
            await user.type(inputTussenVoegsel, 'van de');
            await user.type(inputAchternaam, 'Ree');

            await waitFor(async () => {
                expect(
                    screen.getByText(/Volledige naam: Martijn van de Ree/i)
                ).toBeInTheDocument();
            });
        });
    });

    describe('validate', () => {
        it('first choose basisverzekering before eigen risico', async () => {
            const { inputEigenRisico, inputBasisverzekeringBudget } = setup();

            expect(inputEigenRisico).toBeDisabled();

            await user.click(inputBasisverzekeringBudget);

            await waitFor(async () => {
                expect(inputEigenRisico).not.toBeDisabled();
            });
        });

        it('BSN = valid 8 of 9 cijfers anders error', async () => {
            const { inputBSN } = setup();

            await user.type(inputBSN, '{selectall}{backspace}22');
            await user.tab();

            await waitFor(async () => {
                expect(inputBSN).toHaveErrorMessage(
                    /Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw./i
                );
            });

            await user.type(inputBSN, '{selectall}{backspace}44444444');
            await user.tab();

            await waitFor(async () => {
                expect(inputBSN).not.toHaveErrorMessage(
                    /Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw./i
                );
            });
        });
    });

    describe('alculate premie', () => {
        it('no input', async () => {
            setup();
            await waitFor(async () => {
                expect(
                    screen.getByText(/Totale premie per jaar: € 0/i)
                ).toBeInTheDocument();
            });
        });

        it('basisverzekeringbudget', async () => {
            const { inputBasisverzekeringBudget } = setup();
            await user.click(inputBasisverzekeringBudget);

            await waitFor(async () => {
                expect(
                    screen.getByText(/Totale premie per jaar: € 1393.26/i)
                ).toBeInTheDocument();
            });
        });

        it('basisverzekeringbudget + korting', async () => {
            const {
                inputBasisverzekeringBudget,
                inputEigenRisico,
                optionEigenRisicoKorting
            } = setup();

            await user.click(inputBasisverzekeringBudget);
            await user.selectOptions(
                inputEigenRisico,
                optionEigenRisicoKorting
            );

            await waitFor(async () => {
                expect(
                    screen.getByText(/Totale premie per jaar: € 1371.26/i)
                ).toBeInTheDocument();
            });
        });

        it('basisverzekeringZeker + eigen risico + option 2 tandarts + option 3 aanvullend verzekerd ', async () => {
            const {
                inputBasisverzekeringZeker,
                inputEigenRisico,
                optionEigenRisicoVerplicht,
                inputTandartsVerzekering,
                optionTandarts2,
                inputAanvullendeVerzekering,
                optionAanvullend3
            } = setup();

            await user.click(inputBasisverzekeringZeker);
            await user.selectOptions(
                inputEigenRisico,
                optionEigenRisicoVerplicht
            );
            await user.selectOptions(inputTandartsVerzekering, optionTandarts2);
            await user.selectOptions(
                inputAanvullendeVerzekering,
                optionAanvullend3
            );

            await waitFor(async () => {
                expect(
                    screen.getByText(/Totale premie per jaar: € 1903.82/i)
                ).toBeInTheDocument();
            });
        });

        it('basisverzekeringBudget per kwartaal', async () => {
            const {
                inputBasisverzekeringBudget,
                inputEigenRisico,
                optionEigenRisicoVerplicht,
                inputBetaaltermijn,
                optionTermijnKwartaal
            } = setup();

            await user.click(inputBasisverzekeringBudget);
            await userEvent.selectOptions(
                inputEigenRisico,
                optionEigenRisicoVerplicht
            );
            await user.selectOptions(inputBetaaltermijn, optionTermijnKwartaal);

            await waitFor(async () => {
                expect(
                    screen.getByText(/Totale premie per kwartaal: € 348.32/i)
                ).toBeInTheDocument();
            });
        });

        it('basisverzekeringBudget + korting + option 1 tandarts + option 4 aanvullend verzekerd per maand ', async () => {
            const {
                inputBasisverzekeringBudget,
                inputEigenRisico,
                inputTandartsVerzekering,
                inputBetaaltermijn,
                optionTermijnMaand,
                optionEigenRisicoKorting,
                optionTandarts1,
                optionAanvullend4,
                inputAanvullendeVerzekering
            } = setup();
            await user.click(inputBasisverzekeringBudget);
            await user.selectOptions(
                inputEigenRisico,
                optionEigenRisicoKorting
            );
            await user.selectOptions(inputTandartsVerzekering, optionTandarts1);
            await user.selectOptions(
                inputAanvullendeVerzekering,
                optionAanvullend4
            );
            await user.selectOptions(inputBetaaltermijn, optionTermijnMaand);

            await waitFor(async () => {
                expect(
                    screen.getByText(/Totale premie per maand: € 150.94/i)
                ).toBeInTheDocument();
            });
        });
    });
});
