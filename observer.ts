export abstract class Generator {
    //등록된 옵저버들을 관리하기 위한 ArrayList
    private observers: ArrayList<Observer>;
 
    public AddObserver(Observer observer): void { //옵저버 등록
        this.observers.add(observer);
    }
 
    public NotifyObservers(): void { //상태 변화에 따른 옵저버들에게 통지해주는 메서드
        for (let i = 0; i < this.observers.size(); i++) {
            this.observers.get(i).update(this);
        }
    }

    public abstract getString(): string;
    public abstract execute(): void;
}


export class StatusCenter extends Generator {
    
    in = new BufferedReader(new InputStreamReader(System.in));
    
    private Message: string; //상태 정보를 가지는 String형 변수

    public getString(): string { //현재 관찰 대상자의 상태 정보를 반환
        return this.Message;
    }
    
    public execute(): void {
        while(true) {
            try {
                this.Message = in.readLine();    //키보드 입력이 있었다는 건 상태 정보가 변한 것을 의미
                NotifyObservers();            //등록된 옵저버들에게 통지
            } catch(Exception e) {

            }
        }
    }
}

export interface ObserverCenter {
    public update(generator: Generator): void;  //관찰 대상자와 상태 정보를 동기화
}



export class StringObserver implements ObserverCenter {
    Message: string;
    public update(generator: Generator): void {
        this.Message = generator.getString();        //관찰 대상자의 상태정보를 가져옴
        console.log("StringObserver : " + this.Message); //화면에 출력
    }
}

public class StringCountObserver implements Observer {
    count: number;
    public update(generator: Generator): void {
        this.count = generator.getString().length();        //관찰 대상자의 상태 정보를 가져와 문자열 길이를 저장
        console.log("StringCountObserver : " + this.count);
    }
}