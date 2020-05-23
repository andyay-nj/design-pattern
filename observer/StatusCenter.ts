import { Generator } from './Generator';

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