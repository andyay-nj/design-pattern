public class StringCountObserver implements Observer {
    count: number;
    public update(generator: Generator): void {
        this.count = generator.getString().length();        //관찰 대상자의 상태 정보를 가져와 문자열 길이를 저장
        console.log("StringCountObserver : " + this.count);
    }
}