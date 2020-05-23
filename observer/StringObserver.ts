import { ObserverCenter } from './ObserverCenter';

export class StringObserver implements ObserverCenter {
    Message: string;
    public update(generator: Generator): void {
        this.Message = generator.getString();        //관찰 대상자의 상태정보를 가져옴
        console.log("StringObserver : " + this.Message); //화면에 출력
    }
}