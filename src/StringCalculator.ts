export class StringCalculator {
    public static add(value:string): number {
        if(value === '') return 0
        return Number(value)
    }
}
