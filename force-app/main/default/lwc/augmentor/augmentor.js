import { LightningElement, api } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;

    handleStartChange(event) {
        this.startCounter = parseInt(event.target.value);
    }

    handleMaximizeCounter(event) {
        const maximize = event.target.dataset.maximize;
        this.template.querySelector('c-numerator').maximizeCounter(
            new CustomEvent('maximize', { detail: maximize })
        );
    }
}