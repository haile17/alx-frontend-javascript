import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }
    
    displayFullPrice(){
        return `${this.amount} ${this.currency.name} (${this.currency.code})`;        
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }

    set amount(Amount) {
        this._amount = Amount;
    }

    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency))
        throw TypeError ("currency must be an instance currency");
        this._currency = Currency;
    }

    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }
}

