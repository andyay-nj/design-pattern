import { Ingredient } from './Ingredient';
// import { Hamburger } from './Hamburger';

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
 