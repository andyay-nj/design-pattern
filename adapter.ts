interface Duck {
    quack(): void;
    fly(): void;
}

class MallardDuck implements Duck {
    public quack(): void {
        console.log("Quack");
    }
    public fly(): void {
        console.log("I'm flying");
    }
}

interface Turkey {
    gobble(): void;
    fly(): void;
}

class WildTurkey implements Turkey{
    public gobble(): void {
        console.log("Gobble gobble");
    }
    public fly(): void {
        console.log("I'm flying a short distance");
    }
}

class TurkeyAdapter implements Duck {
    turkey: Turkey;
    public TurkeyAdapter(turkey: Turkey) {
             this.turkey = turkey;
    }
    public quack(): void {
        this.turkey.gobble();
    }
    public fly(): void {
        this.turkey.fly();
    }
}

export class Main {
    duck = new MallardDuck();
    turkey = new WildTurkey();
    Duck = new TurkeyAdapter();

    public main(): void {
        console.log("The turkey says...");
        this.turkey.gobble();
        this.turkey.fly();

        console.log("The Duck says...");
        this.testDuck(this.duck);

        console.log("The TurkeyAdapter says...");
        this.testDuck(this.Duck);
    }
    public testDuck(duck: Duck): void {
        duck.quack();
        duck.fly();
    }
}