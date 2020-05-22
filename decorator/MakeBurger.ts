import { Bread } from './Bread';
import { Bulgogi } from './Bulgogi';
import { Shrimp } from './Shrimp';

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