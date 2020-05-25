//최상위 햄버거
abstract class Hamburger {   
    //장식 할 대상과 장식자가 공통으로 가져야 할 인터페이스를 정의
    abstract add_ingredient(): string;
}

//장식할 빵
class Bread extends Hamburger {
    public add_ingredient(): string {
        return '기본빵';
    }
}

abstract class Ingredient extends Hamburger {
    public abstract add_ingredient(): string;
}

class Bulgogi extends Ingredient {
    constructor(private burger: string) {
        super();
    }
    public add_ingredient(): string {
        return `${this.burger} + 불고기패티`;
    }
}

class Shrimp extends Ingredient {
    constructor(private burger: string) {
        super();
    }
    public add_ingredient(): string {
        return `${this.burger} + 새우패티`;
    }
} 

export class MakeBurger {
    bread = new Bread().add_ingredient();
    bulgogi_burger =  new Bulgogi(this.bread).add_ingredient();
    shrimp_burger =  new Shrimp(this.bread).add_ingredient();
    bulgogi_shrimp_burger = new Shrimp(this.bulgogi_burger).add_ingredient();
    
    public main(): void {
        console.log('1',this.bread); //기본빵
        console.log('2',this.bulgogi_burger); //기본빵+불고기패티
        console.log('3',this.shrimp_burger); //기본빵+새우패티
        console.log('4',this.bulgogi_shrimp_burger); //기본빵+불고기패티+새우패티
    }
}

