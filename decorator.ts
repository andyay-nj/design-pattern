//최상위 햄버거
abstract class Hamburger {   
    //장식 할 대상과 장식자가 공통으로 가져야 할 인터페이스를 정의
    abstract add_ingredient(ingredient?: Hamburger): string;
}

//장식할 빵
class Bread extends Hamburger {
    public add_ingredient(ingredient: Hamburger): string {
        return `기본빵 + ${ingredient.add_ingredient()}`;
    }
}

abstract class Ingredient extends Hamburger {
    public abstract add_ingredient(): string;
    
}

class Bulgogi extends Ingredient {
    public add_ingredient(): string {
        return `불고기패티`;
    }
}

class Shrimp extends Ingredient {
    public add_ingredient(): string {
        return `새우패티`;
    }
} 

export class MakeBurger {
    bread = new Bread();
    bulgogi_burger =  this.bread.add_ingredient(new Bulgogi());
    shrimp_burger =  this.bread.add_ingredient(new Shrimp());
    // bulgogi_shrimp_burger =  this.bread.add_ingredient(new Bulgogi());
    
    public main(): void {
        console.log('1',this.bulgogi_burger);
        console.log('2',this.shrimp_burger);
        // console.log('4',this.bulgogi_shrimp_burger);
        /**
         * 1 '기본빵+불고기패티'
         * 2 '기본빵+새우패티'
         */
    }
}