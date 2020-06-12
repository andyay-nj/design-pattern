class Printer {
    private static Printer printer = new Printer();
    private static int count = 0;

    private Printer() {}

    public static Printer getInstance() {
        return printer;
    }

    public synchronized static void print(String input) {
        count++;
        System.out.println(input + "count : "+ count);
    }
}