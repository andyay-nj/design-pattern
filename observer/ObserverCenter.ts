export interface ObserverCenter {
    public update(generator: Generator): void;  //관찰 대상자와 상태 정보를 동기화
}