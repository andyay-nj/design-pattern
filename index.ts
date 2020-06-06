import { MakeBurger as decorator } from './decorator';
import { Main as observer } from './observer';
import { Main as strategy } from './strategy';
import { Main as factory } from './factory';
// import { Main as abstract1 } from './abstract_factory1';
import { Main as abstract2 } from './abstract_factory2';

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
print('strategy', strtgy);

const fctry = new factory();
print('factory', fctry);

// const abs_fctry1 = new abstract1();
// print('abstract1', abs_fctry1);

const abs_fctry2 = new abstract2();
print('abstract2', abs_fctry2);