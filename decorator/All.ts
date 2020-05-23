//최상위 햄버거
export abstract class Hamburger {
    
    //장식 할 대상과 장식자가 공통으로 가져야 할 인터페이스를 정의
    public abstract add_ingredient(): void;
}


export abstract class Ingredient extends Hamburger {
    
    public hamburger: Hamburger;
}


export class MakeBurger {
    private burger: Bread;
    private burger2: Bulgogi;
    private burger3: Bulgogi;
    private burger4: Shrimp;

    public main(): void {
        //아무런 장식이 더해지지 않은 빵만 있는 형태 
        console.log(this.burger.add_ingredient());
        
        //기본빵에 불고기패티를 추가하는 형태
        console.log(this.burger2.add_ingredient());
        
        //기본빵+불고기패티에 불고기 패티를 추가
        console.log(this.burger3.add_ingredient());
        
        //기본빵+불고기패티+불고기패티에 새우패티 추가
        console.log(this.burger4.add_ingredient());
    }
}


//장식할 빵
export class Bread extends Hamburger {

    add_ingredient(): string {
        return '기본 빵 덮고~';
    }
}


export class Bulgogi extends Ingredient {
    private burger: string;
    
    constructor(burger: string) {
        super();
        this.burger = burger;
    }
    
    add_ingredient(): void {
        console.log(this.burger + "+" +"불고기 패티");
    }
}
 

export class Shrimp extends Ingredient {
    private burger: string;
    
    constructor(burger: string) {
        super();
        this.burger = burger;
    }

    add_ingredient(): void {
        console.log(this.burger + "+" +"새우 패티");
    }
}
 