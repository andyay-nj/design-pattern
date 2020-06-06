//공통기능을 제공할 신발원재료공장
interface ShoesIngredientFactory {
    makeBottom(): Bottom;
    makeLeather(): Leather;
    hasPattern(): boolean;
}


/* 신발원재료 공장 구현하는 클래스 start */
//한국 매장으로 가는 재료 공장
class KRShoesIngredientFactory implements ShoesIngredientFactory {
    public makeBottom(): Bottom {
        return new RubberBottom();
    }
 
    public makeLeather(): Leather {
        return new LeatherOfCows();
    }
    
    public hasPattern(): boolean {
        return false;
    }
}
 
//독일 매장으로 가는 재료 공장
class DEShoesIngredientFactory implements ShoesIngredientFactory {
    public makeBottom(): Bottom {
        return new PlasticAndRubberBottom();
    }
    
    public makeLeather(): Leather {
        return new LeatherOfSheeps();
    }
    
    public hasPattern(): boolean {
        return true;
    }
}
/* 신발원재료 공장 구현하는 클래스 end */

//재료 인터페이스
interface Bottom {
    getName(): string;
}
interface Leather {
    getName(): string;
}


/* 재료 구현하는 클래스 start */
//고무 밑창
class RubberBottom implements Bottom {
    public getName(): string {
        return "고무";
    }
}
 
//플라스틱과 고무 혼합
class PlasticAndRubberBottom implements Bottom {
    public getName(): string {
        return "플라스틱과 고무의 혼합";
    }
}
 
//소가죽
class LeatherOfCows implements Leather {
    public getName(): string {
        return "소가죽";
    }
}
 
//양가죽
class LeatherOfSheeps implements Leather {
    public getName(): string {
        return "양가죽";
    }
}
/* 재료 구현하는 클래스 end */



abstract class Shoes {
    name: String;
    bottom: Bottom;
    leather: Leather;
    hasPattern: boolean;
 
    abstract assembling(): void;
 
    prepare(): void {
        console.log("완성된 신발을 준비 중 입니다..");
    }
 
    packing(): void {
        console.log("신발을 포장 하고 있습니다..");
    }
 
    public getName(): string {
        return name;
    }
 
    public setName(name: string): void {
        this.name = name;
    }
}

/* 구두 구현하는 클래스 start */
class BlackShoes extends Shoes {
    shoesIngredientFactory: ShoesIngredientFactory;
 
    // public BlackShoes(shoesIngredientFactory: ShoesIngredientFactory) {
    //     this.shoesIngredientFactory = shoesIngredientFactory;
    // }
 
    assembling(): void {
        console.log("신발을 만들고 있습니다.. ");
        this.leather = this.shoesIngredientFactory.makeLeather();
        this.bottom = this.shoesIngredientFactory.makeBottom();
        console.log("신발 정보 : 밑창은 " + this.bottom.getName() + " 사용 하였으며 가죽은 " + this.leather.getName() + " 사용하였음");
    }
}
 
class BrownShoes extends Shoes {
    shoesIngredientFactory: ShoesIngredientFactory;
 
    // public BrownShoes(shoesIngredientFactory: ShoesIngredientFactory) {
    //     this.shoesIngredientFactory = shoesIngredientFactory;
    // }
    
    assembling(): void { 
        console.log("신발을 만들고 있습니다.. ");
        this.leather = this.shoesIngredientFactory.makeLeather();
        this.bottom = this.shoesIngredientFactory.makeBottom();
        console.log("신발 정보 : 밑창은 " + this.bottom.getName() + " 사용 하였으며 가죽은 " + this.leather.getName() + " 사용하였음");
    }
}
 
class RedShoes extends Shoes {
    shoesIngredientFactory: ShoesIngredientFactory;
 
    // public RedShoes(shoesIngredientFactory: ShoesIngredientFactory) {
    //     this.shoesIngredientFactory = shoesIngredientFactory;
    // }
    
    assembling(): void {
        console.log("신발을 만들고 있습니다.. ");
        this.leather = this.shoesIngredientFactory.makeLeather();
        this.bottom = this.shoesIngredientFactory.makeBottom();
        console.log("신발 정보 : 밑창은 " + this.bottom.getName() + " 사용 하였으며 가죽은 " + this.leather.getName() + " 사용하였음");
    }
 
}
/* 구두 구현하는 클래스 end */


// 주문받는 스토어 객체
abstract class ShoesStore {
    shoes: Shoes;
 
    public orderShoes(name: string): Shoes { 
        this.shoes = this.makeShoes(name);
        this.shoes.assembling();
        this.shoes.prepare();
        this.shoes.packing();
 
        return this.shoes; 
    } 
    abstract makeShoes(name: string): Shoes; 
}

/* 스토어 구현하는 클래스 start */
class KRShoesStore extends ShoesStore {
    shoes: Shoes = null;
    shoesIngredientFactory = new KRShoesIngredientFactory();
    
    makeShoes(name: string): Shoes { 
        if (name === "blackShoes") { 
            this.shoes = new BlackShoes();
            this.shoes.setName("한국 스타일의 검은 구두"); 
        } else if (name === "brownShoes") { 
            this.shoes = new BrownShoes();
            this.shoes.setName("한국 스타일의 갈색 구두");
        } else if (name === "redShoes") { 
            this.shoes = new RedShoes();
            this.shoes.setName("한국 스타일의 빨간 구두");
        } 
        return this.shoes; 
    } 
}
 
class DEShoesStore extends ShoesStore {
    shoes: Shoes = null;
    shoesIngredientFactory = new DEShoesIngredientFactory();
    
    makeShoes(name: string): Shoes { 
        if (name === "blackShoes") { 
            this.shoes = new BlackShoes();
            this.shoes.setName("독일 스타일의 검은 구두");
 
        } else if (name === "brownShoes") { 
            this.shoes = new BrownShoes();
            this.shoes.setName("독일 스타일의 갈색 구두");
        } else if (name === "redShoes") { 
            this.shoes = new RedShoes();
            this.shoes.setName("독일 스타일의 빨간 구두");
        }
        return this.shoes;
    } 
}
/* 스토어 구현하는 클래스 end */



// 주문 go!
export class Main {
    jpStore = new KRShoesStore();
    frStore = new DEShoesStore();

    public main(): void {
        this.jpStore.orderShoes("blackShoes");
 
        this.frStore.orderShoes("redShoes");
    }
}

/**
 * 누군가 한국 매장과 독일 매장으로 가서 구두를 주문합니다.
한국 매장에서 검은 구두를 주문하면, 매장에서는 주문을 받고 (orderShoes) 
주문을 받은 구두장이는 한국 매장을 담당하는 원 재료 공장에 알맞는 재료를 요청합니다. (makingShoes)
그럼 원재료 공장이 가동되고, 알맞는 구두의 재료가 제작됩니다.
그리고 이 재료들을 가지고 구두장이가 조합을 해서 구두를 만듭니다.
그리고 포장을 해서 고객들에게 보내지게 됩니다.
결과적으로, 추상 팩토리 패턴을 사용하면 객체들 간의 결합이 느슨해져서 유지 보수에 유용하게 사용 될 수 있습니다.
 */
