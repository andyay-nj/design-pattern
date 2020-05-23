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