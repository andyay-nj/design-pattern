import { Ingredient } from './Ingredient';
// import { Hamburger } from './Hamburger';

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
 