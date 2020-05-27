interface PaymentPolicy {
    pay(customer: string): void;
}

class Customer {
    changePayment(customer: string, payment: PaymentPolicy): void {
        payment.pay(customer);
    }
}

export class Card implements PaymentPolicy {
    pay(customer: string): void {
        console.log(`${customer} 💳카드긁기`);
    }
}

export class Cash implements PaymentPolicy {
    pay(customer: string): void {
        console.log(`${customer} 💵현금내기`);
    }
}

export class Main {
    customer = new Customer();
    // card = new Card();
    // cash = new Cash();

    main(customer: string, payment: PaymentPolicy): void {
        this.customer.changePayment(customer, payment);
    }
}

//basic
/**

interface PaymentPolicy {
    pay(): void;
}

class Customer {
    changePayment(payment: PaymentPolicy): void {
        payment.pay();
    }
}

class Card implements PaymentPolicy {
    pay(): void {
        console.log('💳카드긁기');
    }
}

class Cash implements PaymentPolicy {
    pay(): void {
        console.log('💵현금내기');
    }
}

export class Main {
    customer = new Customer();
    card = new Card();
    cash = new Cash();

    main(): void {
        this.customer.changePayment(this.cash);
        this.customer.changePayment(this.card);
        this.customer.changePayment(this.cash);
    }
}

 */