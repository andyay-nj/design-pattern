/*-------------- 구두 추상 클래스 ---------------*/
class Shoes {
    name: string;
    bottom: string;
    leather: string;
    hasPattern: boolean;
 
    prepare(): void {
        console.log("완성된 신발을 준비 중 입니다..");
    }

    packing(): void {
        console.log("신발을 포장 하고 있습니다..");
    }
 
    public getName(): string {
        return this.name;
    }
}
 
/*-------------- 신발 매장 추상 클래스 ---------------*/
abstract class ShoesStore {
    shoes: Shoes;

    public orderShoes (name: string): Shoes {
        this.shoes = this.makeShoes(name);
 
        this.shoes.prepare();
        this.shoes.packing();
 
        return this.shoes;
    }
    abstract makeShoes(name: string): Shoes;
}
 
/*-------------- 구체화 시킨 확장 매장 클래스 ---------------*/
class KoreaShoesStore extends ShoesStore {
    
    makeShoes(name: string): Shoes {
        // TODO Auto-generated method stub
        if (name === "blackShoes") {
            return new KRStyleBlackShoes() 
        } else if (name === "brownShoes") {
            return new KRStyleBrownShoes();
        } else if (name === "redShoes") {
            return new KRStyleRedShoes();
        } else {
            return null;
        }
    }
}
 
class GermanyShoesStore extends ShoesStore {
     
    makeShoes(name: string): Shoes {
        // TODO Auto-generated method stub
 
        if (name === "blackShoes") {
            return new DEStyleBlackShoes();
        } else if (name === "brownShoes") {
            return new DEStyleBrownShoes();
        } else if (name === "redShoes") {
            return new DEStyleRedShoes();
        } else {
            return null;
        }
    }
}
 
/*-------------- 구체화 시킨 구두 클래스 ---------------*/
class KRStyleBlackShoes extends Shoes {
    name = "한국 스타일의 검은 구두";
    bottom = "검은색 고무 밑창";
    leather = "소가죽";
    hasPattern = false;
}
 
class DEStyleBlackShoes extends Shoes {
    name = "독일 스타일의 검은 구두";
    bottom = "옅은 검은색의 플라스틱과 고무 혼용";
    leather = "양가죽";
    hasPattern = true;
}
 
class KRStyleBrownShoes extends Shoes {
    name = "한국 스타일의 갈색 구두";
    bottom = "진 갈색 고무 밑창";
    leather = "소가죽";
    hasPattern = false;
}
 
class DEStyleBrownShoes extends Shoes {
    name = "독일 스타일의 검은 구두";
    bottom = "밝은 갈색에 플라스틱과 고무 혼용";
    leather = "양가죽";
    hasPattern = true;
}
 
class KRStyleRedShoes extends Shoes {
    name = "한국 스타일의 빨간색과 와인색 중간의 구두";
    bottom = "와인색 고무 밑창";
    leather = "소가죽";
    hasPattern = false;
}
 
class DEStyleRedShoes extends Shoes {
    name = "독일 스타일의 버건디 색에 가까운 구두";
    bottom = "빨간 검은색의 플라스틱과 고무 혼용";
    leather = "양가죽";
    hasPattern = true;
}


export class Main {
    krStore: ShoesStore = new KoreaShoesStore();
    deStore: ShoesStore = new GermanyShoesStore(); 
    shoes: Shoes;

    public main(): void {
        this.shoes = this.krStore.orderShoes("blackShoes");
        console.log("한국 매장에서 산 구두는 ? --> " + this.shoes.getName());
        console.log();
 
        this.shoes = this.deStore.orderShoes("blackShoes");
        console.log("독일 매장에서 산 구두는 ? --> " + this.shoes.getName());
    }
}