import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    // @api counter = 0;
    _currentCount = 0;
    priorCount = 0;
    @api get counter() {
        return this._currentCount;
    }
    set counter(value) {
        this.priorCount = this._currentCount;
        this._currentCount = value;
    }

    @api
    maximizeCounter(event) {
        const maximize = event.detail;
        this._currentCount += parseInt(maximize);
    }
    
    handleIncrement() {
        this.counter++;
    }

    handleDecrement() {
        this.counter--;
    }

    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
    }
}