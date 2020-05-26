interface Customer {
    update(): void;
}

interface ControlTower {
    subscribe(customer: Customer): void;
    notifier(info: string): void;
}

class Station implements ControlTower {
    private customer: Customer[] = [];
    private info: string;

    public subscribe(customer: Customer): void {
        this.customer.push(customer);
    }

    public setInfo(info: string) {
        this.info = info;
        this.notifier();
    }

    public notifier(): void {
        this.customer.forEach(customer => customer.update());
    }

    public getInfo(): string {
        return this.info;
    }
}

class Passenger implements Customer {
    constructor(private station: Station) {}
    public update(): void {
        console.log(`🔈승객여러분, 기차플랫폼이 ${this.station.getInfo()}으로 변경되었습니다.`);
    }
}

export class Main {
    station = new Station();
    passenger = new Passenger(this.station);

    public main(): void {
        this.station.subscribe(this.passenger);
        this.station.setInfo('A23');
        this.station.setInfo('I13');

        /**
         * 🔈승객여러분, 기차플랫폼이 A23으로 변경되었습니다.
         * 🔈승객여러분, 기차플랫폼이 I13으로 변경되었습니다.
         */
    }
}