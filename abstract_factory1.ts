abstract class Alert {
    abstract show = (): string => "";
}
class AlertIOS extends Alert {
    show = (): string => "[Alert IOS]";
}
class AlertLinux extends Alert {
    show = (): string => "[Alert Linux]";
}
class AlertWindows extends Alert {
    show = (): string => "[Alert Windows]";
}

abstract class Button {
    abstract show = (): string => "";
}
class ButtonIOS extends Button {
    show = () => "[Button IOS]";
}
class ButtonLinux extends Button {
    show = () => "[Button Linux]";
}
class ButtonWindows extends Button {
    show = () => "[Button Windows]";
}

abstract class Factory {
    abstract getAlert = (): Alert => null;
    abstract getButton = (): Button => null;
}

class Linux extends Factory {
    getAlert = () => new AlertLinux();
    getButton = () => new ButtonLinux();
}

class IOS extends Factory {
    getAlert = () => new AlertIOS();
    getButton = () => new ButtonIOS();
}

class Windows extends Factory {
    getAlert = () => new AlertWindows();
    getButton = () => new ButtonWindows();
}

// Anonymous Test class
new class {
    constructor() {
        const windows: Factory = new Windows();
        console.log(windows.getAlert().show(), windows.getButton().show());

        const linux: Factory = new Linux();
        console.log(linux.getAlert().show(), linux.getButton().show());

        const ios: Factory = new IOS();
        console.log(ios.getAlert().show(), ios.getButton().show());
    }
}