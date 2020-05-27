import { MakeBurger as decorator } from './decorator';
import { Main as observer } from './observer';
import { Main as strategy, Card, Cash } from './strategy';
import { Main as factory } from './factory';

const print = (name: string, func: any) => {
    console.log(`------ < ${name}_pattern > ------`);
    func.main();
    console.log(`---------------------------------`);
    console.log(` `);
}

const deco = new decorator();
print('decorator', deco);

const obsvr = new observer();
print('observer', obsvr);

const strtgy = new strategy();
console.log(`------ < strategy_pattern > ------`);
strtgy.main('나정', new Card());
strtgy.main('나정', new Cash());
console.log(`----------------------------------`);
console.log(` `);


const fctry = new factory();
print('factory', fctry);

/**

import { MakeBurger as decorator } from './decorator';
import { Main as observer } from './observer';
import { Main as strategy } from './strategy';
import { Main as factory } from './factory';

const print = (name: string, func: any) => {
    console.log(`------ < ${name}_pattern > ------`);
    func.main();
    console.log(`---------------------------`);
    console.log(` `);
}

const deco = new decorator();
print('decorator', deco);

const obsvr = new observer();
print('observer', obsvr);

const strtgy = new strategy();
print('strategy', strtgy);

const fctry = new factory();
print('factory', fctry);

 */