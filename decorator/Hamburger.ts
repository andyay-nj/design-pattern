//최상위 햄버거
export abstract class Hamburger {
    
    //장식 할 대상과 장식자가 공통으로 가져야 할 인터페이스를 정의
    public abstract add_ingredient(): void;
}