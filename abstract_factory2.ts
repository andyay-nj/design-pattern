interface CakeMachine {
    process(): void;
}
class CheeseCakeMachine implements CakeMachine {
    public process(): void {
        console.log("치즈케익을 만들어요");
    }
}
class CreamCakeMachine implements CakeMachine {
    public process(): void {
        console.log("생크림케이크를 만들어요");
    }
}


interface BeverageMachine {
    process(): void;
}
class CoffeeMachine implements BeverageMachine {
    public process(): void {
        console.log("커피를 만들어요");
    }
}
class MilkMachine implements BeverageMachine {
    public process(): void {
        console.log("우유를 만들어요");
    }
}


interface MachineFactory {
    getCakeMachine(): CakeMachine;
    getBeverageMachine(): BeverageMachine;
}
class MachineFactoryA implements MachineFactory{
    public getCakeMachine(): CakeMachine {
        return new CheeseCakeMachine();
    }
 
    public getBeverageMachine(): BeverageMachine {
        return new CoffeeMachine();
    }
}
 
class MachineFactoryB implements MachineFactory {
    public getCakeMachine(): CakeMachine {
        return new CreamCakeMachine();
    }
 
    public getBeverageMachine(): BeverageMachine {
        return new MilkMachine();
    }
}


export class Main {
    setA = new MachineFactoryA();
    setB = new MachineFactoryB();
 
    public main(): void {
        console.log("setA제품은");
        this.setA.getCakeMachine().process();
        this.setA.getBeverageMachine().process();
         
        console.log("setB제품은");
        this.setB.getCakeMachine().process();
        this.setB.getBeverageMachine().process();    
    }
}