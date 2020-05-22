import { Hamburger } from './Hamburger';

//장식할 빵
export class Bread extends Hamburger {

    add_ingredient(): string {
        return '기본 빵 덮고~';
    }
}